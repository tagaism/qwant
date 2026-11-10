import Link from "next/link";
import { companyLinks, serviceLinks } from "@/lib/content";
import { LogoBadge } from "@/components/ui/LogoBadge";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <LogoBadge variant="footer" />
          <p className={styles.name}>Tokyo Quantum Gateway</p>
        </div>
        <div className={styles.columns}>
          <nav aria-label="サービス">
            <p className={styles.colTitle}>SERVICE</p>
            <ul>
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="会社情報">
            <p className={styles.colTitle}>COMPANY</p>
            <ul>
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
