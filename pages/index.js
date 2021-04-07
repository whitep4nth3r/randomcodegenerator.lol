import { useState, useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/a11y-dark.css";

import { generateRandomCode } from "../tools/RandomCodeGenerator";
import { getRandomLang, getRandomInt, getContributors } from "../tools/utils/helpers";
import { Languages } from "../tools/constants";

import PageMeta from "../components/PageMeta";
import Footer from "../components/Footer";

export default function Home({ randomNumberOfLines, randomLang }) {
  const [selectedLang, setSelectedLang] = useState(randomLang);
  const [numberOfLines, setNumberOfLines] = useState(randomNumberOfLines);
  const [result, setResult] = useState("");
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    generateNewCode(selectedLang, numberOfLines);
    updateContributors(selectedLang);
  }, []);

  function updateContributors(newLang) {
    const contributors = getContributors(newLang);
    setContributors(contributors);
  }

  function handleButtonClick(newLang) {
    setSelectedLang(newLang);
    generateNewCode(newLang, numberOfLines);
    updateContributors(newLang);
  }

  function chooseAmount(randomInt) {
    setNumberOfLines(randomInt);
    generateNewCode(selectedLang, randomInt);
  }

  function luckyDip() {
    const newLang = getRandomLang();
    const randomInt = getRandomInt(3, 20);
    setNumberOfLines(randomInt);
    setSelectedLang(newLang);
    generateNewCode(newLang, randomInt);
    updateContributors(newLang);
  }

  function generateNewCode(newLang, newLines) {
    const newCode = generateRandomCode(newLang, newLines);
    setResult(newCode);
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
          <p className="selector__item__label">I want</p>

          <div className="selector__buttonGroup selector__buttonGroup--lines">
            <button
              type="button"
              className={`selector__button selector__button--lines`}
              onClick={() => chooseAmount(getRandomInt(3, 8))}
            >
              A little
            </button>
            <button
              type="button"
              className={`selector__button selector__button--lines`}
              onClick={() => chooseAmount(getRandomInt(9, 13))}
            >
              Some
            </button>
            <button
              type="button"
              className={`selector__button selector__button--lines`}
              onClick={() => chooseAmount(getRandomInt(14, 20))}
            >
              A lot
            </button>
          </div>
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
                <code dangerouslySetInnerHTML={{ __html: hljs.highlightAuto(result).value }}></code>
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
        <a
          className="submitPr__button"
          href="https://github.com/whitep4nth3r/randomcodegenerator.lol"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit a PR
        </a>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const randomNumberOfLines = getRandomInt(3, 9);
  const randomLang = getRandomLang();
  return {
    props: {
      randomLang,
      randomNumberOfLines,
    },
  };
}
