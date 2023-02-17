import React from 'react'

function Banner({ outcome, numOfGuesses, answer }) {
  const classname = outcome === 'won' ? 'happy banner' : 'sad banner'

  return (
    <div className={classname}>
      {outcome === 'won' && (
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{numOfGuesses === 1 ? ' 1 guess' : `${numOfGuesses} guesses`}</strong>.
        </p>
      )}
      {outcome === 'lost' && (
        <p>
          Sorry the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  )
}

export default Banner
