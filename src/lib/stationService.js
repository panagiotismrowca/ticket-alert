import { supabaseServerClient } from '@/utils/supabaseClient';

async function getStationsServer() {
  'use server';
  // Server-side logic to fetch stations
  const supabase = supabaseServerClient();

  console.log('fetching stations');
  const { data: stations, error } = await supabase.from('stations').select('*').order('station_name', 'asc');

  if (stations) {
    return stations;
  } else {
    console.log(error);
  }
  return null;
}

export { getStationsServer };
