"use client";

import { useState } from "react";
import { logoCount } from "@/lib/content";
import { cx } from "@/lib/cx";
import styles from "./Sponsors.module.scss";

function LogoRow({ offset }: { offset: boolean }) {
  const ids = Array.from({ length: logoCount }, (_, index) => index);

  return (
    <div className={cx(styles.window, offset && styles.offset)} aria-hidden="true">
      <div className={styles.track}>
        {[...ids, ...ids].map((id, index) => (
          <div className={styles.logoCard} key={`${offset ? "b" : "a"}-${id}-${index}`}>
            LOGO
          </div>
        ))}
      </div>
    </div>
  );
}

export function SponsorMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div className={styles.marquee} data-paused={paused ? "true" : "false"}>
      <p className="sr-only">
        会員・連携機関のロゴが右から左へ自動で流れます。停止ボタンで一時停止できます。
      </p>
      <button
        type="button"
        className={styles.pause}
        aria-pressed={paused}
        onClick={() => setPaused((value) => !value)}
      >
        {paused ? "再生" : "一時停止"}
      </button>
      <LogoRow offset={false} />
      <LogoRow offset />
    </div>
  );
}
