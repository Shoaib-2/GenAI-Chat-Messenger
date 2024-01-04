
import MessageChat from "./Messagechat";

const DisplayChat = ({messages}) => {
    return (
        <div className="display-chat">
            {messages.map((message, index) =>(
                <MessageChat
                key={index}
                sender={message.sender}
                content={message.content}
                timeStamp={message.timeStamp}
                />
            ))}
        </div>
    )
}
export default DisplayChat;