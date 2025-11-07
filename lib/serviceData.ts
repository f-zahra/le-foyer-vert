import { client, urlFor } from "@/lib/sanity";

export interface ServiceItem {
  icon: string;
  image: any;
  title: string;
  details: string[];
}
export const revalidate = 30;
export async function getServiceData() {
  const query = `*[_type == 'service'] {icon, image, title, details}`;
  const data: ServiceItem[] = await client.fetch(query);

  return data;
}
export function getURL(image: any) {
  return urlFor(image).url();
}
export default getServiceData;
