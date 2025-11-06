import { client, urlFor } from "@/lib/sanity";

export interface AboutItem {
  title: string;
  content: string;
  image: any;
  details: string[];
}
export async function getAboutData() {
  const query = `*[_type == 'about'][0] {title, content, image, details}`;
  const data: AboutItem = await client.fetch(query);

  return data;
}

export function getURL(image: any) {
  return urlFor(image).url();
}
export default getAboutData;
