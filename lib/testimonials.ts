import { client } from "@/lib/sanity";

export interface Testimonial {
  name: string;
  comment: string;
}

export async function getTestimonialsData() {
  const query = `*[_type == 'testimonial'] {name, comment}`;
  const data: Testimonial[] = await client.fetch(query);

  return data;
}

export default getTestimonialsData;
