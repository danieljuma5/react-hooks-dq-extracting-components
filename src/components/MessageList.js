import React from "react";

const MessageList = (props) => {

  function handleExtractWord(word) {
    const extractedWord = word.split('').slice(0,1).toString()
    return extractedWord;
  }
  const renderMessages = props.messages.map((message) => (
    
          <ul key={message.id}>
            <li className="message sent">
              <div className="icon">{handleExtractWord(message.name)}</div>
              <span className="content">{message.content}</span>
            </li>
          </ul>
  ))
  return (
    <section className="messages">
        {renderMessages}
    </section>
  )
}

export default MessageList;