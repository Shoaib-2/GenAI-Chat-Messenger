import {configureStore} from '@reduxjs/toolkit';
import mainReducer from './Mainreducers';

// const reducerMain = (state = initialState, action) => {
//     switch(action.type) {
//         case ADD_MESSAGE:
//         return {
//         ...state, 
//         messages: [...state.messages, action.payload],
//         }
//         case UPDATE_USER:
//         return {
//             ...state,
//             user: {...state.user, ...action.payload}
//     }
//     case LOGIN_USER:
//         return{
//             ...state,
//             user: {...state.user, isLoggedIn: true},
//         }
//     case LOGOUT_USER:
//         return{
//             ...state,
//             user: {...state.user, isLoggedIn: false}
//         }
//         default:
//             return state
// }
// }



const store = configureStore({
    main: mainReducer
})
export default store

