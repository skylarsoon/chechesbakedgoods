import React, {useState} from 'react';
import Navbar from '../components/Navbar'
import AdminGalleryUploader from '../components/AdminGalleryUploader';
import CommissionToggle from '../components/CommissionToggle';
import SetLocationStatus from '../components/SetLocationStatus';

export default function Admin() {
    return (
        <>
            <div className="py-20 text-center">
                <header className="text-4xl font-extrabold mb-4">
                    Admin
                </header>
                <div className="flex flex-col items-center">
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