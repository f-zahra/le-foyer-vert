import { client } from "@/lib/sanity";

export interface CompanyInformation {
  name: string;
  address: string;
  phone: string;
  email: string;
  socials: {
    facebook: string;
    instagram: string;
  };
  rbq: string;
  slogan: string;
}

export async function getCompanyInformationData() {
  const query = `*[_type == 'companyInformation'][0] {name,address,phone,email,socials,rbq,slogan}`;
  const data: CompanyInformation = await client.fetch(
    query,
    {},
    { next: { revalidate: 30 } }
  );

  return data;
}
export default getCompanyInformationData;
