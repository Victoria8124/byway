import type { IStatus } from "../model/status.type";
interface Props {
  sta: IStatus;
}
const Status = ({sta}: Props) => {
    return (
      <div className="w-sm rounded-3xl bg-[#F9F9FB] p-6 flex flex-col">
        <p>{sta.sum}</p>
        <p>{sta.text}</p>
      </div>
    );
}
 
export default Status
