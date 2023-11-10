import ClientComponentExample from '@/components/ClientComponentExample';
import ServerComponentExample from '@/components/ServerComponentExample';
import Link from 'next/link';
import StaredStations from '@/components/StaredStations';
import Message from '@/components/Message';
import Map from '@/components/Map';
import StationList from '@/components/StationList';

export default function Home() {
  return (
    <main className="flex flex-grow flex-col items-center justify-center space-y-10">
      {/* <Message /> */}
      <Map />
      <StationList />
    </main>
  );
}
