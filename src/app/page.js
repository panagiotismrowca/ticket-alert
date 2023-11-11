import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';
// import Message from '@/components/Message';
import Map from '@/components/Map';
import StationsList from '@/components/StationsList';
import Loading from '@/components/Loading';

async function getStations() {
  const cookieStore = cookies();
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      get(name) {
        return cookieStore.get(name)?.value;
      },
    },
  });

  console.log('fetching stations');
  const { data: stations, error } = await supabase.from('stations').select('*').order('station_name', 'asc');

  if (stations) {
    return stations;
  } else {
    console.log(error);
  }
  return null;
}

export default async function Home() {
  const stations = await getStations();

  if (!stations) {
    return <Loading />;
  }

  return (
    <main className="flex flex-grow flex-col items-center justify-center space-y-10">
      {/* <Message /> */}
      <Map />
      <StationsList stations={stations} />
    </main>
  );
}
