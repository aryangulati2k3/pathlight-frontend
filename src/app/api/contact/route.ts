import { contactFormSchema } from "@/validations/contact/contact";
import { NextResponse } from "next/server";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;

// super-light in-memory limiter (works fine on a single node).
// for serverless/multi-instance, swap to Upstash/Redis later.
const bucket = new Map<string, { count: number; resetAt: number }>();

function getIp(req: Request) {
  // Vercel/most proxies
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() ?? "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}

function rateLimit(key: string) {
  const now = Date.now();
  const existing = bucket.get(key);

  if (!existing || existing.resetAt <= now) {
    bucket.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true };
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return { ok: false, retryAfterMs: existing.resetAt - now };
  }

  existing.count += 1;
  bucket.set(key, existing);
  return { ok: true };
}

export async function POST(req: Request) {
  try {
    const ip = getIp(req);
    const rl = rateLimit(`contact:${ip}`);

    if (!rl.ok) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again shortly." },
        {
          status: 429,
          headers: {
            "retry-after": String(Math.ceil((rl.retryAfterMs ?? 0) / 1000)),
          },
        },
      );
    }

    const json = await req.json();
    const parsed = contactFormSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid payload", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    // honeypot: silently succeed
    if (parsed.data.website && parsed.data.website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const formId = process.env.GOOGLE_FORMS_ID;

    const eName = process.env.GOOGLE_FORMS_ENTRY_NAME;
    const eEmail = process.env.GOOGLE_FORMS_ENTRY_EMAIL;
    const ePhone = process.env.GOOGLE_FORMS_ENTRY_PHONE;
    const eZipcode = process.env.GOOGLE_FORMS_ENTRY_ZIPCODE;
    const eMessage = process.env.GOOGLE_FORMS_ENTRY_MESSAGE;

    if (!formId || !eName || !eEmail || !ePhone || !eZipcode || !eMessage) {
      return NextResponse.json(
        { ok: false, error: "Contact form is not configured on the server." },
        { status: 500 },
      );
    }

    const url = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

    const body = new URLSearchParams();
    body.set(eName, parsed.data.name);
    body.set(eEmail, parsed.data.email);
    body.set(ePhone, parsed.data.phone ?? "");
    body.set(eZipcode, parsed.data.zipcode ?? "");
    body.set(eMessage, parsed.data.message);

    const googleRes = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body,
      redirect: "manual",
    });

    // Google commonly returns 200 or 302 on success.
    if (googleRes.status >= 200 && googleRes.status < 400) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    return NextResponse.json(
      { ok: false, error: "Failed to submit. Please try again." },
      { status: 502 },
    );
  } catch {
    return NextResponse.json({ ok: false, error: "Unexpected error" }, { status: 500 });
  }
}
