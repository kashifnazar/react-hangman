import { useContext } from 'react'
import GameContext from './GameContext'


function useGameContext() {
    return useContext(GameContext)
}

export default useGameContext