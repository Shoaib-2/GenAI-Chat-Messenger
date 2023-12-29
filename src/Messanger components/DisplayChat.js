import React from "react";
import MessageChat from "./Messagechat";

const displayChat = ({messages}) => {
    return (
        <div className="display-chat">
            {messages.map((message1, index) =>(
                <MessageChat
                key={index}
                sender={message1.sender}
                content={message1.content}
                timeStamp={message1.timeStamp}
                />
            ))}
        </div>
    )
}
export default displayChat;