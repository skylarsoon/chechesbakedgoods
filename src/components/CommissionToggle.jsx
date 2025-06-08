import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase"; // adjust path as needed

const CommissionToggle = () => {
    const [accepting, setAccepting] = useState(false);
    const [loading, setLoading] = useState(true);

    const docRef = doc(db, "siteStatus", "commissions");

    useEffect(() => {
        const fetchStatus = async () => {
            const snapshot = await getDoc(docRef);
            if (snapshot.exists()) {
                setAccepting(snapshot.data().accepting);
            }
            setLoading(false);
        };

        fetchStatus();
    }, []);

    const handleToggle = async (e) => {
        const newStatus = e.target.checked;
        setAccepting(newStatus);
        await updateDoc(docRef, {
            accepting: newStatus
        });
    };

    if (loading) return <p>Loading...</p>;

    return (
        <label className="flex items-center gap-2">
            <input
                type="checkbox"
                checked={accepting}
                onChange={handleToggle}
            />
            {accepting ? "Accepting Commissions" : "Not Accepting Commissions"}
        </label>
    );
};

export default CommissionToggle;
