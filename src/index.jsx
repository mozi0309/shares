import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import App from './app/index.js'

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('app'))
