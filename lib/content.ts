export type NavItem = {
  href: string;
  label: string;
  current?: boolean;
};

export type NewsTag = "News" | "Event Report" | "Press Release";

export type NewsItem = {
  id: string;
  title: string;
  date: string;
  dateTime: string;
  tag: NewsTag;
};

export type Partner = {
  id: string;
  name: string;
  affiliation: string;
  cv: string;
};

export function placeholderText(count: number): string {
  return "テキスト".repeat(count);
}

export const mainNav: readonly NavItem[] = [
  { href: "/#top", label: "ホーム", current: true },
  { href: "/#about", label: "TQGについて" },
  { href: "/#space", label: "施設紹介" },
  { href: "/#news", label: "トピックス" },
  { href: "/#event", label: "イベント" },
  { href: "/#contact", label: "お問い合わせ" },
];

export const memberLink = {
  href: "/#top",
  label: "会員MY PAGE",
} as const;

export const serviceLinks: readonly NavItem[] = [
  { href: "/#top", label: "会員ログイン" },
  { href: "/#contact", label: "お問い合わせ" },
];

export const companyLinks: readonly NavItem[] = [
  { href: "/#top", label: "Cookieに関する通知" },
  { href: "/#top", label: "会社概要" },
];

export const heroCopy = [
  "キャッチコピーテキストテキストテキストテキストテキストテキスト",
  "テキストテキストテキストテキストテキストテキストテキスト",
] as const;

export const aboutBody = placeholderText(52);

export const newsItems: readonly NewsItem[] = [
  { id: "news-1", title: "お知らせタイトルテキストテキストテキストテキスト…", date: "2027.01.16", dateTime: "2027-01-16", tag: "News" },
  { id: "news-2", title: "お知らせタイトルテキストテキストテキストテキスト…", date: "2027.01.16", dateTime: "2027-01-16", tag: "Event Report" },
  { id: "news-3", title: "お知らせタイトルテキストテキストテキストテキスト…", date: "2027.01.16", dateTime: "2027-01-16", tag: "Press Release" },
  { id: "news-4", title: "お知らせタイトルテキストテキストテキストテキスト…", date: "2027.01.16", dateTime: "2027-01-16", tag: "News" },
  { id: "news-5", title: "お知らせタイトルテキストテキストテキストテキスト…", date: "2027.01.16", dateTime: "2027-01-16", tag: "Event Report" },
  { id: "news-6", title: "お知らせタイトルテキストテキストテキストテキスト…", date: "2027.01.16", dateTime: "2027-01-16", tag: "Press Release" },
  { id: "news-7", title: "お知らせタイトルテキストテキストテキストテキスト…", date: "2027.01.16", dateTime: "2027-01-16", tag: "News" },
  { id: "news-8", title: "お知らせタイトルテキストテキストテキストテキスト…", date: "2027.01.16", dateTime: "2027-01-16", tag: "Event Report" },
];

export const spaceBody = placeholderText(36);
export const eventBody = placeholderText(36);

export const partners: readonly Partner[] = [
  { id: "partner-1", name: "教授氏名テキスト", affiliation: "所属機関テキスト", cv: placeholderText(16) },
  { id: "partner-2", name: "教授氏名テキスト", affiliation: "所属機関テキスト", cv: placeholderText(16) },
  { id: "partner-3", name: "教授氏名テキスト", affiliation: "所属機関テキスト", cv: placeholderText(16) },
  { id: "partner-4", name: "教授氏名テキスト", affiliation: "所属機関テキスト", cv: placeholderText(16) },
];

export const facility = {
  name: "Tokyo Quantum Gateway",
  postalCode: "〒100-0005",
  address: "東京都千代田区丸の内三丁目3番1号 新東京ビル8F",
  hours: "9:00~18:00",
  notes: [
    "※ビルのメンテナンス時はご利用いただけません",
    "※イベントによって営業時間を変更する場合があります",
  ],
  walks: [
    "JR有楽町駅 国際フォーラム口より徒歩3分",
    "地下鉄有楽町駅 D5出口より徒歩3分",
    "地下鉄千代田線 二重橋前駅 出口1より徒歩2分",
    "JR京葉線 東京駅B1F 地下コンコース出口6より連絡",
    "JR東京駅 丸の内南口より徒歩5分",
  ],
} as const;

export const mapPoint = {
  lat: 35.6775139,
  lon: 139.7624917,
} as const;

export const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=139.7480%2C35.6680%2C139.7780%2C35.6880&layer=mapnik&marker=${mapPoint.lat}%2C${mapPoint.lon}`;

export const mapLinkUrl = `https://www.openstreetmap.org/?mlat=${mapPoint.lat}&mlon=${mapPoint.lon}#map=17/${mapPoint.lat}/${mapPoint.lon}`;

export const mediaCopy = {
  lead: ["取材・インタビューのお申し込みや、報道に関するお問い合わせは、", "こちらからご連絡ください。"],
  note: ["※メディア関係者以外の方からのお問い合わせは、ご返信できない", "場合がございます。あらかじめご了承ください。"],
} as const;

export const logoCount = 12;
