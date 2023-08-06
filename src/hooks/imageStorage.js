import supabase from "../services/supabase";

const imageStorage = () => {

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
            return data.path;
        } catch (error) {
            console.error("Error uploading image:", error);
            throw error;
        }
    };


    return { uploadImage };
};

export default imageStorage;