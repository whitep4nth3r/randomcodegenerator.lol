import Head from "next/head";
import { useState } from "react";
import { generateRandomCode } from "@tools/RandomCodeGenerator";
import { Languages } from "@tools/Constants";

export default function Home() {
  const [selectedLang, setSelectedLang] = useState(Object.keys(Languages)[0]);
  const [numberOfLines, setNumberOfLines] = useState(3);
  const [result, setResult] = useState("");

  function generateCode() {
    const newCode = generateRandomCode(selectedLang, numberOfLines);
    setResult(newCode);
  }

  function handleSelectOnChange(value) {
    setSelectedLang(value);
  }

  function handeInputOnChange(value) {
    setNumberOfLines(value);
  }

  return (
    <div>
      <Head>
        <title>randomcodegenerator.lol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1>randomcodegenerator.lol</h1>
        <p>
          Ever needed a random bit of code for your project? randomcodegenerator.lol has got you
          covered. Choose your language and how many lines of code you want and BÄM! RANDOM CODE 4
          U!
        </p>
        <div className="selector">
          <div className="selector__item">
            <label className="selector__item__label">Language</label>
            <select value={selectedLang} onChange={(e) => handleSelectOnChange(e.target.value)}>
              {Object.entries(Languages).map(([key, value]) => (
                <option value={key} key={key}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="selector__item">
            <label className="selector__item__label">Number of lines</label>
            <input
              value={numberOfLines}
              onChange={(e) => handeInputOnChange(e.target.value)}
              type="number"
            />
          </div>
        </div>

        <div className="generate">
          <button className="generate__button" type="button" onClick={generateCode}>
            Generate
          </button>
        </div>

        <div className="result">
          <pre>
            <code>{result}</code>
          </pre>
        </div>
      </main>
    </div>
  );
}
