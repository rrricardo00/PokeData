import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApiStorage } from './API/Api'
import App from './Components/App'
import NotFound from './Components/NotFound'
import Pokemon from './Components/Pokemon'
import { MainContainer } from './Styles/Style'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainContainer>
      <ApiStorage>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='pokemon/:id' element={<Pokemon />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ApiStorage>
    </MainContainer>


  </BrowserRouter>
)
