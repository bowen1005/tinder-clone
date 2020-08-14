import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Sarah",
      image:
        "https://www.telegraph.co.uk/content/dam/films/2017/09/20/TELEMMGLPICT000125620866_trans%2B%2BqVzuuqpFlyLIwiB6NTmJwWkYP4rJHTibfmjY9ekte60.jpeg",
      message: "This is a message from Sarah",
    },
    {
      name: "Sarah",
      image:
        "https://www.telegraph.co.uk/content/dam/films/2017/09/20/TELEMMGLPICT000125620866_trans%2B%2BqVzuuqpFlyLIwiB6NTmJwWkYP4rJHTibfmjY9ekte60.jpeg",
      message: "This is another message from Sarah",
    },
    {
      message: "This is a message I sent",
    },
  ]);

  const handleSend = (event) => {
    event.preventDefault();
    // Prevents from refreshing the page
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          typ="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
