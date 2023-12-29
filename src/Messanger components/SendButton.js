import React from "react";
const sendButton = ({onclick}) => {
    return(
        <button className="button-send" onClick = {onclick}>
            Send
        </button>
    )
}

export default sendButton