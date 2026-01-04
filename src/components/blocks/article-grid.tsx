// src/components/blocks/article-grid.tsx
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import type { ArticleCardProps } from "./article-card";
import { ArticleCard } from "./article-card";

export interface ArticleGridProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  articles: ArticleCardProps[];
}

/**
 * Simple grid wrapper for multiple ArticleCard components.
 */
export function ArticleGrid({ id, eyebrow, title, subtitle, articles }: ArticleGridProps) {
  if (!articles.length) return null;

  return (
    <Section id={id}>
      <div className="space-y-8 md:space-y-10">
        <SectionHeader eyebrow={eyebrow} title={title} subtitle={subtitle} align="left" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <ArticleCard key={article.href} {...article} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export type { ArticleCardProps };
