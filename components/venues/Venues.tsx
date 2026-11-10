import Image from "next/image";
import { eventBody, spaceBody } from "@/lib/content";
import { PillLink } from "@/components/ui/PillLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Venues.module.scss";

type PanelProps = {
  id: string;
  headingId: string;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  imageSizes: string;
  align: "start" | "end";
  moreLabel: string;
};

function Panel({
  id,
  headingId,
  title,
  subtitle,
  body,
  image,
  imageSizes,
  align,
  moreLabel,
}: PanelProps) {
  return (
    <section id={id} className={styles.panel} aria-labelledby={headingId}>
      <div className={styles.bg} aria-hidden="true">
        <Image src={image} alt="" fill sizes={imageSizes} className={styles.photo} />
        <div className={styles.shade} />
      </div>
      <div className={align === "end" ? `${styles.copy} ${styles.copyEnd}` : styles.copy}>
        <SectionHeading id={headingId} title={title} subtitle={subtitle} />
        <p className={styles.body}>{body}</p>
        <PillLink href={`/#${id}`}>
          View More
          <span className="sr-only">：{moreLabel}</span>
        </PillLink>
      </div>
    </section>
  );
}

export function Venues() {
  return (
    <div className={styles.wrap}>
      <Panel
        id="space"
        headingId="space-heading"
        title="Space"
        subtitle="スペース"
        body={spaceBody}
        image="/images/space.jpg"
        imageSizes="(max-width: 800px) 100vw, 90vw"
        align="start"
        moreLabel="スペース"
      />
      <Panel
        id="event"
        headingId="event-heading"
        title="Event"
        subtitle="イベント"
        body={eventBody}
        image="/images/event.jpg"
        imageSizes="(max-width: 800px) 100vw, 90vw"
        align="end"
        moreLabel="イベント"
      />
    </div>
  );
}
