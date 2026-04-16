import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  Coffee,
  Palette,
  Zap,
  Sprout,
  Wind,
  Heart,
  Headphones,
  type LucideIcon,
} from "lucide-react";

type Experience = {
  slug: string;
  titleEN: string;
  titleIT: string;
  titleTH: string;
  Icon: LucideIcon;
};

const experiences: Experience[] = [
  {
    slug: "museum",
    titleEN: "The Coffee Museum",
    titleIT: "Il Museo del Caffè",
    titleTH: "พิพิธภัณฑ์กาแฟ",
    Icon: Landmark,
  },
  {
    slug: "cappuccino",
    titleEN: "The Perfect Cappuccino",
    titleIT: "Il Cappuccino Perfetto",
    titleTH: "คาปูชิโนที่สมบูรณ์แบบ",
    Icon: Coffee,
  },
  {
    slug: "colors",
    titleEN: "The Colors of Coffee",
    titleIT: "I Colori del Caffè",
    titleTH: "สีสันของกาแฟ",
    Icon: Palette,
  },
  {
    slug: "espresso",
    titleEN: "The Perfect Espresso",
    titleIT: "Il Vero Espresso Italiano",
    titleTH: "เอสเปรสโซอิตาเลียนแท้",
    Icon: Zap,
  },
  {
    slug: "morettino",
    titleEN: "Morettino — A Sicilian Story",
    titleIT: "Morettino — Storia Siciliana",
    titleTH: "โมเรตติโน — เรื่องราวซิซิลี",
    Icon: Sprout,
  },
  {
    slug: "aroma",
    titleEN: "Follow Your Nose",
    titleIT: "Segui il Naso",
    titleTH: "ตามกลิ่นมา",
    Icon: Wind,
  },
  {
    slug: "missione",
    titleEN: "Missione Thailandia — Fidei Donum",
    titleIT: "Missione Thailandia — Fidei Donum",
    titleTH: "ภารกิจไทยแลนด์ — ฟีเดอี โดนุม",
    Icon: Heart,
  },
  {
    slug: "sound",
    titleEN: "Sound of an Italian Bar",
    titleIT: "I Suoni del Bar Italiano",
    titleTH: "เสียงของบาร์อิตาเลียน",
    Icon: Headphones,
  },
];

export default function Home() {
  return (
    <main className="flex-1 w-full px-5 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl flex flex-col items-center">
        <Image
          src="/logo.png"
          width={140}
          height={140}
          alt="Sips of Italy"
          className="mx-auto mb-8"
        />

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

        <div
          className="mt-6 text-center font-[family-name:var(--font-dm-sans)]"
          style={{ color: "#6B4C2A", fontSize: "13px" }}
        >
          <p>Italy — the world&apos;s largest exporter of roasted coffee</p>
          <p>Italia — il più grande esportatore mondiale di caffè tostato</p>
        </div>

        <div className="mt-12 sm:mt-16 w-full grid grid-cols-2 gap-4 sm:gap-6">
          {experiences.map(({ slug, titleEN, titleIT, titleTH, Icon }, index) => (
            <Link
              key={slug}
              href={`/v/${slug}`}
              className="group relative flex flex-col rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#F5E7C9",
                borderColor: "rgba(139, 69, 19, 0.3)",
              }}
            >
              <span
                className="absolute top-4 right-5 font-[family-name:var(--font-playfair)] text-2xl"
                style={{ color: "#8B4513", opacity: 0.4 }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon
                size={20}
                strokeWidth={1.5}
                color="#8B4513"
                className="mb-6"
              />
              <h2
                className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl leading-snug"
                style={{ color: "#2C1A10" }}
              >
                {titleEN}
              </h2>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "#6B4C2A" }}
              >
                {titleIT}
                <br />
                {titleTH}
              </p>
              <span
                className="pointer-events-none absolute inset-0 rounded-2xl border transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ borderColor: "rgba(139, 69, 19, 0.8)" }}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
