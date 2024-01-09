import "./index.css";
import { useState } from "react";
import anime from "animejs";

let colorStorage = {
  colors: [
    "#023963",
    "#035ea3",
    "#0474cc",
    "#0583e3",
    "#116aa6",
    "#0a4166",
    "#1584cf",
    "#5eb2f2",
    "#529ad1",
    "#34678f",
    "#4488bd",
  ],
};

let quoteStorage = {
  quotes: [
    {
      quote: "True determination will get you further in life than seeking for perfection ever will.",
      author: "Jordy Veenstra",
    },
    {
      quote: "You only live once. But if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Everything you can imagine is real.",
      author: "Pablo Picasso",
    },
    {
      quote: "A day without sunshine is like, you know, night.",
      author: "Steve Martin",
    },
    {
      quote: "It's no use going back to yesterday, because I was a different person back then.",
      author: "Lewis Carroll",
    },
    {
      quote: "Never memorize anything that you can look up.",
      author: "Albert Einstein",
    },
    {
      quote: "I like work: it fascinates me. I can sit and look at it for hours.",
      author: "Jerome K. Jerome",
    },
    {
      quote: "If at first you don't succeed, try again. Then quit. No use being a damn fool about it.",
      author: "W.C. Fields",
    },
    {
      quote: "Happiness is a warm puppy.",
      author: "Charles M. Schulz",
    },
    {
      quote: "Time is an illusion. Lunchtime doubly so.",
      author: "Douglas Adams",
    },
  ],
};

function QuoteMachine() {
  const [selectedQuote, setSelectedQuote] = useState(quoteStorage.quotes[0]);
  const [color, setColor] = useState(colorStorage.colors[0]);

  const handleColor = () => {
    const randomColor = Math.floor(Math.random() * colorStorage.colors.length);
    setColor(colorStorage.colors[randomColor]);
  };

  const handleNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quoteStorage.quotes.length);
    setSelectedQuote(quoteStorage.quotes[randomIndex]);
  };

  let fadeFunc = () => {
    let fade = anime.timeline({
      easing: "easeOutExpo",
      duration: 300,
    });

    fade
      .add({
        targets: "#text",
        opacity: [1, 0],
      })
      .add({
        targets: "#author",
        opacity: [1, 0],
      });

    anime.remove("#text #author");

    setTimeout(() => {
      handleNewQuote();
      handleColor();
    }, "1500");

    fade.finished.then(function () {
      let fadeBack = anime.timeline({
        easing: "easeOutExpo",
        duration: 300,
      });

      fadeBack
        .add(
          {
            targets: "#text",
            opacity: [0, 1],
          },
          1500
        )
        .add({
          targets: "#author",
          opacity: [0, 1],
        });
    });
  };

  return (
    <div className="compBody" style={{ backgroundColor: color }}>
      <div id="quote-box-flex">
        <section id="quote-box">
          <span id="text" style={{ color: color }}>
            {selectedQuote.quote}
          </span>
          <span id="author" style={{ color: color }}>
            {selectedQuote.author}
          </span>
          <button id="new-quote" onClick={fadeFunc}>
            NEW QUOTE
          </button>
          <a
            id="tweet-quote"
            title="Share this quote on Twitter!"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/intent/tweet"
          >
            <button id="tweetbtn">TWEET QUOTE</button>
          </a>
        </section>
      </div>
    </div>
  );
}

export default QuoteMachine;
