import { useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext';
import CardUser from './cardUser';

const CardUserList = () => {
  const context = useContext(LevelContext);

  if (!context) return null;

  const { user } = context;
  return (
    <div>
      {user.map((user) => (
        <CardUser key={user.avatarUrl} user={user} />
      ))}
    </div>
  );
};

export default CardUserList;
