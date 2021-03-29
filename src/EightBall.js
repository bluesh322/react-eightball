import React, { useState } from "react";
import "./EightBall.css";

const EightBall = (props) => {
  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const [goodCount, setGoodCount] = useState(0);
  const [maybeCount, setMaybeCount] = useState(0);
  const [badCount, setBadCount] = useState(0);


  function setAnswer(answer) {
    setMsg(answer.msg);
    setColor(answer.color);
    if (answer.color === 'green') setGoodCount(goodCount+1)
    else if (answer.color === 'goldenrod') setMaybeCount(maybeCount + 1)
    else setBadCount(badCount + 1);
  }

  function reset() {
    setMsg("Think of a Question");
    setColor("black");
  }
  return (
    <div className="content">
      <div
        style={{ backgroundColor: color }}
        onClick={() =>
          setAnswer(
            props.answers[Math.floor(Math.random() * props.answers.length)]
          )
        }
        className="EightBall"
      >
        <p className="msg">{msg}</p>
      </div>
        <button onClick={reset}>reset</button>
        <p>Good: {goodCount} - Maybe: {maybeCount} - Bad: {badCount}</p>
    </div>
  );
};

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ],
};

export default EightBall;
