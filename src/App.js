import './App.css';
import { useEffect, useState } from 'react';
import { ConfigWindow } from './ConfigWindow';
import { PlayField } from './PlayField';

const App = () => {
  const [text, setText] = useState('');
  const [isGameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (text.trim().length > 0) {
      setGameStarted(true);
    } else {
      setGameStarted(false);
    }
  }, [text]);

  return (
    <div className="app">
      {
        isGameStarted 
          ? (<PlayField text={text} setText={setText}/>) 
          : (<ConfigWindow setText={setText}/>)
      }
    </div>
  );
}

export default App;
