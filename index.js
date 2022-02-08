import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Hero from './components/Hero';
import data from './data';


//  return name.charAt(0).toUpperCase+name.slice(1)


/*const names = ["alice", "bob", "charlie", "danielle"]
const caps= names.map(function(name){

  return name[0].toUpperCase() + name.slice(1)
})
console.log(caps)

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const para=pokemon.map(function(para){
  return  `<p>${para}</p>`
})*/
//console.log(data)
/*imgsrc={car.coverImg}
    rating={car.stats.rating}
    reviewcount={car.stats.reviewCount}  
    location={car.location}
    title={car.title}
      price={car.price}
      openSpots={car.openSpots}*/

 function Page() {
  const cardData=data.map(car=>{
    return (
   < Card 
   key={car.id}
   car={car}
   
      />)
  })
   return (
   <div>
 
    <Navbar />
    <Hero/>

    
{cardData}
</div>
)
}
ReactDOM.render(<Page/>,document.getElementById("root"))

