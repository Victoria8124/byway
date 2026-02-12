import { useContext } from 'react';
import { LevelContext } from '../../../../context/LevelContext';
import Card from './card';

const CardList = () => {
  const context = useContext(LevelContext);

  if (!context) return null;

  const { cards } = context;
  return (
    <div className="flex gap-10">
      {cards.map((card) => (
        <Card key={card.url} card={card} />
      ))}
    </div>
  );
};

export default CardList;
