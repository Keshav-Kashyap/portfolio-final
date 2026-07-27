"use client";
import React from "react";
import { ImagesBadge } from "./ui/images-badge";

export default function ImagesBadgeDemoTwo() {
  return (
    <div className="flex w-full items-center justify-center py-20" style={{ position: "relative", zIndex: 10 }}>
      <ImagesBadge
        text="View My Projects"
        images={[
          "/project_images/ezy.webp",
          "/project_images/qra.webp",
          "/project_images/sers.webp",
        ]}
        folderSize={{ width: 60, height: 45 }}
        teaserImageSize={{ width: 50, height: 35 }}
        hoverImageSize={{ width: 175, height: 135 }}
        hoverTranslateY={-130}
        hoverSpread={60}
      />
    </div>
  );
}
