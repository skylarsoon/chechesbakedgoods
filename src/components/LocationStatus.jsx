import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const LocationStatus = () => {
    const [location, setLocation] = useState(null)

    useEffect(() => {
        const fetchStatus = async () => {
            const docRef = doc(db, "siteStatus", "location")
            const snapshot = await getDoc(docRef);
            if (snapshot.exists()) {
                setLocation(snapshot.data().location);
            }
        };
        fetchStatus();
    }, []);

    return (
        <div className="p-4 m-4">
            <h2>Currently based in 📍{location}</h2>
        </div>
    )
}

export default LocationStatus;