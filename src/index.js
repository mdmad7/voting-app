import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware,createStore } from 'redux'
import logger from 'redux-logger'
import voteApp from './reducers'
import App from './components/App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

let store = createStore(voteApp, applyMiddleware(logger))

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)
registerServiceWorker()
