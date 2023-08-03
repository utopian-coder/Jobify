import supabase from "../services/supabase";
import { useEffect, useState } from "react";

function useGetJobs(){
    const [jobs, setJobs] = useState(null);
    
    useEffect(function(){
        async function getJobs(){
            const response = await supabase.from('jobs').select('*');
            setJobs(response);
        }
        getJobs();
    },[])
    
    return [jobs];
}

export default useGetJobs;