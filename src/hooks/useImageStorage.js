import { useState } from "react";
import supabase from "../services/supabase";

const useImageStorage = () => {
    const [imageURL, setImageURL] = useState(null);

    const uploadImage = async (file) => {
        try {
            const { data, error } = await supabase.storage
                .from("images")
                .upload(`public/images/${file.name}`, file, {
                    cacheControl: "3600",
                    upsert: false,
                });

            if (error) {
                throw error;
            }

            setImageURL(data.publicURL);
        } catch (error) {
            console.error("Error uploading image:", error);
            throw error;
        }
    };



    return { imageURL, uploadImage };
};

export default useImageStorage;
// https://gmgmormwkwwpyelqwrew.supabase.co/storage/v1/object/