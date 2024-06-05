import React from 'react';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { range } from '../../utils';

function GuessResult({ guesses, answer = '' }) {
  return (
    <div className="guess-results">
      {
        range(NUM_OF_GUESSES_ALLOWED).map((col) =>
          (
            guesses[col]
            ? <Guess key={guesses[col].id} value={guesses[col].value} answer={answer}></Guess>
            : <Guess key={col}></Guess>
          )
        )
      }
    </div>
  )
}

export default GuessResult;
