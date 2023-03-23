import Pokedex from './Pokedex';
import {choice} from './helpers';
import './Pokegame.css'
import data from './data';

const Pokegame = () => {
    let [chosen1, chosen2] = choice(data);
    const p1Exp = chosen1.reduce((acc, i) => {
        return acc += i.base_experience;
    }, 0)
    const p2Exp = chosen2.reduce((acc, i) => {
        return acc += i.base_experience;
    }, 0)
    
    return (
        <>
            <div className='Pokegame'>
                <h2 className='Pokegame-player'>Player 1</h2>
                <h3 className='Pokegame-player1'>
                    <Pokedex pokemon={chosen1} totalExp={p1Exp} isWinner={p1Exp > p2Exp ? true : false}/>
                </h3>
                <h2 className='Pokegame-player'>Player 2</h2>
                <h3 className='Pokegame-player2'>
                    <Pokedex pokemon={chosen2} totalExp={p2Exp} isWinner={p2Exp > p1Exp ? true: false} />
                </h3>  
            </div>
        </>
    )
}

export default Pokegame;