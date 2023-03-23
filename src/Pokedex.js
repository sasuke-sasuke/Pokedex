import Pokecard from "./Pokecard";
import './Pokedex.css';

const Pokedex = (props) => {
    const { pokemon, totalExp, isWinner } = props;
    return (
        <>
            <div className="Pokedex">
                {pokemon.map((poke) => (
                    <Pokecard key={poke.id} id={poke.id} name={poke.name} type={poke.type} base_experience={poke.base_experience} />
                ))}
                <p className="Pokedex-total-exp">Total Exp: {totalExp}</p>
            </div>
            {isWinner? <p className="Pokedex-winner">THIS HAND WINS!</p> : null}
        </>
    )
}

export default Pokedex;