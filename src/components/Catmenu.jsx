import React from 'react'

const Catmenu = () => {
  return (
    <>
    <div className='mx-6'>
      <h3 className='text-xl font-semibold'>Find the best FOOD</h3>
      <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-hidden'>
        <button className='px-3 py-2 bg-gray-400 font-bold hover:bg-green-600 rounded-lg hover:text-white'>All</button>
        <button className='px-3 py-2 bg-gray-400 font-bold hover:bg-green-600 rounded-lg hover:text-white'>Breakfast</button>
        <button className='px-3 py-2 bg-gray-400 font-bold hover:bg-green-600 rounded-lg hover:text-white'>Lunch</button>
        <button className='px-3 py-2 bg-gray-400 font-bold hover:bg-green-600 rounded-lg hover:text-white'>Dinner</button>
        <button className='px-3 py-2 bg-gray-400 font-bold hover:bg-green-600 rounded-lg hover:text-white'>Snacks</button>
      </div>
    </div>
    </>
  )
}

export default Catmenu