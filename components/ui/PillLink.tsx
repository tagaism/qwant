import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";
import styles from "./PillLink.module.scss";

type PillLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
  onClick?: () => void;
};

export function PillLink({ href, children, variant = "dark", className, onClick }: PillLinkProps) {
  return (
    <Link
      href={href}
      className={cx(styles.pill, variant === "light" && styles.light, className)}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
