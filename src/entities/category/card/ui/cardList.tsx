import Card from "./card";
import { Data } from "./card.data"

const CardList = () => {
    return ( 
        <div className="flex gap-10">
            {Data.map((card) => (
                <Card key={card.url} card={card}/>
            ))}
        </div>
     );
}
 
export default CardList;