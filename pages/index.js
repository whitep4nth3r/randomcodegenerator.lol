import PageMeta from "../components/PageMeta";
import { useState, useEffect } from "react";
import { generateRandomCode, Languages } from "../tools/RandomCodeGenerator";
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css';
import { getRandomLang, getRandomInt, getContributors } from "../tools/utils/helpers";

export default function Home() {
  const [selectedLang, setSelectedLang] = useState("js");
  const [numberOfLines, setNumberOfLines] = useState("3");
  const [result, setResult] = useState("");
  const [contributors, setContributors] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const randomLang = getRandomLang();
    const randomInt = getRandomInt(3, 8);

    setSelectedLang(randomLang);
    setNumberOfLines(randomInt);

    const newCode = generateRandomCode(randomLang, randomInt);
    setResult(newCode);

    updateContributors(randomLang);
  }, []);

  function updateContributors(newLang) {
    const contributors = getContributors(newLang);
    setContributors(contributors);
  }

  function handleButtonClick(newLang) {
    setSelectedLang(newLang);
    const newCode = generateRandomCode(newLang, numberOfLines);
    setResult(newCode);
    updateContributors(newLang);
  }

  function handleInputOnChange(value) {
    setNumberOfLines(value);
  }

  function handleInputOnKeyDown(event) {
    if (event.keyCode === 13) {
      const newCode = generateRandomCode(selectedLang, numberOfLines);
      setResult(newCode);
    }
  }

  function luckyDip() {
    const newLang = getRandomLang();
    const randomInt = getRandomInt(3, 20);
    setNumberOfLines(randomInt);
    setSelectedLang(newLang);

    const newCode = generateRandomCode(newLang, randomInt);
    setResult(newCode);
    updateContributors(newLang);
  }

  function copyCode() {
    navigator.clipboard.writeText(result);
  }

  return (
    <>
      <PageMeta />

      <main className="container">
        <h1 className="title">[object Object]</h1>
        <p className="blurb">Need some code for your project? We've got you covered.</p>
        <p className="blurb">Choose your language. Choose how many lines.</p>
        <p className="blurb">BÄM! You got code.</p>

        <button
          type="button"
          className="selector__button selector__button--luckyDip"
          onClick={luckyDip}
        >
          I'm feeling lucky
        </button>

        <div className="selector">
          <label className="selector__item__label">I want</label>
          <input
            value={numberOfLines}
            onKeyDown={(e) => handleInputOnKeyDown(e)}
            onChange={(e) => handleInputOnChange(e.target.value)}
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
          <>
            <div className="result">
              <pre className="result__pre">
                <button type="button" className="copyButton" onClick={copyCode}>
                  Copy
                </button>
                <code dangerouslySetInnerHTML={{ __html: hljs.highlightAuto(result).value}}></code>
              </pre>
            </div>
            {contributors.length > 0 && (
              <div className="contributors">
                <h2 className="contributors__title">Randomly lolled by</h2>
                <ul className="contributors__list">
                  {contributors.map((contributor) => (
                    <li className="contributors__listItem" key={contributor}>
                      <a
                        className="contributors__link"
                        href={`https://github.com/${contributor}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {contributor}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </main>
      <footer className="footer">
        <p className="footer__disclaimer">
          Made hilariously by{" "}
          <a
            className="footer__link"
            href="https://whitep4nth3r.com/?utm_source=random-lol"
            target="_blank"
          >
            whitep4nth3r
          </a>{" "}
          and friends{" "}
          <a
            className="footer__link"
            href="https://twitch.tv/whitep4nth3r"
            rel="noopenner no referrer"
            target="_blank"
          >
            live on Twitch
          </a>
        </p>
        <p className="footer__copyright">&copy; {year} whitep4nth3r</p>
      </footer>
    </>
  );
}
