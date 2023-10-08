import React from 'react'
import WordBox from '../WordBox'
import useGameContext from '../context/useGameContext'

function Mistakes() {

  const { mistakes } = useGameContext()

  return (
    <div className='mistakes'>
    {
        Array.from({length: 10}, () => '').map((mistake, i) => <WordBox letter={mistakes?.[i] ?? ''} key={'mistake-' + i} type='mistake' />)
    }

    </div>
  )
}

export default Mistakes