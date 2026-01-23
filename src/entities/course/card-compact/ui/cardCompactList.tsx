import CardCompact from "./cardCompact";
import { CourseData } from "./course.data";

const CardCompactList = () => {
  return (
    <div className="flex gap-10">
      {CourseData.map((course) => (
        <CardCompact key={course.coverUrl} course={course} />
      ))}
    </div>
  );
};

export default CardCompactList;
