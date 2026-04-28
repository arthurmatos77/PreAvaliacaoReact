import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Exercicio1 from './Pages/Exercicio1'

function App() {

  return (
    <>
     
     <Route>
      <Route path='/' element={<Home />} />
      <Route path='/exercicio1' element={<Home />} />
     </Route>
     
     </>
  )
}