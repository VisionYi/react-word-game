import React from 'react';
import { NUM_OF_GUESS_COLUMNS } from '../../constants';

function GuessInput({ handleSubmitGuess}) {
  const [value, setValue] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault()
    /** replace with input `required` & `pattern` attribute */
    // if (value.length !== 5) {
    //   alert('Word must be 5 characters')
    //   return
    // }

    handleSubmitGuess(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={NUM_OF_GUESS_COLUMNS}
        maxLength={NUM_OF_GUESS_COLUMNS}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={value}
        onInput={(event) => {
          setValue(event.target.value.toUpperCase())
        }}
      />
    </form>
  )
}

export default GuessInput;
