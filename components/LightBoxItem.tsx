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

export default function LightBoxItem({
  photoItem,
  projectTitle,
}: {
  photoItem: ProjectImageItem;
  projectTitle: string;
}) {
  return (
    <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
      {photoItem.image.map((item: any, index: number) => {
        return (
          <Link key={index} href={getURL(item)}>
            <Image
              alt={projectTitle}
              src={getURL(item)}
              fill={true}
              sizes="(min-width: 1360px) 1280px, calc(94.23vw + 17px)"
              className="object-cover "
            />
          </Link>
        );
      })}
    </LightGallery>
  );
}
