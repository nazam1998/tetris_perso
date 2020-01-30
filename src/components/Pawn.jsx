import React from 'react';

const Pawn = (props) => {
    return (
        <div>

            {props.dot.map((e, i) => {
                const style = {
                    left: `${e[0]}%`,
                    top: `${e[1]}%`
                }
                return <div className='pawn' key={i} style={style}></div>
            })
            }
        </div>
    )
}

export default Pawn;