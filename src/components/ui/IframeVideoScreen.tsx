"use client";

import useScreenSize from "@/hooks/ui/useScreenSize";
import { cn } from "@/lib/utils";
import React from "react";

type IframeVideoScreenProps = {
  src?: string;
  className?: string;
};

const IframeVideScreen: React.FC<IframeVideoScreenProps> = ({
  src = "https://www.youtube.com/embed/ldnEy7tj8Ho?autoplay=1&mute=1&controls=0&rel=0&playsinline=1&loop=1&playlist=ldnEy7tj8Ho&modestbranding=1&enablejsapi=1",
  className,
}) => {
  const { width, height } = useScreenSize();

  // Maintain 16:9 aspect ratio and center it
  const calcWidth = width / 16 > height / 9 ? width : height * (16 / 9);
  const calcHeight = (calcWidth / 16) * 9;

  return (
    <div className={cn("relative h-screen w-full overflow-hidden", className)}>
      <iframe
        src={src}
        width={calcWidth}
        height={calcHeight}
        allow="autoplay; fullscreen"
        allowFullScreen
        data-ready="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
      />
    </div>
  );
};

export default IframeVideScreen;
