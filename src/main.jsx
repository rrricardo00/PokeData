import React from 'react'
import ReactDOM from 'react-dom/client'
import {ApiStorage} from './API/Api'
import App from './Components/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiStorage>
      <App />
    </ApiStorage>

  </React.StrictMode>
)
