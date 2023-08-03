/*

Initalizing supabase connection by importing createClient from the supabase npm package.

*/
import { createClient } from "@supabase/supabase-js";

//Supabase Credentials to access the database
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

//Initializing the client with the database
const supabase = createClient(supabaseUrl, supabaseKey)

//Exporting the client for use in the application components
export default supabase;