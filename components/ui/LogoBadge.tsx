import Link from "next/link";
import styles from "./LogoBadge.module.scss";

type LogoBadgeProps = {
  variant: "header" | "footer";
};

export function LogoBadge({ variant }: LogoBadgeProps) {
  const variantClass = variant === "header" ? styles.header : styles.footer;

  return (
    <Link href="/#top" className={`${styles.badge} ${variantClass}`}>
      LOGO
    </Link>
  );
}
