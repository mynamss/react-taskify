import { createClient } from "@supabase/supabase-js";
const SUPABASE_BASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient(SUPABASE_BASE_URL, SUPABASE_API_KEY);
