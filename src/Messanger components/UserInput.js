import React from "react";
const userInput = ({inputChange, sendMessage, inputValue}) => {
    return (
        <div className="input-chat">
            <input
            type="text"
            placeholder="Type your message"
            onChange={inputChange}
            value={inputValue}/>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default userInput;