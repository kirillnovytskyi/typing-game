export const InsertText = ({ areaText, setAreaText }) => {
  return (
    <section className="insert-text">
      <textarea 
        className="user-text" 
        placeholder="Paste here your text..." 
        value={areaText}
        onChange={e => setAreaText(e.target.value)}
        ></textarea>
    </section>
  );
};