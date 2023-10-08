import React from 'react'
import WordBox from './WordBox'

type Props = {
    word: string
}

function Board({ word }: Props) {

    const wordArray = word.split('')

    return (
        <div className='board'>
            {
                wordArray.map((letter, i) => <WordBox key={'letter-' + i} letter={letter} isSpace={letter.trim() === ''} played />)
            }
        </div>
    )
}

export default Board