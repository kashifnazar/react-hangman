import React from 'react'
import WordBox from './WordBox'

type Props = {
    letters: string[]
}

function Mistakes({letters}: Props) {
  return (
    <div className='mistakes'>
    {
        Array.from({length: 10}, () => '').map((mistake, i) => <WordBox letter={letters[i]} key={'mistake-' + i} type='mistake' />)
    }

    </div>
  )
}

export default Mistakes