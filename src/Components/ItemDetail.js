import React from 'react'

export const ItemDetail = ({item}) => {
  return (
    {item.map(item => {
      <p>{item.nombre}</p>;
      <p>{item.precio}</p>;
      <p>{item.imagen}</p>;
      <p>{item.descripcion}</p>

    }) }
  )
}
