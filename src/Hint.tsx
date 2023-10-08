import React from 'react'

type Props = {
    hint: string
}

function Hint({ hint }: Props) {
  return (
    <div className='hint'>Hint: {hint}</div>
  )
}

export default Hint