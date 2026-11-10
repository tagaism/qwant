import { mediaCopy } from "@/lib/content";
import { PillLink } from "@/components/ui/PillLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackToTop } from "./BackToTop";
import styles from "./MediaContact.module.scss";

export function MediaContact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.grid}>
        <SectionHeading
          id="contact-heading"
          title="Media Contact"
          subtitle="取材・報道に関するお問い合わせ"
          tone="light"
        />
        <div className={styles.detail}>
          <p>
            {mediaCopy.lead[0]}
            <br className={styles.break} />
            {mediaCopy.lead[1]}
          </p>
          <p className={styles.note}>
            {mediaCopy.note[0]}
            <br className={styles.break} />
            {mediaCopy.note[1]}
          </p>
          <div className={styles.actions}>
            <PillLink href="/#contact">お問い合わせはこちら</PillLink>
          </div>
        </div>
      </div>
      <BackToTop />
    </section>
  );
}
