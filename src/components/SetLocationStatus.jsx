import { useEffect, useState, useRef } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const SetLocationStatus = () => {
    const locationRef = useRef();
    // const [newLocation, setNewLocation] = useState(null)
    const docRef = doc(db, "siteStatus", "location")

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setNewLocation(locationRef.current.value)

        const newLocation = locationRef.current.value
        console.log(newLocation)
        try{
            await updateDoc(docRef, {
                location: newLocation
            });
        }
        catch(error){
            console.log(error)
        }

    };

    return (
        <>
            <form className="p-4 m-4" onSubmit={handleSubmit}>
                <input type="text" placeholder="Location" ref={locationRef} name="location" className="border p-2 min-w-50 rounded" required/>
                <button type="submit" className="bg-emerald-400 text-white py-2 px-4 rounded">Change Location</button>
            </form>
        </>
    )
}

export default SetLocationStatus;