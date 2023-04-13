import { createClient } from '@supabase/supabase-js'
const URL = 'https://rokkonjllxsjjerfmltu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJva2tvbmpsbHhzamplcmZtbHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEzMTQ2NTgsImV4cCI6MTk5Njg5MDY1OH0.b_iLLOn5vruXaw09FlKJOVX24TS37btff7avEL6sdz8';

export const supabase = createClient(URL, API_KEY);

