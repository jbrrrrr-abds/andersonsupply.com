import { createClient } from "@supabase/supabase-js";
import { Url, Key } from "root/../supabase.js";

const SupabaseClient = createClient(Url, Key);

export default SupabaseClient;
