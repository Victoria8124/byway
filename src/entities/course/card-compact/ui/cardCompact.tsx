import type { ICourse } from "../modul/course.type";

export interface Props {
  course: ICourse;
}
const CardCompact = ({course}: Props) => {
  return (
    <div className="w-2xs rounded-xl overflow-hidden bg-[#F9F9FB]">
      <img src={course.coverUrl} alt="course" />
      <div className="p-6 flex flex-col gap-2">
        <p className="text-indigo-500">{course.authorName}</p>
        <p className="text-neutral-600">{course.title}</p>
        <p className="text-indigo-500">{course.price}</p>
      </div>
    </div>
  );
};

export default CardCompact;
