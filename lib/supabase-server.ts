import { createClient, SupabaseClient } from "@supabase/supabase-js";

let cachedClient: SupabaseClient | null = null;
let lastConfigHash: string = "";

export function getSupabaseServerClient(): SupabaseClient {
  const supabaseUrl = process.env.SUPABASE_URL?.trim();
  const supabaseSecretKey =
    process.env.SUPABASE_SECRET_KEY?.trim() ||
    process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!supabaseUrl) {
    throw new Error(
      "SUPABASE_URL is missing. Please define SUPABASE_URL in your .env.local file with your Supabase Project URL (e.g. https://<project-ref>.supabase.co)."
    );
  }

  if (!supabaseUrl.startsWith("http://") && !supabaseUrl.startsWith("https://")) {
    throw new Error(
      "SUPABASE_URL is invalid: It must be a valid HTTP or HTTPS URL (e.g. https://<project-ref>.supabase.co). Note: Do not paste the publishable or secret API key into SUPABASE_URL."
    );
  }

  if (!supabaseSecretKey) {
    throw new Error(
      "SUPABASE_SECRET_KEY is missing. Please define SUPABASE_SECRET_KEY in your .env.local file."
    );
  }

  // Cache client and invalidate if configuration changes
  const currentConfigHash = `${supabaseUrl}_${supabaseSecretKey.slice(0, 10)}`;
  if (!cachedClient || lastConfigHash !== currentConfigHash) {
    lastConfigHash = currentConfigHash;
    cachedClient = createClient(supabaseUrl, supabaseSecretKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }

  return cachedClient;
}
