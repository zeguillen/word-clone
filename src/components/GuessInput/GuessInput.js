import React, { useState } from 'react'

function GuessInput({ handleNewGuess, outcome }) {
  const [guess, setGuess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setGuess(guess)
    handleNewGuess(guess)
    console.info({ guess })
    setGuess('')
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        handleSubmit(e)
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={outcome !== 'running'}
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase()
          setGuess(nextGuess)
        }}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  )
}

export default GuessInput
