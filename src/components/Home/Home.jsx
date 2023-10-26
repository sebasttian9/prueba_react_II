import Cards from '../Cards/Cards'
import Notificacion from '../Notificacion/Notificacion'
import './Home.css'
import { Toaster } from 'sonner';
 


const Home = () => {

  

  return (
    <>
    <div className='imagenFondo'>
        <h1>¡ Pizzeria Mamma mia !</h1>
        <p>¡ tenemos las mejores pizzas que podras encontrar !</p>
    </div>
    <main className='container cardsHome mt-5'>
        {/* <Notificacion/> */}
        <Cards></Cards>
        <Toaster richColors closeButton/>
    </main>
    </>
  )
}

export default Home