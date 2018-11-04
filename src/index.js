import { AppContainer } from 'react-hot-loader'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import rootReducer from './reducers'
import configureStore from './store'
const history = createBrowserHistory();

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState,history);

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App history={history} />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}

render()

// Hot reloading
if (module.hot) {
    // Reload components
    module.hot.accept('./App', () => {
        render()
    })

    // Reload reducers
    module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer(history))
    })
}