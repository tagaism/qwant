import { cx } from "@/lib/cx";
import styles from "./SectionHeading.module.scss";

type SectionHeadingProps = {
  id: string;
  title: string;
  subtitle: string;
  tone?: "dark" | "light";
};

export function SectionHeading({ id, title, subtitle, tone = "dark" }: SectionHeadingProps) {
  return (
    <div className={cx(styles.heading, tone === "light" && styles.light)}>
      <h2 id={id}>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
