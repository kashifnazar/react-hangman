import React, { useState } from 'react'
import Board from './Board'
import Mistakes from './Mistakes'
import Hint from './Hint'
import { GameContextProvider } from '../context/GameContext'

type Props = {
    word: string
    hint: string
}

function Game({ word, hint }: Props) {
    
    return (
        <div className='game'>
            <GameContextProvider>
                <Hint />
                <Board  />
                <Mistakes />
            </GameContextProvider>
        </div>
    )
}

export default Game