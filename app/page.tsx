import Link from "next/link";
import { Users, Wind, Eye, Hand, type LucideIcon } from "lucide-react";

type Experience = {
  slug: string;
  titleEN: string;
  titleIT: string;
  titleTH: string;
  Icon: LucideIcon;
};

const experiences: Experience[] = [
  {
    slug: "sociality",
    titleEN: "3 Minutes of Sociality",
    titleIT: "3 minuti di socialità",
    titleTH: "3 นาทีแห่งการเข้าสังคม",
    Icon: Users,
  },
  {
    slug: "nose",
    titleEN: "Follow Your Nose",
    titleIT: "Segui il tuo naso",
    titleTH: "ใช้จมูกตามกลิ่นเลย",
    Icon: Wind,
  },
  {
    slug: "eyes",
    titleEN: "The First Sip is With Your Eyes",
    titleIT: "Il primo sorso è con gli occhi",
    titleTH: "จิบแรกคือด้วยสายตา",
    Icon: Eye,
  },
  {
    slug: "feel",
    titleEN: "Can You Feel It?",
    titleIT: "Lo senti?",
    titleTH: "รู้สึกได้ไหม?",
    Icon: Hand,
  },
];

export default function Home() {
  return (
    <main className="flex-1 w-full px-5 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl flex flex-col items-center">
        <div
          className="mb-10 sm:mb-14 flex items-center justify-center rounded-full border px-8 py-5"
          style={{
            borderColor: "rgba(200, 169, 110, 0.5)",
            backgroundColor: "#2C1A10",
          }}
        >
          <span
            className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl tracking-[0.25em] uppercase"
            style={{ color: "#C8A96E" }}
          >
            Sips of Italy
          </span>
        </div>

        <h1
          className="font-[family-name:var(--font-playfair)] text-center text-3xl sm:text-5xl md:text-6xl leading-tight"
          style={{ color: "#F5ECD7" }}
        >
          The Art of Italian Coffee
        </h1>

        <p
          className="mt-5 text-center text-sm sm:text-base tracking-[0.2em] uppercase"
          style={{ color: "#C4A882" }}
        >
          Discover <span style={{ color: "#C8A96E" }}>•</span> Scopri{" "}
          <span style={{ color: "#C8A96E" }}>•</span> ค้นพบ
        </p>

        <div className="mt-12 sm:mt-16 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {experiences.map(({ slug, titleEN, titleIT, titleTH, Icon }) => (
            <Link
              key={slug}
              href={`/v/${slug}`}
              className="group relative flex flex-col rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#3D2314",
                borderColor: "rgba(200, 169, 110, 0.4)",
              }}
            >
              <Icon
                size={20}
                strokeWidth={1.5}
                color="#C8A96E"
                className="mb-6"
              />
              <h2
                className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl leading-snug"
                style={{ color: "#F5ECD7" }}
              >
                {titleEN}
              </h2>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "#C4A882", opacity: 0.7 }}
              >
                {titleIT}
                <br />
                {titleTH}
              </p>
              <span
                className="pointer-events-none absolute inset-0 rounded-2xl border transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ borderColor: "#C8A96E" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
