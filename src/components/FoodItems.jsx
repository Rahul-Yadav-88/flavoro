import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData'
const Food = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
        {FoodData.map((food)=>{
            return <FoodCard key={Food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}/>
        })}
       
      
    </div>
  )
}

export default Food