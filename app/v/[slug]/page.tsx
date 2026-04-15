import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const videoData: Record<
  string,
  {
    titleEN: string;
    titleIT: string;
    titleTH: string;
    videoUrl: string | string[];
    subtitles?: string[];
  }
> = {
  museum: {
    titleEN: "The Coffee Museum — Iconic Brewers",
    titleIT: "Il Museo del Caffè — Le Caffettiere Iconiche",
    titleTH: "พิพิธภัณฑ์กาแฟ — เครื่องชงในตำนาน",
    videoUrl: [
      "https://pub-placeholder.r2.dev/sipsofitaly/bialetti.mp4",
      "https://pub-placeholder.r2.dev/sipsofitaly/cuccumella.mp4",
      "https://pub-placeholder.r2.dev/sipsofitaly/caffettiere-storia.mp4",
    ],
    subtitles: ["La Bialetti", "La Cuccumella", "La Storia"],
  },
  cappuccino: {
    titleEN: "The Perfect Italian Cappuccino",
    titleIT: "Il Cappuccino Perfetto all'Italiana",
    titleTH: "คาปูชิโนอิตาเลียนที่สมบูรณ์แบบ",
    videoUrl: "https://pub-placeholder.r2.dev/sipsofitaly/cappuccino2.mp4",
  },
  colors: {
    titleEN: "The Colors of Coffee",
    titleIT: "I Colori del Caffè",
    titleTH: "สีสันของกาแฟ",
    videoUrl: "https://pub-placeholder.r2.dev/sipsofitaly/colori-caffe_1.mp4",
  },
  espresso: {
    titleEN: "The Perfect Espresso",
    titleIT: "Il Vero Espresso Italiano",
    titleTH: "เอสเปรสโซอิตาเลียนแท้",
    videoUrl: "https://pub-placeholder.r2.dev/sipsofitaly/espresso_1.mp4",
  },
  morettino: {
    titleEN: "Morettino — A Sicilian Coffee Story",
    titleIT: "Morettino — Una Storia di Caffè Siciliana",
    titleTH: "โมเรตติโน — เรื่องราวกาแฟจากซิซิลี",
    videoUrl:
      "https://pub-placeholder.r2.dev/sipsofitaly/morettino-storia-del-caffe.mp4",
  },
  aroma: {
    titleEN: "Follow Your Nose — Coffee Aromas",
    titleIT: "Segui il Naso — Gli Aromi del Caffè",
    titleTH: "ตามกลิ่นมา — กลิ่นหอมของกาแฟ",
    videoUrl: "https://pub-placeholder.r2.dev/sipsofitaly/olfatto.mp4",
  },
};

export default async function VideoPage(props: PageProps<"/v/[slug]">) {
  const { slug } = await props.params;
  const video = videoData[slug];

  if (!video) {
    redirect("/");
  }

  const isMulti = Array.isArray(video.videoUrl);

  return (
    <main className="flex-1 w-full min-h-screen bg-black flex flex-col">
      <Link
        href="/"
        className="absolute top-5 left-5 sm:top-6 sm:left-6 z-10 inline-flex items-center gap-2 text-sm tracking-wide transition-colors"
        style={{ color: "#F5ECD7" }}
      >
        <ArrowLeft size={18} strokeWidth={1.5} />
        Back
      </Link>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 sm:py-24">
        <h1
          className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl text-center mb-6 sm:mb-8"
          style={{ color: "#F5ECD7" }}
        >
          {video.titleEN}
        </h1>

        {isMulti ? (
          <div className="w-full max-w-[900px] flex flex-col">
            {(video.videoUrl as string[]).map((url, idx) => (
              <div key={url} className="flex flex-col">
                {idx > 0 && (
                  <div
                    className="my-10 sm:my-12 w-full h-px"
                    style={{ backgroundColor: "rgba(245, 236, 215, 0.15)" }}
                  />
                )}
                <h2
                  className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl md:text-2xl text-center mb-4 sm:mb-5"
                  style={{ color: "#C4A882" }}
                >
                  {video.subtitles?.[idx]}
                </h2>
                <div className="w-full aspect-video">
                  <video
                    className="w-full h-full"
                    controls
                    playsInline
                    preload="metadata"
                    src={url}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full max-w-[900px] aspect-video">
            <video
              className="w-full h-full"
              controls
              playsInline
              preload="metadata"
              src={video.videoUrl as string}
            />
          </div>
        )}

        <div
          className="mt-6 text-center text-xs sm:text-sm"
          style={{ color: "#F5ECD7", opacity: 0.6 }}
        >
          <p>{video.titleIT}</p>
          <p className="mt-1">{video.titleTH}</p>
        </div>
      </div>
    </main>
  );
}
