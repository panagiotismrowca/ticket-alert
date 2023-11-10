import { Suspense } from 'react';
// import Message from '@/components/Message';
import Map from '@/components/Map';
import StationList from '@/components/StationList';

import { LOADING_SPINNER_COLOR, LOADING_SPINNER_SECONDARY_COLOR } from '@/constants';

export default function Home() {
  return (
    <main className="flex flex-grow flex-col items-center justify-center space-y-10">
      {/* <Message /> */}
      <Map />
      <Suspense fallback={<p>Φόρτωση δεδομένων...</p>}>
        <StationList />
      </Suspense>
    </main>
  );
}
