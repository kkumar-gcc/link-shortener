import React from "react";
import { useState } from "react";

import ClipboardJS from "clipboard";

const Shortlink = ({ shortLink }) => {
  const [copied, setCopied] = useState(false);
  if (!shortLink) {
    return null;
  }
  const handleClick = () => {
    const clipboard = new ClipboardJS(".copy-btn");

    clipboard.on("success", () => {
      setCopied(true);
    });

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <div>
      <h3>Shortened Link :</h3>
      <div className="short-link">
        <div className="form">
          <div className="forminput" style={{ textAlign: "left" }}>
            <a
              id="short-link"
              target="_blank"
              href={shortLink}
              rel="noopener noreferrer"
            >
              {shortLink}
            </a>
          </div>
          <div>
            <button
              className='copy-btn className="btn"'
              onClick={handleClick}
              data-clipboard-action="copy"
              data-clipboard-target="#short-link"
            >
              Copy
              {copied && <div className="copied-msg">Copied!</div>}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shortlink;
