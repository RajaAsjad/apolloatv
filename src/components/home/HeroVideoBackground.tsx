"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ParticleCanvas from "@/components/ui/ParticleCanvas";
import { siteImages } from "@/lib/images";

const HERO_VIDEO_ID = "JC2uqv7KNmc";
const embedUrl = `https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`;

export default function HeroVideoBackground() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setShowVideo(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={siteImages.heroBanner}
        alt=""
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        aria-hidden
      />

      {showVideo && (
        <div className="absolute inset-0 hidden overflow-hidden md:block">
          <iframe
            src={embedUrl}
            title="Apollo ATVs showcase video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0 opacity-70"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-apollo-dark via-apollo-dark/90 to-apollo-dark/55 md:via-apollo-dark/85 md:to-apollo-dark/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-apollo-dark via-apollo-dark/40 to-apollo-dark/50" />
      <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_at_30%_50%,rgba(227,30,36,0.15),transparent_60%)] md:block" />

      {showVideo && <ParticleCanvas density={0.00006} />}
    </div>
  );
}
