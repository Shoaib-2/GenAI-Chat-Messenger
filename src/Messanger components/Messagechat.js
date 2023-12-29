import React from "react";
const MessageChat = ({sender, content, timestamp}) =>{
    return(
      <div className='message-chat'>
        <span className='sender'>{sender}</span>
        <span className='content'>{content}</span>
        <span className='timestamp'>{timestamp}</span>
      </div>
    )
  }

  export default MessageChat;