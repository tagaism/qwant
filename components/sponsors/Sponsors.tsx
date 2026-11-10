import { SectionHeading } from "@/components/ui/SectionHeading";
import { SponsorMarquee } from "./SponsorMarquee";
import styles from "./Sponsors.module.scss";

export function Sponsors() {
  return (
    <section id="sponsors" className={styles.section} aria-labelledby="sponsors-heading">
      <div className={styles.head}>
        <SectionHeading id="sponsors-heading" title="Sponsors" subtitle="会員・連携機関" />
      </div>
      <SponsorMarquee />
    </section>
  );
}
