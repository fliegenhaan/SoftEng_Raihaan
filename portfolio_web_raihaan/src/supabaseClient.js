import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ewwcrnjvdxccemyotckm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3d2Nybmp2ZHhjY2VteW90Y2ttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMDYwNjUsImV4cCI6MjA1ODU4MjA2NX0.AByiPJ06WJbKajniomtzVVRjCkED1k0dANKax7PQ_S0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log("Supabase client initialized:", supabase);