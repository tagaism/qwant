import Link from "next/link";
import { mainNav, memberLink } from "@/lib/content";
import { cx } from "@/lib/cx";
import { LogoBadge } from "@/components/ui/LogoBadge";
import { PillLink } from "@/components/ui/PillLink";
import { MobileNav } from "./MobileNav";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.skip} href="#top">
        本文へスキップ
      </a>
      <div className={styles.inner}>
        <LogoBadge variant="header" />
        <nav className={styles.desktop} aria-label="メイン">
          <ul className={styles.navList}>
            {mainNav.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={cx(styles.navLink, item.current && styles.current)}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <PillLink href={memberLink.href} variant="light" className={styles.mypage}>
          {memberLink.label}
        </PillLink>
        <MobileNav items={mainNav} memberHref={memberLink.href} memberLabel={memberLink.label} />
      </div>
    </header>
  );
}
