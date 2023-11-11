// import Message from '@/components/Message';
import Map from '@/components/Map';
import StationsList from '@/components/StationsList';
import Loading from '@/components/Loading';

import { getStationsServer } from '@/lib/stationService';

export default async function Home() {
  const stations = await getStationsServer();

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
