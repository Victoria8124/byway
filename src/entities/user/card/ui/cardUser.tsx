import type { IUser } from '../model/card.type';

export interface Props {
  user: IUser;
}
const CardUser = ({ user }: Props) => {
  return (
    <div className="rounded-xl bg-[#F9F9FB] w-2xs p-6">
      <div className="flex flex-col items-center gap-6">
        <img
          src={user.avatarUrl}
          alt="userImg"
          className="w-50 h-50 rounded-full object-cover "
        />
        <div className="flex flex-col items-center gap-2">
          <p className="text-teal-700 text-2xl">{user.userName}</p>
          <p className="text-neutral-600 text-xl">{user.title}</p>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
