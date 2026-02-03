import { ChevronRight } from "lucide-react";
import Button from "../../../shared/button/ui/button";
import cn from "classnames";
import type { IInfo } from "../model/info.type";

const InfoSection = ({
  title,
  description,
  buttonText,
  imageSrc,
  imageLeft,
}: IInfo) => {
  return (
    <div className="py-20 px-40 flex-1 bg-[#F9F9FB]">
      <div
        className={cn("flex items-center gap-6", {
          "flex-row-reverse": imageLeft,
        })}
      >
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-medium text-[#1C2024EB]">{title}</h1>
          <p className="font-normal text-neutral-400">{description}</p>
          <Button className="w-fit bg-[#18191B] text-white rounded-3xl text-nowrap flex p-3 items-center">
            <span>{buttonText}</span>
            <ChevronRight />
          </Button>
        </div>
        <div>
          <img src={imageSrc} alt="column" />
        </div>
      </div>
    </div>
  );
};
 
export default InfoSection;