import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const videoData: Record<
  string,
  {
    titleEN: string;
    titleIT: string;
    titleTH: string;
    videoUrl: string;
    poster: string;
  }
> = {
  sociality: {
    titleEN: "3 Minutes of Sociality",
    titleIT: "3 minuti di socialità",
    titleTH: "3 นาทีแห่งการเข้าสังคม",
    videoUrl: "https://pub-placeholder.r2.dev/sipsofitaly/sociality.mp4",
    poster: "",
  },
  nose: {
    titleEN: "Follow Your Nose",
    titleIT: "Segui il tuo naso",
    titleTH: "ใช้จมูกตามกลิ่นเลย",
    videoUrl: "https://pub-placeholder.r2.dev/sipsofitaly/nose.mp4",
    poster: "",
  },
  eyes: {
    titleEN: "The First Sip is With Your Eyes",
    titleIT: "Il primo sorso è con gli occhi",
    titleTH: "จิบแรกคือด้วยสายตา",
    videoUrl: "https://pub-placeholder.r2.dev/sipsofitaly/eyes.mp4",
    poster: "",
  },
  feel: {
    titleEN: "Can You Feel It?",
    titleIT: "Lo senti?",
    titleTH: "รู้สึกได้ไหม?",
    videoUrl: "https://pub-placeholder.r2.dev/sipsofitaly/feel.mp4",
    poster: "",
  },
};

export default async function VideoPage(props: PageProps<"/v/[slug]">) {
  const { slug } = await props.params;
  const video = videoData[slug];

  if (!video) {
    redirect("/");
  }

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

        <div className="w-full max-w-[900px] aspect-video">
          <video
            className="w-full h-full"
            controls
            playsInline
            preload="metadata"
            poster={video.poster || undefined}
            src={video.videoUrl}
          />
        </div>

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
