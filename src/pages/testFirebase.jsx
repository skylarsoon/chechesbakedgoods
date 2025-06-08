import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function TestFirebase() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const snapshot = await getDocs(collection(db, "gallery"));
            // const docs = snapshot.docs.map(doc => doc.data());
            // setData(docs);
            snapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data())
            })
        };
        fetchData();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Gallery Items from Firebase</h2>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
    );
}

export default TestFirebase;