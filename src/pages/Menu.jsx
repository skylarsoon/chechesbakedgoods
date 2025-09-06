import React, { map, useEffect, useState } from 'react';
import Navbar from '../components/Navbar'
import { getDocs, collection } from 'firebase/firestore';
import { db } from "../firebase";

export default function Contact () {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await getDocs(collection(db, "gallery"));
            const docs = snapshot.docs?.map((doc) => doc.data())
            setData(docs)
        }
        fetchData();
    }, []);

    return(
        <>  
            {console.log(data)}
            <div className="bg-lime-50 py-20 text-center">
                <header className="font-display text-4xl font-extrabold mb-4">
                    Gallery
                </header>
                <div className="flex p-24 m-8 space-x-8">
                    {data?.map((image) => (
                        <div className="bg-lime-200 rounded-lg shadow p-8 text-center" key={image.createdAt}>
                            <img className="w-full h-40 object-cover rounded" src={image.imageUrl} />
                            <h1 className="font-display text-sm text-gray-600">{image.caption}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}