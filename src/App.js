import React, {useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as chatActions from './ReduxStore/actions'
import './App.css';


//For storing up the messages and user input, a state component.
const App = () => {
const [messages, setMessages] = useState([
  {sender: 'User1', content: 'Hello! I am GenAI, How can i help you today ?', timestamp: '11:00 PM'},
  {sender: 'User2', content: 'Hello! GenAI, Show me a Chicken Recipe ?', timestamp: '11:03 PM'},
  {sender: 'User1', content: 'Surely, Here is the Recipe:', timestamp: '11:04 PM'},
  {sender: 'User2', content: 'Thank you GenAI, you are very helpful!', timestamp: '11:06 PM'},
])
const [inputValue, setInputValue] = useState('')

//Handling an Event for the change of input
const handleChangeInput = (Event) => {
setInputValue(Event.target.value)
}

//Handling an event for sending a message.
const handleSendMessage = () => {
  if (inputValue.trim() !== ''){
    const newMessage = {
      sender: 'User1',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString(),

    }
    setMessages([...messages, newMessage])
  }
}
return(
  <div className='app'>
    <displayChat messages = {messages} />
    <userInput
    onChangeInput = {handleChangeInput}
    onSendMesaage = {handleSendMessage}
    inputValue = {inputValue} />
  </div>
)
}

const mapStateToProps = (state) => {
  return{
    user: state.main.user,
    messages : state.main.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chatActions: bindActionCreators(chatActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);




