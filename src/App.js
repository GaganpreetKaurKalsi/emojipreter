import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🥳": "party",
  "😇": "blessed",
  "😂": "funny",
  "🤣": "intense laughter",
  "😅": "close call",
  "🥰": "Being in love",
  "🤩": "impressive",
  "😛": "just kidding"
};

var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function emojiInputHandler(event) {
    var meaning = emojiDictionary[event.target.value];
    if (meaning === undefined && event.target.value !== "") {
      meaning = "we don't have this in our database";
    }
    setEmojiMeaning(meaning);
  }
  function emojiReaction(emoji) {
    setEmojiMeaning(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1>Emojipreter</h1>
      <input
        onChange={emojiInputHandler}
        className="textbox"
        type="text"
        placeholder="put an emoji here to know the meaning"
      ></input>
      <h2>{emojiMeaning}</h2>

      <h3 style={{ paddingTop: "2rem" }}>emojis we know</h3>
      {/* <p>{emojisWeKnow}</p> */}
      <ul className="list">
        {emojisWeKnow.map(function (emoji, index) {
          return (
            <span
              key={emoji}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              onClick={() => emojiReaction(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
