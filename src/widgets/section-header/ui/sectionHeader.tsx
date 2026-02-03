import { ChevronRight } from "lucide-react";
import Button from "../../../shared/button/ui/button";

const SectionHeader = ({title}: {title: string}) => {
    return (
      <div className="flex justify-between">
        <p className="text-4xl font-medium">{title}</p>
        <Button className="w-fit bg-[#18191B] text-white rounded-3xl text-nowrap flex p-3 items-center">
          <span>See all</span>
          <ChevronRight />
        </Button>
      </div>
    );
}
 
export default SectionHeader;