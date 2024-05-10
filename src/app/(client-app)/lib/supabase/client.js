import { createClient } from "@supabase/supabase-js";
import { Url, Key } from "root/../supabase.js";

const supabase = createClient(Url, Key);

export default supabase;
