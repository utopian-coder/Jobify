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

export default useGetJobs;