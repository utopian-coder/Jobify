import supabase from "../services/supabase";
import { useEffect, useState } from "react";

function useGetJobs() {
  //Creating a state to store the data fetched from the "jobs" Table
  const [jobs, setJobs] = useState(null);

  //using a useEffect hook to fetch data on mount and store in the jobs state.
  useEffect(function () {
    //Async function to fetch all records from the jobs table in supabase
    async function getJobs() {
      const response = await supabase.from("jobs").select("*");
      setJobs(response);
    }
    getJobs();
  }, []);

  //return the jobs state after data has been fetched from the jobs table
  return [jobs];
}

//Exporting the function to be used to fetch data and store in a state in other components.
export default useGetJobs;
