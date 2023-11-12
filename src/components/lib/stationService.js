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

async function getStationReportsServer(station_id){
  'use server'
  const supabase = supabaseServerClient();
  const {data: reports, error} = await supabase.rpc('get_station_reports').eq('station_id', station_id).single();

  if(reports){
    return reports;
  } else {
    console.log(error);
  }
  return null;
}

export { getStationsServer , getStationReportsServer };
