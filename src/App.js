import React, { useState } from "react";
import Shortlink from "./Shortlink";
// const { shorten } = require("./bitly");
const { shorten } = require("./bitly");
function App() {
  const [link, setLink] = useState(" ");
  const [shortLink, setShortLink] = useState(" ");
  const [error, errorCallback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    shorten({ link }, setShortLink, errorCallback);
    setIsSubmitting(true);
    setLink("");
  };
  return (
    <div className="container">
      <h1>DevProjects Link Shortener</h1>
      <form>
        <div className="form">
          <div className="forminput">
            <label id="link" style={{ float: "left" }}>
              Link for Shorten
            </label>
            <input
              className="inputtext"
              type="text"
              id="link"
              value={link}
              onChange={(e) => {
                e.preventDefault();
                const { value } = e.target;

                setLink(value);
              }}
            ></input>
          </div>
          <div className="btn">
            <button type="submit" onClick={handleSubmit}>
              Shorten
            </button>
          </div>
        </div>
      </form>
      {(() => {
        if (isSubmitting === true) {
          return (
            <Shortlink shortLink={shortLink} />)
        }
        else{
          return (
            error && (

<div className="card bg border border-danger bg-light text-danger p-3 m-3">

  {error}{" "}

  <button

    className="btn btn-sm my-4 btn-danger"

    onClick={(e) => {

      e.preventDefault();

      errorCallback("");

    }}

  >

    CLOSE

  </button>

</div>

)
          )
        }
      })()}
    </div>
  );
}

export default App;
