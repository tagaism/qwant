"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { NavItem } from "@/lib/content";
import { cx } from "@/lib/cx";
import { PillLink } from "@/components/ui/PillLink";
import styles from "./Header.module.scss";

type MobileNavProps = {
  items: readonly NavItem[];
  memberHref: string;
  memberLabel: string;
};

export function MobileNav({ items, memberHref, memberLabel }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }
      setOpen(false);
      buttonRef.current?.focus();
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }
      if (panel?.contains(target) || buttonRef.current?.contains(target)) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div className={styles.mobile}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.burger}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "メニューを閉じる" : "メニューを開く"}</span>
        <span className={styles.burgerLines} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <div id={panelId} ref={panelRef} className={styles.panel} hidden={!open}>
        <nav aria-label="モバイル">
          <ul className={styles.panelList}>
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cx(styles.panelLink, item.current && styles.panelCurrent)}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <PillLink
            href={memberHref}
            variant="light"
            className={styles.panelMember}
            onClick={() => setOpen(false)}
          >
            {memberLabel}
          </PillLink>
        </nav>
      </div>
    </div>
  );
}
