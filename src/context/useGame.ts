import { useEffect, useState } from 'react'

type UseGameProps = {
    word: string
}

function useGame({ word }: UseGameProps) {
  
    const [lettersPlayed, setLettersPlayed] = useState(['k', 'x', 'n'])
    const [mistakes, setMistakes] = useState<string[]>([])

    useEffect(() => {

        const mistakes = lettersPlayed.filter(l => !word.includes(l.toLowerCase()))
        setMistakes(mistakes)
      
    }, [...lettersPlayed])


    return {lettersPlayed, mistakes}
}

export default useGame