import React, { useState, useEffect } from 'react';
import Pawn from './components/Pawn';

const App = () => {
    const [pawn, setPawn] = useState([[0, 0], [0, 2], [0, 4]]);
    const move = () => {
        let dot = [...pawn];
        let head = dot[dot.length - 1];
        head = [head[0], head[1] + 2];
        dot.push(head)
        dot.shift();
        setPawn(dot);
    }

    useEffect(() => {

        let id = setTimeout(move, 1000)
        pawn[pawn.length - 1][1] == 98 && clearTimeout(id)
    }, [pawn])
    return (

        <div className='area'>
            <Pawn dot={pawn} />
        </div>

    )

};

export default App;