import React from "react";
import ItemCount from "./Components/ItemCount";
import ItemListContainer from "./Components/ItemListContainer";
import MyNav from "./Components/MyNav";


export default function App() {

  return (
    <>
    <MyNav />
    <ItemCount stock = {10} inicial = {0}/>
    <ItemListContainer saludo = "Hola mundo"/>
    </>
  );
}

