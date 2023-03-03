import "./global.less";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export const App = () => {
  const getRandomColor = () =>
    "#" + Math.round(Math.random() * parseInt("ffffff", 16)).toString(16);

  const getQuote = () => {
    fetch("https://v1.hitokoto.cn/")
      .then((res) => res.json())
      .then((out) => {
        const currentText = out.hitokoto;
        const currentAuthor = `${out.from_who || ""} 「${out.from}」`;

        setThemeColor(getRandomColor);
        setText(currentText);
        setAuthor(currentAuthor);
        setTwitterLink(
          "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
            encodeURIComponent(`"${currentText}"  ${currentAuthor}`)
        );
      })
      .catch((err) => console.error(err));
  };

  const [themeColor, setThemeColor] = useState(getRandomColor);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [twitterLink, setTwitterLink] = useState("");

  useEffect(() => getQuote(), []);

  return (
    <div
      className="wrapper d-flex justify-content-center align-items-center flex-column h-100vh"
      style={{ backgroundColor: themeColor }}
    >
      <Card
        id="quote-box"
        className="w-75 p-5 mb-4"
        style={{ color: themeColor }}
      >
        <Card.Body>
          <Card.Title id="text" className="fs-2">
            <FontAwesomeIcon icon={faQuoteLeft} className="me-1" />
            {text}
          </Card.Title>
          <Card.Text id="author" className="text-end fs-5">
            - {author}
          </Card.Text>
          <div className="d-flex justify-content-between fs-6 text-white">
            <a
              id="tweet-quote"
              href={twitterLink}
              className="btn btn-primary"
              style={{ backgroundColor: themeColor, borderColor: themeColor }}
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <Button
              id="new-quote"
              className="btn btn-primary"
              style={{ backgroundColor: themeColor, borderColor: themeColor }}
              onClick={getQuote}
            >
              New Quote
            </Button>
          </div>
        </Card.Body>
      </Card>
      <footer className="text-white">
        by{" "}
        <a className="text-white" href="https://wangrunlin.com">
          Leo Wang
        </a>
      </footer>
    </div>
  );
};
