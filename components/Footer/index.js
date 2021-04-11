import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
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
      <p className="footer__disclaimer">
        This website uses the{" "}
        <a
          className="footer__link"
          href="https://www.npmjs.com/package/@whitep4nth3r/random-code"
          target="_blank"
        >
          @whitep4nth3r/random-code npm package
        </a>{" "}
        to generate random code.
      </p>
      <p className="footer__copyright">&copy; {year} whitep4nth3r</p>
    </footer>
  );
}
