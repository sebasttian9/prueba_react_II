import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react";
import { CarritoContext } from "../Context/CarritoContext";
import Card from 'react-bootstrap/Card';
import { CardBody, CardFooter, CardText } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './InfoPizza.css'

const InfoPizza = () => {

const {pizzas,CarroAdd} = useContext(CarritoContext);
const [pizza,setPizza] = useState({});
const [isLoading, setIsLoading] = useState(0);
const {id} = useParams();

console.log(pizzas)


const findPizza = () =>{

    setIsLoading(1);

    return pizzas.find(p => p.id == id)

}


useEffect(() => {
    setPizza(findPizza())
    setIsLoading(0)

}, [])


    
  return (
    <div className="container">
        <main className="main_info mt-5">
            {
                isLoading ? <h1>Cargando</h1> : (
                <><section className="imagenGrande">
                <img src={pizza.img} alt="" />
            </section>
            <section className="informacion">
                <h3>{pizza.name}</h3>
                <hr />
                <p>{pizza.desc}</p>
                <p>Ingredientes: </p>
                <ul>
                {
                            pizza?.ingredients?.map(ingre=>(
                                <li>{ingre}</li>
                            ))
                        }
                </ul>
                <div className="precio_boton">
                    <span>Precio : {pizza.price}</span>
                    <Button variant="danger" onClick={()=>CarroAdd(pizza)}>Añadir</Button>
                </div>
            </section></>)
            }
          </main>
    </div>
  )
}

export default InfoPizza