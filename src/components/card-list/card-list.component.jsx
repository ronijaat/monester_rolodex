import Card from "../card/card.component";
import './card-list.styles.css'

const CardList =({monesters}) =>{
    return (
    <div className='card-list'>
                {monesters.map((monester) => {
                    return (
                        <Card monester={monester}/>
                )}
            )}
    </div>
    )};

export default CardList;