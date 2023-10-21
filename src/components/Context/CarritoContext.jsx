import { createContext, useState, useEffect } from 'react';
import pizzasData from '../../assets/pizzas.json'

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {

    const [pizzas, setPizzas] = useState(pizzasData);
    const [data,setData] = useState({
        items: [],
        cantidad: 0,
        total:0
      });

 // function para agregar al carro
 const CarroAdd = (prod) => { 

    // console.log(prod)
    // setData('lalalal')
    // console.log(data)

    //valido si existe el producto
    if(existeProd(prod)){
        //function para buscar el index del item repetido del carro
        const encontro = (item) => item.id == prod.id;
        const indiceItem = data.items.findIndex(encontro);
        console.log(indiceItem)
        //modifico el atributo cantidad en carro del item repetido a agregar
        data.items[indiceItem].cantidadEnCarro = data.items[indiceItem].cantidadEnCarro + 1;

        //seteo cantidad general y piso el array items para actualizar las unidades del producto agregado
        setData({
            ...data,
            cantidad: data.cantidad + 1,
            items: data.items
        }); 

    }else{

        // si no existe, agrego cantidad inicial del producto agregado al carro
        prod.cantidadEnCarro = 1;   

        // seteo el valor de la cantidad y agrego el item al carro
        setData({
            ...data,
            cantidad: data.cantidad + 1,
            items: [...data.items,prod]
        });            
        
        
    }
} 


// function para saber si existe el producto en el carro
const existeProd = (prod) => {
    const buscaProd = data.items.find(item => item.id == prod.id);
    if(buscaProd){
        return true;
    }else{
        return false;
    }
}


      const totalCarro = () => {

        // const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let total = 0;
        let totalFila = 0;

        // 1 + 2 + 3 + 4
        if(data.items.length>0){
        // console.log(data.items.reduce(reducer));
            data.items.map(data=>{
                totalFila = data.price * data.cantidadEnCarro;
                total = total + totalFila;
            });
        }


        return total;

    }

  return (
    <CarritoContext.Provider value={{pizzas,data,setData,totalCarro,CarroAdd}} >
        {children}
    </CarritoContext.Provider>
  )
}

export default CarritoProvider