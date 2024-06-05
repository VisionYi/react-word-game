import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESS_COLUMNS } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Guess({ value = '', answer = '' }) {
  const result = checkGuess(value, answer)

  return (
    <p className="guess">
      {
        range(NUM_OF_GUESS_COLUMNS).map((i) =>
          result
          ? <span className={`cell ${result[i].status}`} key={i}>{result[i].letter}</span>
          : <span className="cell" key={i}></span>
        )
      }
    </p>
  );
}

export default Guess;
