import ListGroup from 'react-bootstrap/ListGroup';
import { CarritoContext } from '../Context/CarritoContext';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import './Carrito.css'
import { ListGroupItem } from 'react-bootstrap';



const Carrito = () => {

const {data,setData,CarroAdd,totalCarro} = useContext(CarritoContext);

          // function para agregar al carro
          const CarroLess = (prod) => { 

            console.log(prod)
            // setData('lalalal')
            // console.log(data)
                //function para buscar el index del item repetido del carro
                const encontro = (item) => item.id == prod.id;
                const indiceItem = data.items.findIndex(encontro);
                console.log(indiceItem)

                if(data.items[indiceItem].cantidadEnCarro==1){ // elimino el item del carro

                        eliminarItem(indiceItem);
                }else{

                        //modifico el atributo cantidad en carro del item repetido a agregar
                        data.items[indiceItem].cantidadEnCarro = data.items[indiceItem].cantidadEnCarro - 1;
            
                        //seteo cantidad general y piso el array items para actualizar las unidades del producto agregado
                        setData({
                            ...data,
                            cantidad: data.cantidad - 1,
                            items: data.items
                        }); 
                }

    
        } 


        const eliminarItem = (id) => {

            //antes de eliminar guardo la cantidad del producto en el carro
            const cantidadEliminada = data.items[id].cantidadEnCarro;
            //elimino el item del array 
            data.items.splice(id,1);
            // seteo la cantidad (le resto la cantidad eliminada del item) y recupero el carro nuevamente
            setData({
                ...data,
                cantidad: data.cantidad - cantidadEliminada,
                items: [...data.items]
            });
    
        }



  return (
    <div className="container">

        <main className="carrito mt-5">
            <h2>Detalle del pedido: </h2>
        <ListGroup className=''>
            {
                data.items.length > 0 ? 
                (data?.items?.map(p=>(
                    
                    <ListGroup.Item > 
                        <main className='fila_carro'>
                        <div className='imagen_nombre'>
                            <img src={p.img} width={'100px'} alt="" srcset="" /> 
                            {p.name} 
                        </div>
                        <div className='precio_botones'>
                            $ {p.price * p.cantidadEnCarro}                     
                            <Button variant="info" onClick={()=> CarroLess(p)}>-</Button> {p.cantidadEnCarro}
                            <Button variant="danger" onClick={()=> CarroAdd(p)}>+</Button>
                        </div>
                        </main>
                    </ListGroup.Item>)                    
                ))
                : (<ListGroup.Item className='text-center'>No hay productos en el pedido</ListGroup.Item>)
            }
            <ListGroupItem className='total_pedido'> Total Pedido : $ {totalCarro()}</ListGroupItem>
        </ListGroup>
        </main>

    </div>
  )
}

export default Carrito