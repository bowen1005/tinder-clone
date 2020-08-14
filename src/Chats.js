import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! How are you"
        timestamp="35 minutes ago"
        profilePic="https://www.telegraph.co.uk/content/dam/films/2017/09/20/TELEMMGLPICT000125620866_trans%2B%2BqVzuuqpFlyLIwiB6NTmJwWkYP4rJHTibfmjY9ekte60.jpeg"
      />
      <Chat
        name="Ellen"
        message="Hey! How are you"
        timestamp="55 minutes ago"
        profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879"
      />
      <Chat
        name="Sandra"
        message="Hey! How are you"
        timestamp="3 days ago"
        profilePic="https://img.texasmonthly.com/2012/06/sandrabullock.jpg?auto=compress&crop=faces&fit=crop&fm=jpg&h=1400&ixlib=php-1.2.1&q=45&w=1400"
      />
      <Chat
        name="Natasha"
        message="Hey! How are you"
        timestamp="1 week ago"
        profilePic="https://pbs.twimg.com/profile_images/1122956085604827136/xo9p7XOS_400x400.jpg"
      />
    </div>
  );
}

export default Chats;
