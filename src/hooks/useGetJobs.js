import { useEffect, useState } from "react";
import supabase from "../services/supabase";

function useGetJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      try {
        const response = await supabase.from("jobs").select("*");
        setJobs(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getJobs();
  }, []);

  return jobs;
}

export default useGetJobs;
