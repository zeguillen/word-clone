import React, { useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../GuessInput/GuessInput'
import GuessList from '../GuessList/GuessList'
import Banner from '../Banner/Banner'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = useState([])
  const [outcome, setOutcome] = useState('running')

  const handleNewGuess = (newGuess) => {
    const nextGuesses = [...guesses, newGuess]
    setGuesses(nextGuesses)

    if (newGuess === answer) {
      setOutcome('won')
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setOutcome('lost')
    }
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput handleNewGuess={handleNewGuess} outcome={outcome} />
      {outcome !== 'running' && (
        <Banner answer={answer} numOfGuesses={guesses.length} outcome={outcome} />
      )}
    </>
  )
}

export default Game
