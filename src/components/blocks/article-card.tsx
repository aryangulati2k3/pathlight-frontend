// src/components/blocks/article-card.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export interface ArticleCardProps {
  href: string;
  title: string;
  excerpt: string;
  date?: string;
  category?: string;
  imageUrl?: string;
  imageAlt?: string;
}

/**
 * Single article / publication card with image, meta and excerpt.
 */
export function ArticleCard({
  href,
  title,
  excerpt,
  date,
  category,
  imageUrl,
  imageAlt,
}: ArticleCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-md">
      {imageUrl ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image src={imageUrl} alt={imageAlt ?? ""} fill className="object-cover" />
        </div>
      ) : null}

      <CardHeader className="space-y-1 px-4 pb-2 pt-1 md:px-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          {category ? (
            <span className="rounded-md bg-muted px-2 py-0.5 text-[0.7rem] uppercase tracking-[0.16em]">
              {category}
            </span>
          ) : null}
          {date ? <span>{date}</span> : null}
        </div>
        <Link href={href}>
          <h3 className="text-heading-4 line-clamp-2">{title}</h3>
        </Link>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-between px-4 md:px-5">
        <p className="text-body line-clamp-2 text-sm md:text-[0.95rem]">{excerpt}</p>
        <div className="mt-3">
          <Link
            href={href}
            className="text-caption font-semibold uppercase tracking-[0.18em] underline-offset-4 hover:underline"
          >
            Read more
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
