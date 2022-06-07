import React from 'react'
import ReactDOM from 'react-dom/client'
import Api from './API/Api'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Api.Provider value='https://pokeapi.co/api/v2/pokemon'>
      <App />
    </Api.Provider>

  </React.StrictMode>
)
