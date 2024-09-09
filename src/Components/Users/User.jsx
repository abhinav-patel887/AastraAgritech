import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {userid} =useParams()
  return (
    <div className='flex flex-col mt-6 ml-5'>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-yellow-300 from-orange-700">Fresh </span> Farm Fruits</h1><br />
      <div className='flex gap-3 justify-center'>
        <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:-translate-y-2 hover:-translate-x-3 hover:shadow-gray-500 hover:shadow-2xl hover:scale-110 duration-300">
      <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src="src\assets\Apple.png" alt="card-image" />
  </div>
  <div class="p-4 ">
    <h6 class="mb-2 text-slate-800 text-xl font-bold">
    <span class="text-transparent bg-clip-text bg-gradient-to-r to-green-700 from-orange-700">Fresh Organic Apples</span> - Farm Picked
    <span className='text-2xl'> Price: ₹229/kg</span> <span className='text-xs font-light mt-0'>(Approx.7-9pcs)</span>
    </h6>
  </div>
  <div class=" flex justify-evenly px-4 pb-4 pt-0 mt-2">
    <button class="rounded-md bg-orange-700 py-2 px-4 border border-transparent text-center text-sm text-white  shadow-md hover:shadow-lg  focus:shadow-none active:bg-slate-400 hover:bg-orange-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Buy Now
    </button>
    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add the Cart
    </button>
  </div>
</div>  
<div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:-translate-y-2 hover:-translate-x-3 hover:shadow-gray-500 hover:shadow-2xl hover:scale-110 duration-300">
  <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src="src\assets\Banana.png" alt="card-image" />
  </div>
  <div class="p-4 ">
    <h6 class="mb-2 text-slate-800 text-xl font-bold">
    <span class="text-transparent bg-clip-text bg-gradient-to-r to-green-700 from-orange-700">Naturally Ripened </span> - Organic Bananas
    <span className='text-2xl'> Price: ₹50/dozen</span>
    </h6>
  </div>
  <div class=" flex justify-evenly px-4 pb-4 pt-0 mt-2">
    <button class="rounded-md bg-orange-700 py-2 px-4 border border-transparent text-center text-sm text-white  shadow-md hover:shadow-lg  focus:shadow-none active:bg-slate-400 hover:bg-orange-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Buy Now
    </button>
    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add the Cart
    </button>
  </div>
</div>  
    </div>
      <h1 className="mb-4 mt-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-yellow-300 from-orange-700">Fresh </span> Farm Vegetables</h1><br />
      <div className='flex gap-3 justify-center'>
        <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:-translate-y-2 hover:-translate-x-3 hover:shadow-gray-500 hover:shadow-2xl hover:scale-110 duration-300">
  <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src="src/assets/onion.png" alt="card-image" />
  </div>
  <div class="p-4 ">
    <h6 class="mb-2 text-slate-800 text-xl font-bold">
    <span class="text-transparent bg-clip-text bg-gradient-to-r to-green-700 from-orange-700">Naturally Grown Organic Onion</span><br />
    <span className='text-2xl'> Price: ₹70/kg</span>
    </h6>
  </div>
  <div class=" flex justify-evenly px-4 pb-4 pt-0 mt-2">
    <button class="rounded-md bg-orange-700 py-2 px-4 border border-transparent text-center text-sm text-white  shadow-md hover:shadow-lg  focus:shadow-none active:bg-slate-400 hover:bg-orange-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Buy Now
    </button>
    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add the Cart
    </button>
  </div>
</div>  
<div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:-translate-y-2 hover:-translate-x-3 hover:shadow-gray-500 hover:shadow-2xl hover:scale-110 duration-300">
  <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src="https://images.pexels.com/photos/1367243/pexels-photo-1367243.jpeg?auto=compress&cs=tinysrgb&w=600" alt="card-image" />
  </div>
  <div class="p-4 ">
    <h6 class="mb-2 text-slate-800 text-xl font-bold">
    <span class="text-transparent bg-clip-text bg-gradient-to-r to-green-700 from-orange-700">Juicy Organic Tomatoes  </span><br />
    <span className='text-2xl'> Price: ₹50/kg</span>
    </h6>
  </div>
  <div class=" flex justify-evenly px-4 pb-4 pt-0 mt-2">
    <button class="rounded-md bg-orange-700 py-2 px-4 border border-transparent text-center text-sm text-white  shadow-md hover:shadow-lg  focus:shadow-none active:bg-slate-400 hover:bg-orange-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Buy Now
    </button>
    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Add the Cart
    </button>
  </div>
</div>
    </div>
    </div>
    
  )
}

export default User