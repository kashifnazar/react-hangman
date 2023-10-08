import React from 'react'
import useGameContext from '../context/useGameContext'

function Hint() {

  const { hint } = useGameContext()

  return (
    <div className='hint'>Hint: {hint}</div>
  )
}

export default Hint