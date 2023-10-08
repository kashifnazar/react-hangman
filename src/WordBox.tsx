import clsx from 'clsx'

type Props = {
  isSpace?: boolean
  letter: string
  played?: boolean
  type? : 'guess' | 'mistake'
}

function WordBox({ isSpace = false, letter, played = false, type = 'guess' }: Props) {

  const className = clsx('word-box', { space: isSpace }, { played }, {'mistake': type === 'mistake'})

  return (
    <div className={className}>
      {type === 'mistake' || played ? letter : ''}
    </div>
  )
}

export default WordBox