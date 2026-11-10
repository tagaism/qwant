import { newsItems } from "@/lib/content";
import { PillLink } from "@/components/ui/PillLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsCarousel } from "./NewsCarousel";
import styles from "./News.module.scss";

export function News() {
  return (
    <section id="news" className={styles.section} aria-labelledby="news-heading">
      <NewsCarousel items={newsItems}>
        <SectionHeading id="news-heading" title="News&Topics" subtitle="お知らせ" />
      </NewsCarousel>
      <div className={styles.more}>
        <PillLink href="/#news">NEWS&TOPICS一覧へ</PillLink>
      </div>
    </section>
  );
}
