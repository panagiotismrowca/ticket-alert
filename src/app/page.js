import { Suspense } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
// import Message from '@/components/Message';
import Map from '@/components/Map';
import StationList from '@/components/StationList';
import Loading from '@/components/Loading';

async function getStations() {
  const supabase = createClientComponentClient();

  const { data, error } = await supabase.from('stations').select('*').order('station_name', 'asc');

  if (data) {
    if (typeof window !== 'undefined') {
      localStorage?.setItem('stations', JSON.stringify(data));
    }

    return data;
  } else {
    console.log(error);
  }
  return null;
}

export default async function Home() {
  const stations = await getStations();

  return (
    <main className="flex flex-grow flex-col items-center justify-center space-y-10">
      {/* <Message /> */}
      <Suspense fallback={<Loading />}>
        <Map />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <StationList stations={stations} />
      </Suspense>
    </main>
  );
}
