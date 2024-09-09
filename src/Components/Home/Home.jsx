import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-2xl sm:mt-1 mt-20 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-rowdies font-bold sm:text-5xl">
                        Organic Simplicity,<br />
                        Farm to Home
                            <span className="block sm:text-xl mt-4"><br />Experience the convenience of organic shopping.<br /> Download our app today and get farm-fresh <br/>products  at your fingertips!</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-auto" src="https://images.pexels.com/photos/1443867/pexels-photo-1443867.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image1" />
                </div>
            </aside>
            <h1 className="text-center text-2xl sm:text-5xl py-2 font-medium">Bridging Farmers and Consumers Across India </h1>
            <div className="flex flex-row  gap-2  place-items-center sm:mt-20">
                
            <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:-translate-y-2 hover:-translate-x-4 hover:shadow-gray-500 hover:shadow-2xl hover:scale-110 duration-300">
                <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md ">
                    <img className="sm:w-96 w-48 p-1" src="https://images.pexels.com/photos/28100001/pexels-photo-28100001/free-photo-of-fruit-vegetable-market.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image2" />
                </div>
                <div class="p-4">
                    <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                    Farm-Fresh Fruits & Vegetables
                    </h6>
                    <p class="text-slate-600 leading-normal font-light">
                    At Aastra Agritech, we deliver a variety of fresh, organic fruits straight from the farm to your doorstep. 
                    Our commitment to ensure the best quality products.     
                    </p>
                </div>
                <div class="px-4 pb-4 pt-0 mt-2">
                    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Read more
                    </button>
                </div>
            </div>  
            <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:-translate-y-2 hover:-translate-x-3 hover:shadow-gray-500 hover:shadow-2xl hover:scale-110 duration-300">
                <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <img className="sm:w-96 w-48 p-1" src="https://images.pexels.com/photos/20396324/pexels-photo-20396324/free-photo-of-rural-group-work-15.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image2" />
                </div>
                <div class="p-4">
                    <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                    Nurturing the Essence of Pure Grains
                    </h6>
                    <p class="text-slate-600 leading-normal font-light">
                    At Aastra Agritech, we take pride in offering the finest paddy grains, grown with care and precision. 
                    By connecting local farmers directly with consumers.
                    
                    </p>
                </div>
                <div class="px-4 pb-4 pt-0 mt-2">
                    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Read more
                    </button>
                </div>
            </div>  
            <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:-translate-y-2 hover:-translate-x-3 hover:shadow-gray-500 hover:shadow-2xl hover:scale-110 duration-300">
                <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <img className="sm:w-96 w-48 p-1" src="https://images.pexels.com/photos/6216868/pexels-photo-6216868.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image2" />
                </div>
                <div class="p-4">
                    <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                    Golden Fields of Sustainability
                    </h6>
                    <p class="text-slate-600 leading-normal font-light">
                    Witness the vast, golden wheat fields that symbolize our promise of purity and abundance. 
                    Aastra Agritech collaborates with farmers across India to cultivate organic wheat.
                    </p>
                </div>
                <div class="px-4 pb-4 pt-0 mt-2">
                    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Read more
                    </button>
                </div>
            </div>                  
            <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:-translate-y-2 hover:translate-x-4 hover:shadow-gray-500 hover:shadow-2xl hover:scale-110 duration-300">
                <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <img className="sm:w-96 w-48 p-1" src="https://images.pexels.com/photos/4544171/pexels-photo-4544171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image2" />
                </div>
                <div class="p-4">
                    <h6 class="mb-2 text-slate-800 text-xl font-semibold">
                    Freshness Brewed from the Hills
                    </h6>
                    <p class="text-slate-600 leading-normal font-light">
                    Our tea plants are carefully nurtured in India’s pristine tea estates, ensuring every leaf is 
                    packed with rich flavors and natural goodness.
                    </p>
                </div>
                <div class="px-4 pb-4 pt-0 mt-2">
                    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Read more
                    </button>
                </div>
            </div>                  
            </div>

            
        </div>
    );
}
