import { useContext } from 'react';
import { LevelContext } from '../../../context/LevelContext';
import Status from './status';

const StatusList = () => {
  const context = useContext(LevelContext);

  if (!context) return null;

  const { status } = context;
  return (
    <div className="flex gap-10">
      {status.map((sta) => (
        <Status key={sta.sum} sta={sta} />
      ))}
    </div>
  );
};

export default StatusList;
