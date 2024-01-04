import React, {useState} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as chatActions from './ReduxStore/actions'
import getResponseOpenAi from './API/api';
import MessageChat from './Messanger components/Messagechat';
import DisplayChat from './Messanger components/DisplayChat';
import SendButton from './Messanger components/SendButton';
import UserInput from './Messanger components/UserInput';




const App = ({ user, messages, addMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = async () => {
    try {
      if (inputValue.trim() !== '') {
        const newMessage = {
          sender: user.username,
          content: inputValue,
          timestamp: new Date().toLocaleTimeString(),
        };
  
        addMessage(newMessage);
  
        const responseAi = await getResponseOpenAi(inputValue);
  
        if (responseAi) {
          addMessage({
            sender: 'genai',
            content: responseAi,
            timestamp: new Date().toLocaleTimeString(),
          });
  
          setInputValue('');
        } else {
          console.error('Empty response from the OpenAI API');
          // Handle the case where the API response is empty
        }
      }
    } catch (error) {
      console.error('Error in handleSendMessage:', error.message);
      // Handle other potential errors, such as network issues or API key problems
    }
  };
  

//   return (
//     <div className='App'>
//       {messages.map((message, index) => (
//         <div key={index}>
//           <span>{message.sender}</span>
//           <span>{message.content}</span>
//           <span>{message.timestamp}</span>
//         </div>
//       ))}
//       <input type='text' value={inputValue} onChange={handleChangeInput} />
//       <button onClick={handleSendMessage}>Send</button>
//     </div>
//   );
// };

return (
  <div className='App'>
    <DisplayChat messages={messages} />
    <UserInput
      onChangeInput={handleChangeInput}
      onSendMessage={handleSendMessage}
      inputValue={inputValue}
    />
  </div>
);
};

const messages = [
  { sender: 'User1', content: 'Hello!', timestamp: '12:00 PM' },
  { sender: 'User2', content: 'Hi there!', timestamp: '12:05 PM' },
  // ... other messages
];

const mapStateToProps = (state) => {
  return {
    user: state.user,
    messages: state.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: bindActionCreators(chatActions.addMessage, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
