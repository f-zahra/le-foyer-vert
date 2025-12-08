"use client";
import LightGallery from "lightgallery/react";
import Image from "next/image";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import { getURL } from "@/lib/aboutData";
import { ProjectImageItem } from "@/lib/projectGallery";
import { Badge } from "@/components/ui/badge";

export default function LightBoxItem({
  photoItem,
  projectTitle,
}: {
  photoItem: ProjectImageItem;
  projectTitle: string;
}) {
  return (
    <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
      <Link href={getURL(photoItem)} className="">
        <Image
          alt={projectTitle}
          src={getURL(photoItem)}
          fill={true}
          sizes="(min-width: 1360px) 1280px, calc(94.23vw + 17px)"
          className="relative object-cover cursor-pointer transition duration-300 hover:brightness-75 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge
            variant="secondary"
            className="bg-background/80 backdrop-blur-xs"
          >
            {projectTitle}
          </Badge>
        </div>
      </Link>
    </LightGallery>
  );
}
