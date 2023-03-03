"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return (
      <div className="container">
        <div id="quote-box">
          <div id="text"></div>
          <div id="author"></div>
          <button id="new-quote">new</button>
          <a id="tweet-quote" href="#"></a>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector("#react-container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
