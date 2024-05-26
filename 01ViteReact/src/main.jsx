import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const
// Ele = ( <a
// href="https://google.com" target='_blank'>Visit
// google</a> )
const createreactele = React.createElement(
  'a',
  {
    href : "https://google.com",
    target : '_blank'
  },
  'Click Me..'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  createreactele
  // </React.StrictMode>,
)
