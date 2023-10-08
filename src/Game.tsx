import React from 'react'
import Board from './Board'
import Mistakes from './Mistakes'
import Hint from './Hint'

type Props = {
    word: string
    hint: string
}

function Game({ word, hint }: Props) {

    return (
        <div className='game'>
            <Hint hint={hint} />
            <Board word={word} />
            <Mistakes letters={['B', 'X', 'Z']} />
        </div>
    )
}

export default Game