import { useEffect, useRef, useState } from 'react';
import { Word } from './Word';

export const PlayField = ({ text, setText }) => {
  const [currentWordId, setCurrentWordId] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [startCount, setStartCount] = useState(3);
  const [time, setTime] = useState(0);
  const inputRef = useRef(null);

  let gameInterval = null;

  const gameOver = () => {
    console.log('game is over');
    setInputValue('');
    setCurrentWordId(-1);
    clearInterval(gameInterval);
    let speed = Math.floor(text.split('').reduce(acc => acc + 1, 0) / (time / 60));
    alert('Your typing speed: ' + speed + ' characters per minute.');
    setText('');
  };
  
  const countStart = e => {
    e.target.disabled = true;
    let count = 3;
    let startInterval = setInterval(() => {
      count--;
      setStartCount(count);
      if (count === 0) {
        clearInterval(startInterval);
        setStartCount('Start');
        inputRef.current.disabled = false;
        inputRef.current.focus();
        gameInterval = setInterval(() => setTime(curr => curr + 1), 1000);
      }
    }, 1000);
  };

  useEffect(() => {
    const words = text.split(' ').map(el => el + " ");
    if (words[currentWordId] === inputValue) {
      if (currentWordId !== words.length - 1) {
        setCurrentWordId(curr => curr + 1);
        setInputValue('');
      } else {
        gameOver(); 
      }
    }
  }, [inputValue]);

  return (
    <section className="play-field">
      <p className="start-count">{startCount}</p>
      <section className="text">{text.split(' ').map((word, idx) => (
        <Word word={word} wordId={idx} currentWordId={currentWordId} key={idx}/>
      ))}</section>
      <section className="input">
        <input 
          type="text" 
          className="text-input" 
          value={inputValue} 
          onChange={e => setInputValue(e.target.value)}
          ref={inputRef}
          disabled
        />
      </section>
      <button 
        type="button" 
        className="start-button" 
        onClick={countStart}
      >
        CLICK WHEN YOU ARE READY
      </button>
    </section>
  );
};
