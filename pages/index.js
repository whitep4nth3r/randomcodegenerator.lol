import PageMeta from "../components/PageMeta";
import { useState } from "react";
import { generateRandomCode, Languages } from "../tools/RandomCodeGenerator";

export default function Home() {
  const [selectedLang, setSelectedLang] = useState(Object.keys(Languages)[0]);
  const [numberOfLines, setNumberOfLines] = useState(3);
  const [addComment, setAddComment] = useState(false);
  const [result, setResult] = useState("");

  function handleButtonClick(value) {
    setSelectedLang(value);
    const newCode = generateRandomCode(value, numberOfLines, addComment);
    setResult(newCode);
  }

  function handeInputOnChange(value) {
    setNumberOfLines(value);
  }

  function handleAddComment() {
    setAddComment(!addComment);
  }

  return (
    <>
      <PageMeta />

      <main className="container">
        <h1 className="title">[object Object]</h1>
        <p className="blurb">Need some code for your project? We've got you covered.</p>
        <p className="blurb">Choose your language. Choose how many lines.</p>
        <p className="blurb">BÄM! You got code.</p>
        <div className="selector">
          <label className="selector__item__label">I want</label>
          <input
            value={numberOfLines}
            onChange={(e) => handeInputOnChange(e.target.value)}
            type="number"
            className="input"
          />

          <label className="selector__item__label">lines of</label>

          <div className="selector__buttonGroup">
            {Object.entries(Languages).map(([key, value]) => (
              <button
                className="selector__button"
                type="button"
                key={key}
                onClick={() => handleButtonClick(key)}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="selector__checkbox">
            <input
              type="checkbox"
              name="addComments"
              id="addComments"
              className="input"
              checked={addComment}
              onChange={() => handleAddComment()}
            />
            <label className="selector__item__label" for="addComments">Include comments</label>
          </div>
        </div>

        {result.length > 0 && (
          <div className="result">
            <pre className="result__pre">
              <code>{result}</code>
            </pre>
          </div>
        )}
      </main>
      <footer style={{ textAlign: "center" }}>ADD FOOTER</footer>
    </>
  );
}
