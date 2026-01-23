import type { IData } from "../model/card.type";
export interface Props {
  card: IData;
}
const Card = ({ card }: Props) => {
    if (!card) return null;
  return (
    <div className="shadow-sm w-2xs rounded-3xl m-4 p-6 bg-[#F9F9FB]">
      <div className="flex items-center gap-6">
        <img src={card.url} alt="img" />
        <div className="flex flex-col gap-2">
          <p className="text-2xl">{card.category}</p>
          <p className="text-xl text-neutral-400">{card.coursesCount}</p>
        </div>
      </div>
    </div>
  );
};
 
export default Card;
