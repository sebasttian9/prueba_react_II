import Cards from '../Cards/Cards'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='imagenFondo'>
        <h1>¡ Pizzeria Mamma mia !</h1>
        <p>¡ tenemos las mejores pizzas que podras encontrar !</p>
    </div>
    <main className='container cardsHome mt-5'>
        <Cards></Cards>
    </main>
    </>
  )
}

export default Home