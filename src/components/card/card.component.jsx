import './card.styles.css';

const Card = ({monester})=> {
        const {id,name,email} = monester;
        return (
            <div className='card-container' key={id}>
                    <img 
                        src={`https://robohash.org/${id}?set=set2&size=180x190`} 
                        alt={`monester ${name}`} 
                    />
                    <h2>{name}</h2>
                    <p>{email}</p>
            </div>
        )
    }

export default Card;