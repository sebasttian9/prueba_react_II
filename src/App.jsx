import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import InfoPizza from './components/InfoPizza/InfoPizza'
import CarritoProvider from './components/Context/CarritoContext'
import { Route, Routes } from 'react-router-dom'
import Carrito from './components/Carrito/Carrito'

function App() {

  return (
    <>
    <CarritoProvider>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pizza/:id' element={<InfoPizza/>} />
        <Route path='/carrito' element={<Carrito/>} />
      </Routes>
    </CarritoProvider>     
    </>
  )
}

export default App
