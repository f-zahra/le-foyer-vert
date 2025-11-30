import { client, urlFor } from "@/lib/sanity";

export interface AboutItem {
  subtitle: string;
  content: string;
  image: any;
  details: string[];
}
export const revalidate = 30; // revalidate at most every 30s
export async function getAboutData(lang: string) {
  const query = `*[_type == 'about'][0] {"subtitle":subtitle.${lang},"content": content.${lang}, image,"details": details.${lang}}`;
  const data: AboutItem = await client.fetch(query, { lang });

  return data;
}

export function getURL(image: any) {
  return urlFor(image).url();
}
export default getAboutData;
