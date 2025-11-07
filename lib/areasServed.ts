import { client } from "@/lib/sanity";

export interface ServiceArea {
  name: string[];
}
export const revalidate = 30;
export async function getServiceAreasData() {
  const query = `*[_type == 'serviceArea'][0] {name}`;
  const data: ServiceArea = await client.fetch(query);

  return data;
}

export default getServiceAreasData;
