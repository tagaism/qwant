import Image from "next/image";
import { heroCopy } from "@/lib/content";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media} aria-hidden="true">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className={styles.photo}
        />
        <div className={styles.veil} />
      </div>
      <div className={styles.content}>
        <h1 id="hero-title">Tokyo Quantum Gateway</h1>
        <p className={styles.copy}>
          {heroCopy[0]}
          <br className={styles.break} />
          {heroCopy[1]}
        </p>
      </div>
    </section>
  );
}
