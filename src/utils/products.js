const productos = [
{
    "nombre": "Jordan 1 Barely Rose",
    "precio": 3000,
    "id": 1, 
    "imagen": "https://res.cloudinary.com/dw7kgrkzs/image/upload/v1650564170/productos/jordan1barely_tnzaum.jpg",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorum!"},
{
   
    "nombre": "Jordan 4 Union LA",
    "precio": 3000,
    "id": 2, 
    "imagen": "https://res.cloudinary.com/dw7kgrkzs/image/upload/v1650564170/productos/jordan-4-union-2-_23-pct_ys8m4k.jpg",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorum!"},
    
    {

    "nombre": "Jordan 1 Shadow",
    "precio": 3000,
    "id": 3, 
    "imagen": "https://res.cloudinary.com/dw7kgrkzs/image/upload/v1650564170/productos/Shadow-_16-pct_oddi25.jpg",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorum!"},
{

    "nombre": "Jordan 1 Dark Mocha",
    "precio": 3000,
    "id": 4, 
    "imagen": "https://res.cloudinary.com/dw7kgrkzs/image/upload/v1650564170/productos/Jordan-1-Retro-High-Dark-Mocha-1_25_pct_hpcfif.jpg",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorum!"},
{
    "nombre": "Jordan 4 Off-White",
    "precio": 7000,
    "id": 5, 
    "imagen": "https://res.cloudinary.com/dw7kgrkzs/image/upload/v1650564170/productos/jordan-4-off-white-1-_25-pct_wd6ucf.jpg",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorum!"},
{

    "nombre": "Jordan 4 Lightning",
    "precio": 7000,
    "id": 6, 
    "imagen": "https://res.cloudinary.com/dw7kgrkzs/image/upload/v1650564170/productos/Air-Jordan-4-Retro-Lightning-2021-PS-Product-_18-pct_lppcgf.jpg",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorum!"},
{

    "nombre": "Jordan 1 Off-White",
    "precio": 4000,
    "id": 7, 
    "imagen": "https://res.cloudinary.com/dw7kgrkzs/image/upload/v1650564170/productos/air-jordan-1_caroxh.png",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorum!"},
{

    "nombre": "Jordan 1 Traviss Scott",
    "precio":5000 , 
    "id": 8, 
    "imagen": "https://res.cloudinary.com/dw7kgrkzs/image/upload/v1650564170/productos/Jordan-1-Retro-High-Travis-Scott_ngz73j.jpg",
    "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorum!"}

]
  const producto={"id": 20,
  "producto": "Rice - Wild",
  "descripcion": "Helminth arthrit-forearm",
  "price": 152.14,
  "stock": 30.82,
  "imagen": "C:/Users/Agustin/Desktop/React-Coder/proyecto-react/src/utils/galeria/jordan-4-union-2-(23-pct).jpg"  }

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