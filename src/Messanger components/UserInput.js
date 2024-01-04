
const UserInput = ({onChangeInput, onSendMessage, inputValue}) => {
    return (
        <div className="input-chat">
            <input
            type="text"
            value={inputValue}
            onChange={onChangeInput}
            placeholder="Type your message"
            />
            <button onClick={onSendMessage}>Send</button>
        </div>
    )
}

export default UserInput;