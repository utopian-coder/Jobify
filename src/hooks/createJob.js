import supabase from "../services/supabase";

/*

Hook to insert a job post into the jobs table by taking an object as a paramater that consists of the table names as properties

*/

async function createJob(job) {
  const { data, error } = await supabase.from("jobs").insert([job]).select();
  console.log(data)
  return { data, error };
}

export default createJob;
