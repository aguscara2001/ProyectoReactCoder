const productos = [
{
    "nombre": "Jordan 1 Barely Rose",
    "precio": 3000,
    "id": 1, 
    "imagen": "http://127.0.0.1:5500/Galeria/jordan1barely"},
{
   
    "nombre": "Jordan 4 Union LA",
    "precio": 3000,
    "id": 2, 
    "imagen": "http://127.0.0.1:5500/Galeria/jordan-4-union-2-(23-pct).jpg"},
{

    "nombre": "Jordan 1 Shadow",
    "precio": 3000,
    "id": 3, 
    "imagen": "http://127.0.0.1:5500/Galeria/Shadow-(16-pct).jpg"},
{

    "nombre": "Jordan 1 Dark Mocha",
    "precio": 3000,
    "id": 4, 
    "imagen": "http://127.0.0.1:5500/Galeria/Dark-Mocha-(16-pct).jpg"},
{
    "nombre": "Jordan 4 Off-White",
    "precio": 7000,
    "id": 5, 
    "imagen": "http://127.0.0.1:5500/Galeria/jordan-4-off-white-1-(25-pct).jpg"},
{

    "nombre": "Jordan 4 Lightning",
    "precio": 7000,
    "id": 6, 
    "imagen": "http://127.0.0.1:5500/Galeria/Air-Jordan-4-Retro-Lightning-2021-PS-Product-(18-pct).jpg"},
{

    "nombre": "Jordan 1 Off-White",
    "precio": 4000,
    "id": 7, 
    "imagen": "http://127.0.0.1:5500/Galeria/air-jordan-1.png"},
{

    "nombre": "Jordan 1 Traviss Scott",
    "precio":5000 , 
    "id": 8, 
    "imagen": "http://127.0.0.1:5500/Galeria/Jordan-1-Retro-High-Travis-Scott.jpg"}

]
  const producto={"id": 20,
  "producto": "Rice - Wild",
  "descripcion": "Helminth arthrit-forearm",
  "price": 152.14,
  "stock": 30.82}

 export const TraerProductos = ()=>{
      return new Promise((resolve,reject)=>{
          setTimeout(() => {
            resolve(productos)
          }, 3000);
      })
  }


  
  export const TraerProducto = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
          resolve(producto)
        }, 3000);
    })
}