import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const CommissionStatus = () => {
    const [accepting, setAccepting] = useState(null);

    useEffect(() => {
        const fetchStatus = async () => {
            const docRef = doc(db, "siteStatus", "commissions")
            const snapshot = await getDoc(docRef);
            if (snapshot.exists()){
                setAccepting(snapshot.data().accepting);
            }
        };
        fetchStatus();
    }, []);

    if (accepting === null) return <p>Loading...</p>;

    return (
        <div className="border-1 rounded-2xl w-100 p-8 m-8 text-center bg-emerald-100 shadow-2xl">
            <h2>
                {accepting ? "Commissions are currently open ✅ ": "Commissions are currently closed. Feel free to inquire with questions though <3" }
            </h2>
        </div>
    )
}

export default CommissionStatus;