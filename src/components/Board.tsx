import React from 'react'
import WordBox from '../WordBox'
import useGameContext from '../context/useGameContext'

function Board() {

    const { word, lettersPlayed } = useGameContext()

    const wordArray = word.split('')

    return (
        <div className='board'>
            {
                wordArray.map((letter, i) => <WordBox key={'letter-' + i} letter={lettersPlayed?.find(l => l.toLowerCase() === letter.toLowerCase()) ? letter : ''} isSpace={letter.trim() === ''} played />)
            }
        </div>
    )
}

export default Board