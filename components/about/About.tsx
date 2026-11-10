import { aboutBody } from "@/lib/content";
import { PillLink } from "@/components/ui/PillLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./About.module.scss";

export function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.card}>
        <div className={styles.copy}>
          <SectionHeading id="about-heading" title="About TQG" subtitle="TQGとは" />
        </div>
        <div className={styles.detail}>
          <p className={styles.body}>{aboutBody}</p>
          <div className={styles.actions}>
            <PillLink href="/#about">
              View More
              <span className="sr-only">：TQGについて</span>
            </PillLink>
          </div>
        </div>
      </div>
    </section>
  );
}
