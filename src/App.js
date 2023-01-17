import React from 'react';
import Header from "./components/Header";
import Basket from "./components/Basket";
import ProductList from "./components/ProductList";
import { useState } from "react";
import Search from "./components/Search";
import About from "./pages/About";
import BasketCount from "./components/BasketCount";
import data from './models/data.json';

// function App() {
//   const [items, setProducts] = useState(data);
//   return (
//     <div>
//       <h1>Hello world </h1>



    
//     </div>
//   );
// }

function App() {
  const [products, setProducts] = useState(data);
  return (

<div>
 <h1>Hello world </h1> 
</div>
  );
}


// function addToBasket () {


export default App;
