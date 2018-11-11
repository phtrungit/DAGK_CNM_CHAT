import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)
library.add(faCircle)

const App = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            { routes }
        </ConnectedRouter>
    )
}

App.propTypes = {
    history: PropTypes.object,
}

export default App