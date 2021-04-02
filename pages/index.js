import PageMeta from "../components/PageMeta";
import { useState } from "react";
import {
  generateRandomCode,
  Languages,
  getRandomLang,
  getRandomInt,
} from "../tools/RandomCodeGenerator";

export default function Home() {
  const [selectedLang, setSelectedLang] = useState(Object.keys(Languages)[0]);
  const [numberOfLines, setNumberOfLines] = useState(3);
  const [result, setResult] = useState("");

  function handleButtonClick(value) {
    setSelectedLang(value);
    const newCode = generateRandomCode(value, numberOfLines);
    setResult(newCode);
  }

  function handeInputOnChange(value) {
    setNumberOfLines(value);
  }

  function luckyDip() {
    const lang = getRandomLang();
    const randomInt = getRandomInt(3, 20);
    setNumberOfLines(randomInt);
    setSelectedLang(lang);

    const newCode = generateRandomCode(lang, randomInt);
    setResult(newCode);
  }

  return (
    <>
      <PageMeta />

      <main className="container">
        <h1 className="title">[object Object]</h1>
        <p className="blurb">Need some code for your project? We've got you covered.</p>
        <p className="blurb">Choose your language. Choose how many lines.</p>
        <p className="blurb">BÄM! You got code.</p>

        <button type="button" class="selector__button selector__button--luckyDip" onClick={luckyDip}>
          I'm feeling lucky
        </button>

        <div className="selector">
          <label className="selector__item__label">I want</label>
          <input
            value={numberOfLines}
            onChange={(e) => handeInputOnChange(e.target.value)}
            type="number"
            className="input"
            min="3"
          />

          <label className="selector__item__label">lines of</label>

          <div className="selector__buttonGroup">
            {Object.entries(Languages).map(([key, value]) => {
              const selectedClass = selectedLang === key ? " selector__button--selected" : "";
              return (
                <button
                  className={`selector__button${selectedClass}`}
                  type="button"
                  key={key}
                  onClick={() => handleButtonClick(key)}
                >
                  {value}
                </button>
              );
            })}
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
