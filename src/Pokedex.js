import Pokecard from "./Pokecard";
import './Pokedex.css';

const Pokedex = ({pokemon}) => {
    return (
        <>
            <h1 className="Pokedex-header">Pokedex</h1>
            <div className="Pokedex">
                {pokemon.map((poke) => (
                    <Pokecard key={poke.id} id={poke.id} name={poke.name} type={poke.type} base_experience={poke.base_experience} />
                ))}
            </div>
        </>
    )
}

export default Pokedex;