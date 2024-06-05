import React from 'react';
import GuessInput from '../GuessInput/index';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResult from '../GuessResult/GuessResult';
import ResetButton from '../ResetButton';

function Game() {
  const GAME_STATUS = {
    win: 'You win!',
    lose: 'You lose!',
    playing: 'Guess the word',
  }
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatue, setGameStatue] = React.useState(GAME_STATUS.playing);
  const [answer, setAnswer] = React.useState(sample(WORDS));

  React.useEffect(() => {
    // To make debugging easier, we'll log the solution in the console.
    console.info({ answer });
  }, [answer])

  const handleSubmitGuess = (guess) => {
    const isCorrect = guess === answer;

    setGuesses([...guesses, {
      id: Math.random(),
      value: guess,
    }]);

    if (isCorrect) {
      setGameStatue(GAME_STATUS.win);
    } else if (guesses.length === 5) {
      setGameStatue(GAME_STATUS.lose);
    }

    console.info({ guesses });
  }

  const handleReset = () => {
    setGuesses([]);
    setGameStatue(GAME_STATUS.playing);
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <GuessResult guesses={guesses} answer={answer}></GuessResult>
      {
        gameStatue === GAME_STATUS.playing && <GuessInput handleSubmitGuess={handleSubmitGuess}></GuessInput>
      }
      {
        gameStatue === GAME_STATUS.win &&
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guesses.length} {guesses.length === 1 ? 'guess' : 'guesses'}</strong>.
          </p>
          <ResetButton onClick={handleReset}>reset</ResetButton>
        </div>
      }
      {
        gameStatue === GAME_STATUS.lose &&
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          <ResetButton onClick={handleReset}>reset</ResetButton>
        </div>
      }
    </>
  )
}

export default Game;
