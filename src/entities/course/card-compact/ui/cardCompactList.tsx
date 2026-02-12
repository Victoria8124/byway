import { useContext } from 'react';
import CardCompact from './cardCompact';
import { LevelContext } from '../../../../context/LevelContext';

const CardCompactList = () => {
  const context = useContext(LevelContext);
  if (!context) return null;

  const { courses } = context;
  return (
    <div className="flex gap-10">
      {courses.map((course) => (
        <CardCompact key={course.coverUrl} course={course} />
      ))}
    </div>
  );
};

export default CardCompactList;
