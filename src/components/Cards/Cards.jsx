import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css'
import { CarritoContext } from '../Context/CarritoContext';
import { useContext } from 'react';
import { CardBody, CardFooter, CardText } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
// import pizzas from '../../assets/pizzas.json'

const Cards = () => {

const {pizzas,data,setData,CarroAdd}  = useContext(CarritoContext);
const navigate = useNavigate();

         
const VerDetalle = (id) => {

    if(id==''){
        alert('id no existe!!');
        return;
    }

    navigate(`/pizza/${id}`);
}

  return (

            pizzas.map(pizza=>(

                <Card className='cardsPizza' key={pizza.id}>
                <Card.Img variant="top" src={pizza.img} />
                <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <hr />
                <Card.Text>
                        <p className='Ingredientes'>Ingredientes: </p>
                        <ul>
                        {
                            pizza.ingredients.map(ingre=>(
                                <li>{ingre}</li>
                            ))
                        }
                        </ul>
                        <hr />

                </Card.Text>
                <CardText className='precio'>
                    $ {pizza.price}
                </CardText>
                <CardBody className='botonesCard'>
                    <Button variant="info" onClick={()=> VerDetalle(pizza.id)}>Ver mas</Button>
                    <Button variant="danger" onClick={()=> CarroAdd(pizza)}>Añadir</Button>
                </CardBody>
                </Card.Body>
            </Card>
            ))


  )
}

export default Cards