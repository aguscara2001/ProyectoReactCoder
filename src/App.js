import React from "react";
import ItemCount from "./Components/ItemCount";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./Components/ItemListContainer";
import MyNav from "./Components/MyNav";
import ItemDetailContainer from "./Components/ItemDetailContainer";


export default function App() {

  return (
    
    <BrowserRouter>
    <MyNav />
    <ItemCount stock = {10} inicial = {0}/>
    
    <Routes>

    <Route exact path='/' element={<ItemListContainer />} />
    <Route exact path="/productos/:id" element={<ItemDetailContainer/>} />
    
    
    </Routes>
    </BrowserRouter>
   
  );
}

