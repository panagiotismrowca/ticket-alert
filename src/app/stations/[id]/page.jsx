import StationReports from '@/components/StationReports'
import { getStationReportsServer } from '@/lib/stationService';

export default async function Station({ params }) {
  const station_reports = await getStationReportsServer(params.id);
  console.log(station_reports)

  return (
    <main className="flex flex-grow flex-col items-center justify-center space-y-10">
      <StationReports station_reports={station_reports} />
    </main>
  );
}
