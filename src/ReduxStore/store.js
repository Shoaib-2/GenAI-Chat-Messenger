import {createStore, combineReducers} from 'redux';
const initialState ={
    user: {
        username: 'Guest',
        isLoggedIn: false
    },
    messages: []
}

const reducerMain = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_MESSAGE':
        return {
        ...state, 
        messages: [...state.messages, action.payload],
        }
        case 'UPDATE_USER':
        return {
            ...state,
            user: {...state.user, ...action.payload}
    }
    case 'LOGIN_USER':
        return{
            ...state,
            user: {...state.user, isLoggedIn: true},
        }
    case 'LOGOUT_USER':
        return{
            ...state,
            user: {...state.user, isLoggedIn: false}
        }
        default:
            return state
}
}

const rootReducer = combineReducers({
    main: reducerMain
})

const store = createStore(rootReducer)
export default store

