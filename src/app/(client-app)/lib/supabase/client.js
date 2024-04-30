import { createClient } from "@supabase/supabase-js";
import { Url, Key } from "root/../supabase.js";

const createSBClient = createClient(Url, Key);

export default createSBClient;
