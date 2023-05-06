import React from "react";
import MessageList from "./MessageList";


function Messages(props) {
  console.log(props)
  return (
    <main>
            <h2>Messages</h2>
      <MessageList messages={props.messages} />
      <form className="message-form">
          <input placeholder="Type a message..." />
        </form>
    </main>
  )
}
export default Messages;