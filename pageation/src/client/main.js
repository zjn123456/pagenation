import React from 'react'
import ReactDom from 'react-dom'
import App from './Containers/App'

ReactDom.render(
    <App age={18}/>,
    document.getElementById('app')
)

