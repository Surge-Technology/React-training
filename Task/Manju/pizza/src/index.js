import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const pizzaData=[
  {
    name:"aaaaaa",
    ingredients:"bread with italian olive oil",
    price:23,
    photoName:"",
    soldOut:false
  },
  {
    name:"bbbbbbb",
    ingredients:"potato flavour",
    price:32,
    photoName:"",
    soldOut:false
  }
]
function App(){
  return(
    <div className='container'>
      <Header/>
      
    </div>
  )
}
function Header(){
const style={};
return(
  <header>
    <h1 style={style}>React pizza co.</h1>
  </header>
)
}
function Menu() {
  return(
  <main className='menu'>
<h2>Our menu</h2>
<Pizza 
 name="aaaaaa"
 ingredients="bread with italian olive oil"
 price={23}
 photoName=""
/>
<Pizza 
 name="dddddddd"
 ingredients="bread"
 price={50}
 photoName="../src/images/1-pizza.jpg"
/>
  </main>
  );
}
function Pizza(props){

}
