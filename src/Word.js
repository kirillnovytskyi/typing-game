export const Word = ({ word, wordId, currentWordId }) => {  
  return (
    <span style={{
      backgroundColor: wordId === currentWordId ? '#ccc' : ''
    }}>{word + " "}</span>
  );
};