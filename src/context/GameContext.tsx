import { PropsWithChildren, createContext, useEffect, useState } from "react";
import useGame from "./useGame";

type GameContextType = {
    hint: string
    word: string
    lettersPlayed?: string[]
    mistakes? : string[]
}

const GameContext = createContext<GameContextType>({
    hint: '',
    word: ''
})

export function GameContextProvider({ children }: PropsWithChildren) {

    const word = 'hussain ali'
    
    const { lettersPlayed, mistakes } = useGame({ word })

    return <GameContext.Provider value={{
        hint: 'My name',
        word,
        lettersPlayed,
        mistakes
    }}>
        {children}
    </GameContext.Provider>

}

export default GameContext