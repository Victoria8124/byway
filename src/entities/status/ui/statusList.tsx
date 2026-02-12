import Status from "./status";
import { Stat } from "./status.data";

const StatusList = () => {
  return (
    <div className="flex gap-10">
      {Stat.map((sta) => (
        <Status key={sta.sum} sta={sta} />
      ))}
    </div>
  );
};

export default StatusList;
