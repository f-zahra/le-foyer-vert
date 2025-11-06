import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  apiVersion: "2025-11-02",
  dataset: "production",
  projectId: "lf56cqvv",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

//convert image to url
export function urlFor(source: any) {
  return builder.image(source);
}
