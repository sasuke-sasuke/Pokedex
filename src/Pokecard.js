import './Pokecard.css';

const Pokecard = ({id, name, type, base_experience}) => {
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <>
            <div className="Pokecard">
                <h4 className="Pokecard-name">{name}</h4>
                <img className="Pokecard-image" src={image} alt={name}/>
                <p className="Pokecard-type">Type: {type}</p>
                <p className="Pokecard-experience">Exp: {base_experience}</p>
            </div>
        </>
    )
}

export default Pokecard;