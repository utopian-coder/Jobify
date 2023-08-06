import supabase from "../services/supabase";
import { useEffect, useState } from "react";

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

    return jobs
}

// Exporting the function to be used to fetch data and store in a state in other components.
export default useGetJobs;
