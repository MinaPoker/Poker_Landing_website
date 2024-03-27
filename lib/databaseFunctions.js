import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://eglkxepsbbjqqofsrrzb.supabase.co", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export const checkAddress = async (addressToCheck) => {
    
};
