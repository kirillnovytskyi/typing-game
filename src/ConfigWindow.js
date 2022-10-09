import { useState } from 'react';
import { InsertText } from './InsertText';

export const ConfigWindow = ({ setText }) => {
  const [areaText, setAreaText] = useState('');

  const buttonClickHandle = () => {
    if (areaText.trim().length >= 100 && areaText.trim().length < 1000) {
      setText(areaText.trim());
    }

    if (areaText.trim().length > 1000) alert('Text must be less then 1000 characters');
    if (areaText.trim().length < 100) alert('Text length must be at least 100 characters');
  };

  return (
    <section className="config-window">
      <h2>Typing Game by kirillnovytskyi</h2>
      <InsertText areaText={areaText} setAreaText={setAreaText} />
      <button type="button" className="start-button" onClick={buttonClickHandle}>START</button>
    </section>
  );
};