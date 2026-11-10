import { facility, mapEmbedUrl, mapLinkUrl } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Access.module.scss";

function ExternalIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={styles.external}>
      <path
        d="M4.5 11.5 11.5 4.5M7 4.5h4.5V9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Access() {
  return (
    <section id="access" className={styles.section} aria-labelledby="access-heading">
      <div className={styles.head}>
        <SectionHeading id="access-heading" title="Access" subtitle="アクセス" />
      </div>
      <dl className={styles.details}>
        <div className={styles.row}>
          <dt>施設名称</dt>
          <dd>{facility.name}</dd>
        </div>
        <div className={styles.row}>
          <dt>施設住所</dt>
          <dd>
            <address className={styles.address}>
              {facility.postalCode}
              <br />
              {facility.address}
            </address>
            <ul className={styles.walks}>
              {facility.walks.map((walk) => (
                <li key={walk}>{walk}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div className={styles.row}>
          <dt>開館時間</dt>
          <dd>
            <p className={styles.hours}>
              <span>平日</span>
              <span>{facility.hours}</span>
            </p>
            {facility.notes.map((note) => (
              <p key={note} className={styles.note}>
                {note}
              </p>
            ))}
          </dd>
        </div>
      </dl>
      <div className={styles.map}>
        <iframe
          className={styles.frame}
          title="新東京ビル周辺の地図"
          src={mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a className={styles.mapLink} href={mapLinkUrl} target="_blank" rel="noopener noreferrer">
          マップで開く
          <ExternalIcon />
          <span className="sr-only">（新しいタブで開きます）</span>
        </a>
      </div>
    </section>
  );
}
