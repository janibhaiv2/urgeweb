import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Error: Supabase environment variables are missing. ' +
    'Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY ' +
    'are set in your .env.local file.'
  );
}

// Initialize Supabase client with fallback values for development
const supabase = createClient(
  supabaseUrl || 'https://rhtfcvyenvcicqcgmtlr.supabase.co',
  supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJodGZjdnllbnZjaWNxY2dtdGxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMzgyNDgsImV4cCI6MjA2MDkxNDI0OH0.kS8TGmSNcp-2InX3h6LhKqWFpcIjLJ-kyui_tiQK6Pg'
);

export { supabase };
