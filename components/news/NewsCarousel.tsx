"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import type { NewsItem } from "@/lib/content";
import styles from "./News.module.scss";

type NewsCarouselProps = {
  items: readonly NewsItem[];
  children: ReactNode;
};

function Chevron({ direction }: { direction: "left" | "right" }) {
  const path = direction === "left" ? "M14.5 5.5 8 12l6.5 6.5" : "M9.5 5.5 16 12l-6.5 6.5";

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.chevron}>
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NewsCarousel({ items, children }: NewsCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = () => {
    const el = scrollerRef.current;
    if (!el) {
      return;
    }
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  };

  useLayoutEffect(() => {
    const el = scrollerRef.current;
    const card = el?.querySelector<HTMLElement>("[data-card]");
    if (!el || !card) {
      return;
    }
    el.scrollLeft = Math.round(card.offsetWidth * 0.46);
    updateEdges();

    const onScroll = () => updateEdges();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    const card = el?.querySelector<HTMLElement>("[data-card]");
    const track = el?.querySelector("ul");
    if (!el || !card || !track) {
      return;
    }
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) {
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior = reduce ? "auto" : "smooth";

    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByCard(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByCard(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      el.scrollTo({ left: 0, behavior });
    } else if (event.key === "End") {
      event.preventDefault();
      el.scrollTo({ left: el.scrollWidth, behavior });
    }
  };

  return (
    <div className={styles.carousel} role="region" aria-roledescription="カルーセル" aria-label="お知らせ">
      <div className={styles.head}>
        {children}
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            aria-label="前のお知らせ"
            aria-controls="news-scroller"
            disabled={atStart}
            onClick={() => scrollByCard(-1)}
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            className={styles.arrow}
            aria-label="次のお知らせ"
            aria-controls="news-scroller"
            disabled={atEnd}
            onClick={() => scrollByCard(1)}
          >
            <Chevron direction="right" />
          </button>
        </div>
      </div>
      <div
        id="news-scroller"
        ref={scrollerRef}
        className={styles.scroller}
        tabIndex={0}
        aria-label="お知らせの一覧。左右の矢印キーでスクロールできます。"
        onKeyDown={onKeyDown}
      >
        <ul className={styles.track}>
          {items.map((item) => (
            <li key={item.id} data-card className={styles.item}>
              <article className={styles.card}>
                <div className={styles.thumb}>
                  <Image
                    src="/images/news.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 800px) 78vw, 380px"
                    className={styles.photo}
                  />
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <time dateTime={item.dateTime}>{item.date}</time>
                <span className={styles.tag}>{item.tag}</span>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
