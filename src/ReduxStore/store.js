import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './Mainreducers';


const store = configureStore({
    reducer: rootReducer
})
export default store

