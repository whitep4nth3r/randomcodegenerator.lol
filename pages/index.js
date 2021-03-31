import Head from "next/head";
import { useState } from "react";
import { generateRandomCode, Languages } from "@tools/RandomCodeGenerator";

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

  return (
    <>
      <Head>
        <title>randomcodegenerator.lol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className="title">[object Object]</h1>
        <p className="blurb">
          Ever needed a random bit of code for your project? We've got you covered.
        </p>
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
        </div>

        {result.length > 0 && (
          <div className="result">
            <pre className="result__pre">
              <code>{result}</code>
            </pre>
          </div>
        )}
      </main>
    </>
  );
}
