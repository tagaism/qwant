import Image from "next/image";
import { partners } from "@/lib/content";
import styles from "./Partners.module.scss";

export function Partners() {
  return (
    <section id="partners" className={styles.section} aria-labelledby="partners-heading">
      <header className={styles.intro}>
        <h2 id="partners-heading">共創パートナー</h2>
        <p>教授の写真、CV</p>
      </header>
      <ul className={styles.grid}>
        {partners.map((partner) => (
          <li key={partner.id}>
            <article className={styles.card}>
              <div className={styles.photoWrap}>
                <Image
                  src="/images/portrait.jpg"
                  alt="教授の写真プレースホルダー"
                  fill
                  sizes="(max-width: 800px) 80vw, 240px"
                  className={styles.photo}
                />
              </div>
              <h3>{partner.name}</h3>
              <p className={styles.affiliation}>{partner.affiliation}</p>
              <p className={styles.cv}>{partner.cv}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
