import supabase from "../services/supabase";
import imageStorage from "./imageStorage";


async function createJob(job, image) {

  const { uploadImage } = imageStorage();

  const imageUrl = await uploadImage(image);
  job.logo = "https://gmgmormwkwwpyelqwrew.supabase.co/storage/v1/object/public/images/" + imageUrl;

  const { data, error } = await supabase.from("jobs").insert([job]).select();
  return { data, error };

}

export default createJob;