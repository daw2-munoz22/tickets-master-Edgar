import { createClient } from '@supabase/supabase-js'
// conexion con supabase
const supabaseUrl = 'https://xowhbsxzfirkcorazzqb.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhvd2hic3h6Zmlya2NvcmF6enFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4NTY5NTksImV4cCI6MjAwMDQzMjk1OX0.lAkXGx91tdGIV_z9TctKEHVi8a4et8NzfC7aqmcxBEo'
// exportamos la conexión a supabase
export const supabase = createClient(supabaseUrl, supabaseKey)
console.log('Conexion a supabase', supabase)
