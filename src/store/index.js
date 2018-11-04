import { createStore, compose } from 'redux'
import  rootReducer from "../reducers/index"
import { FirebaseConfig as fbConfig } from '../config/dev'
import { reactReduxFirebase } from 'react-redux-firebase'
import {routerMiddleware} from "connected-react-router";
import {applyMiddleware} from "redux/src/index";
import firebase from 'firebase';
firebase.initializeApp(fbConfig);
const config = {
    userProfile: 'users', // firebase root where user profiles are stored
    enableLogging: false, // enable/disable Firebase's database logging
    presence: 'presence', // where list of online users is stored in database
    sessions: 'sessions' // where list of user sessions is stored in database (presence must be enabled)
}

export default function configureStore (initialState, history) {

    const createStoreWithMiddleware = compose(
        applyMiddleware(
            routerMiddleware(history),
        ),
        reactReduxFirebase(firebase, config)
        )(createStore)
    const store = createStoreWithMiddleware(rootReducer(history))

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}