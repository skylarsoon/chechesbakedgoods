import { useState, useEffect } from 'react';
import AdminGalleryUploader from '../components/AdminGalleryUploader';
import CommissionToggle from '../components/CommissionToggle';
import SetLocationStatus from '../components/SetLocationStatus';
import { auth } from "../firebase"
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const allowedEmails = [
    "you@example.com",       // replace with your email
    "friend@example.com"     // and your friend's email
];

function Admin() {
    const [user, setUser] = useState(null);
    const [checkingAuth, setCheckingAuth] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setCheckingAuth(false);

            if (!currentUser || !allowedEmails.includes(currentUser.email)) {
                navigate("/login");
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    if (checkingAuth) {
        return <p className="text-center mt-8">Checking permissions...</p>;
    }

    return (
        <>
            <div className="py-20 text-center">
                
                <header className="text-4xl font-extrabold mb-4">
                    Admin
                </header>

                <div className="flex flex-col items-center border-1 max-w-200 m-auto rounded-2xl shadow-2xl">
                    <AdminGalleryUploader />
                    <div className="p-4 m-4 rounded-xl border-1">
                        <CommissionToggle />
                    </div>
                    <SetLocationStatus/>
                </div>


            </div>
        </>
    )
}

export default Admin;