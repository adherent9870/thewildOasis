import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pcujtdryynnfvhohntuj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjdWp0ZHJ5eW5uZnZob2hudHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NDk0NjcsImV4cCI6MjA1ODAyNTQ2N30.52fbuKJ131nhZBxH2GCQVLSNc8OcXVgwWibK9hEyBfU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
