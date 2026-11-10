"use client";

import styles from "./MediaContact.module.scss";

export function BackToTop() {
  const onClick = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.getElementById("top")?.focus({ preventScroll: true });
  };

  return (
    <button type="button" className={styles.backTop} onClick={onClick} aria-label="ページ上部へ戻る">
      <span className={styles.rule} aria-hidden="true" />
      <span className={styles.backLabel} aria-hidden="true">
        <span>BACK</span>
        <span>TO</span>
        <span>TOP</span>
      </span>
    </button>
  );
}
