import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = (history) => combineReducers({
    firebase: firebaseReducer,
    router: connectRouter(history)
})

export default rootReducer