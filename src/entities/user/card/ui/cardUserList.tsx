import CardUser from "./cardUser";
import { User } from "./user.data";

const CardUserList = () => {
  return (
    <div className="m-4">
      {User.map((user) => (
        <CardUser key={user.avatarUrl} user={user} />
      ))}
    </div>
  );
};

export default CardUserList;
