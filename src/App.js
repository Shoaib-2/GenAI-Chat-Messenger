
//necessary libraries and components
import React, {useReducer } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DisplayChat from './Messanger components/DisplayChat';
import * as chatActions from './ReduxStore/actions';
import UserInput from './Messanger components/UserInput';


// Define the initial state and the reducer function
const initialState = {
 inputValue: '',
 messages: [],
};

function reducer(state, action) {
 switch (action.type) {
    case 'SET_INPUT_VALUE':
      return { ...state, inputValue: action.value };
    case 'SEND_MESSAGE':
      return { ...state, inputValue: '', messages: [...state.messages, action.message] };
    default:
      return state;
 }
}

function App() {
 const [state, dispatch] = useReducer(reducer, initialState);

 // Implement the handleSendMessage function
 const handleSendMessage = async () => {
    try {
      // Fetch the data from the API and send it to the server
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:  `Bearer ${process.env.OPENAI_API_KEY}`, 
        },
        body: JSON.stringify({ message: state.inputValue }),
      });

      // Check if the response is successful
      if (response.ok) {
        // Dispatch the SEND_MESSAGE action to update the state
        dispatch({ type: 'SEND_MESSAGE', message: state.inputValue });
      } else {
        console.error('Error in handleSendMessage:', response.statusText);
      }
    } catch (error) {
      console.error('Error in handleSendMessage:', error.message);
      // Handle other potential errors, such as network issues or API key problems
    }
 };

 // Implement the handleChangeInput function
 const handleChangeInput = (event) => {
    dispatch({ type: 'SET_INPUT_VALUE', value: event.target.value });
 };

 return (
   <div className='App'>
     <DisplayChat messages={state.messages} />
     <UserInput
       onChangeInput={handleChangeInput}
       onSendMessage={handleSendMessage}
       inputValue={state.inputValue}
     />
   </div>
 );
}

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
