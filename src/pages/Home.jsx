import React from 'react';
import Navbar from '../components/Navbar'
import CommissionStatus from '../components/CommissionStatus'
import LocationStatus from '../components/LocationStatus';
import { Link } from 'react-router-dom'


export default function Home () {
    return(
        <>
            <div className='h-[88vh]'> 
                <section className="relative z-10 py-20 text-center font-display">
                    <h2 className="text-4xl font-extrabold mb-4">Happiness for any occasion 🍰</h2>
                    <p className="mb-6 text-lg text-gray-600">Delicious and fully customizable homemade treats made with love.</p>
                    <Link to="/menu" className="bg-lime-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition">
                        See Our Menu
                    </Link>

                    <LocationStatus/>
                </section>
            </div>

            {/*
            <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h3 className="text-2xl font-semibold mb-8">Popular Treats</h3>
                <div className="grid gap-6 md:grid-cols-3">

                <div className="bg-pink-50 rounded-lg shadow p-4 text-center">
                    <img src="https://via.placeholder.com/150" alt="Cupcake" className="w-full h-40 object-cover rounded" />
                    <h4 className="text-lg font-bold mt-4">Vanilla Cupcake</h4>
                    <p className="text-sm text-gray-600">Light, fluffy, and topped with sweet buttercream.</p>
                </div>

                <div className="bg-pink-50 rounded-lg shadow p-4 text-center">
                    <img src="https://via.placeholder.com/150" alt="Cookie" className="w-full h-40 object-cover rounded" />
                    <h4 className="text-lg font-bold mt-4">Chocolate Chip Cookie</h4>
                    <p className="text-sm text-gray-600">Crispy edges and gooey chocolate centers.</p>
                </div>

                <div className="bg-pink-50 rounded-lg shadow p-4 text-center">
                    <img src="https://via.placeholder.com/150" alt="Macaron" className="w-full h-40 object-cover rounded" />
                    <h4 className="text-lg font-bold mt-4">Strawberry Macaron</h4>
                    <p className="text-sm text-gray-600">Delicate, chewy, and full of berry flavor.</p>
                </div>
                </div>
            </div>
            </section>
            */}
            
      </>
    )
}