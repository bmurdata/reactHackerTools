import { createClient } from '@supabase/supabase-js'

const URL = 'https://mivjrqhkhicpipvkpria.supabase.co';
const API_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdmpycWhraGljcGlwdmtwcmlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzODUzNTksImV4cCI6MTk5Nzk2MTM1OX0.Zjkb5yCkc0H_m2XcIOpXKh3QvkQBqMdYKKABhTP3egs';
export const supabase = createClient(URL, API_KEY);
