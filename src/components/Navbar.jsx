import react from 'react';
import { Link } from 'react-router-dom'


export default function Navbar () {
    return (
        <>
            <div className=" bg-green-300 shadow-md px-2 py-1"></div>

            <div className=" bg-lime-200 shadow-md px-2 py-1"> </div>

            <header className="bg-lime-100 shadow-md">
                
                <div className="font-display max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                        <Link className="font-family text-2xl font-bold text-lime-700" to="/">Cheche's Baked Goods</Link>
                        <nav className="space-x-4">
                            <Link className="text-lime-700 hover:underline" to="/">Home</Link>
                            <Link className="text-lime-700 hover:underline" to="/contact">Contact</Link>
                            <Link className="text-lime-700 hover:underline" to="/menu">Menu</Link>
                            {/* <a href="#" className="text-pink-600 hover:underline">Home</a>
                            <a href="#" className="text-pink-600 hover:underline">Menu</a>
                            <a href="#" className="text-pink-600 hover:underline">Contact</a> */}
                        </nav>
                    </div>
            </header>

        </>
    )
}

