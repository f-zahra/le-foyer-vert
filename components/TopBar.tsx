import { CompanyInformation } from "@/lib/companyInformation";

const TopBar = ({ companyInfo }: { companyInfo: CompanyInformation }) => {
  return (
    <section className="  xl:py-0 bg-black hidden md:block">
      <div className="@container px-8 mx-auto">
        <div className="flex gap-10 items-center justify-evenly text-md font-medium  p-2 min-h-auto text-white font-poppins ">
          <div>
            RBQ: <span>{companyInfo.rbq}</span>
          </div>
          <div>
            <span>{companyInfo.email}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
