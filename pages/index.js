import { useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/a11y-dark.css";
import dynamic from "next/dynamic";

import { generateRandomCode, getLanguages } from "@whitep4nth3r/random-code";

import PageMeta from "../components/PageMeta";
import Footer from "../components/Footer";

const DynamicVideoEmbed = dynamic(() => import("../components/VideoEmbed"));

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function Home({ languages, languageKey, code, lines, contributors }) {
  const [selectedLangResult, setSelectedLangResult] = useState(languageKey);
  const [codeResult, setCodeResult] = useState(code);
  const [contributorsResult, setContributorsResult] = useState(contributors);
  const [linesResult, setLinesResult] = useState(lines);

  function generateAndUpdate(newLang = "", randomInt = "") {
    const newCode = generateRandomCode(newLang, randomInt);
    setSelectedLangResult(newCode.languageKey);
    setCodeResult(newCode.code);
    setLinesResult(newCode.lines);
    setContributorsResult(newCode.contributors);
  }

  function handleButtonClick(newLang) {
    generateAndUpdate(newLang);
  }

  function luckyDip() {
    generateAndUpdate();
  }

  function chooseAmount(randomInt) {
    console.log(randomInt);
    generateAndUpdate(selectedLangResult, randomInt);
  }

  function copyCode() {
    navigator.clipboard.writeText(result);
  }

  return (
    <>
      <PageMeta />

      <header className="header">
        <h1 className="title">[object Object]</h1>
      </header>

      <main className="container">
        <h2 className="blurb">Need some code for your project? We've got you covered.</h2>
        <p className="blurb">Choose how much code. Choose your language.</p>
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
            {Object.entries(languages).map(([key, value]) => {
              const selectedClass = selectedLangResult === key ? " selector__button--selected" : "";
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

        {codeResult.length > 0 && (
          <>
            <p className="youGot">
              You got {linesResult} lines of {languages[selectedLangResult]}!
            </p>
            <div className="result">
              <pre className="result__pre hljs">
                <button type="button" className="copyButton" onClick={copyCode}>
                  Copy
                </button>
                <code
                  dangerouslySetInnerHTML={{ __html: hljs.highlightAuto(codeResult).value }}
                ></code>
              </pre>
            </div>
            {contributorsResult.length > 0 && (
              <div className="contributors">
                <h2 className="contributors__title">Randomly lolled by</h2>
                <ul className="contributors__list">
                  {contributorsResult.map((contributor) => (
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

        <DynamicVideoEmbed />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const languages = getLanguages();
  const randomCode = generateRandomCode();

  return {
    props: {
      languages,
      languageKey: randomCode.languageKey,
      code: randomCode.code,
      lines: randomCode.lines,
      contributors: randomCode.contributors,
    },
  };
}
