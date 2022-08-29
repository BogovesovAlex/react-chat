import React, { useState } from "react";
import ChatBar from "./components/chat-menu/ChatBar";
import ChatBox from "./components/chat/ChatBox";

import './App.css';

function App() {
  const [id, setId] = useState(0);

  const showChatUser = (id) => {
    setId(id);
  }

  return (
    <div className="app">
      <ChatBar onShowUser={showChatUser} />
      <ChatBox id={id} />
    </div>
  );
}

export default App;
