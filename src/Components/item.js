import {producto} from "./itemList"
  
  export const PromiseProducto = new Promise((resolve,reject) => {
      let condicion = true;
      if(condicion) {
          setTimeout(() => {
              resolve(producto);
          }, 3000);
      }else{
          reject(console.log("ERROR"))
      }
  });