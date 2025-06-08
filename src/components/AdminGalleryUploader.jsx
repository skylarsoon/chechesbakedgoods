import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { storage, db } from "../firebase";

function AdminGalleryUploader() {
    const [imageFile, setImageFile] = useState(null);
    const [caption, setCaption] = useState("");
    const [uploading, setUploading] = useState(false);

    const handleUpload = async () => {
        if (!imageFile || !caption) {
            alert("Please select an image and enter a caption.");
            return;
        }

        setUploading(true);
        try {
            console.log(imageFile.name)
            const imageRef = ref(storage, `gallery/${Date.now()}_${imageFile.name}`);
            await uploadBytes(imageRef, imageFile);
            const downloadURL = await getDownloadURL(imageRef);

            await addDoc(collection(db, "gallery"), {
                imageUrl: downloadURL,
                caption,
                createdAt: Timestamp.now(),
            });

            alert("Image uploaded successfully!");
            setImageFile(null);
            setCaption("");
        } catch (error) {
            console.error("Upload error:", error);
            alert("Something went wrong. Try again.");
        }
        setUploading(false);
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Upload a New Gallery Item</h2>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="mb-3 block w-full"
            />
            <input
                type="text"
                placeholder="Enter caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="mb-3 w-full p-2 border rounded"
            />
            <button
                onClick={handleUpload}
                disabled={uploading}
                className="bg-emerald-400 text-white px-4 py-2 rounded hover:bg-emerald-700"
            >
                {uploading ? "Uploading..." : "Upload"}
            </button>
        </div>
    );
}

export default AdminGalleryUploader;
