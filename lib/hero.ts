import { client, urlFor } from "@/lib/sanity";

export interface HeroItem {
  title: string;
  subTitle: string;
  backgroundImage: any;
}
export const revalidate = 30; // revalidate at most every 30s
export async function getHeroSectionData() {
  const query = `*[_type == 'hero'][0] {title, subTitle, backgroundImage}`;
  const data: HeroItem = await client.fetch(query);

  return data;
}

export function getURL(image: any) {
  return urlFor(image).url();
}
export default getHeroSectionData;
