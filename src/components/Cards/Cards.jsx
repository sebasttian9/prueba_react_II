import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css'

import pizzas from '../../assets/pizzas.json'

const Cards = () => {
  return (

            pizzas.map(pizza=>(

                <Card className='cardsPizza'>
                <Card.Img variant="top" src={pizza.img} />
                <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            ))


  )
}

export default Cards