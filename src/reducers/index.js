import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { firebaseReducer } from 'react-redux-firebase'
import chat from './chat'
const rootReducer = (history) => combineReducers({
    firebase: firebaseReducer,
    router: connectRouter(history),
    chat:chat
});

export default rootReducer