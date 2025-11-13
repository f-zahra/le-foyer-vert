import { client, urlFor } from "@/lib/sanity";

export interface ProjectImageItem {
  projectTtile: string;
  image: any;
}
export const revalidate = 30;
export async function getProjectGalleryData() {
  const query = `*[_type == 'gallery'] {projectTtile,image}`;
  const data: ProjectImageItem[] = await client.fetch(query);

  return data;
}

export function getURL(image: any) {
  return urlFor(image).url();
}

export default getProjectGalleryData;
