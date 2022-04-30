import React from 'react'

const Item = ({producto}) => {
  return (
    <>
    <div id="productos">
        
        <div data-aos="fade-in" data-aos-delay="100">
                <img src={producto.imagen} alt={producto.nombre}/>
                <h4>{producto.nombre}</h4>
                <p>{producto.precio}</p>
                <button data-id={producto.id} class="agregar-carrito">Agregar al Carrito</button>
            </div> 
        
    </div>
    </>
  )
}

export default Item