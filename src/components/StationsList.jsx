'use client';

import { useState, useEffect, useRef /*, useCallback*/ } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StationsNotFound from '@/components/StationsNotFound';

const goToStationIcon = '/icons/ellipsis-horizontal.svg';
const goToStationIconMobile = '/icons/arrow-small-right.svg';

const StationsList = ({ stations: stationsProp }) => {
  const [stations, setStations] = useState(stationsProp ?? null);
  const storedStations = useRef(null);

  useEffect(() => {
    if (stations) {
      console.log('[localStorage] setting stations');
      localStorage.setItem('stations', JSON.stringify(stations));
      storedStations.current = stations;
    } else {
      console.log('[localStorage] getting stations');
      storedStations.current = JSON.parse(localStorage.getItem('stations'));

      if (storedStations.current) {
        console.log('[localStorage] stations found');
        setStations(storedStations.current);
      }
    }

    // if (storedStations.current) {
    //   setStations(storedStations.current);
    //   // setIsLoading(false);
    // } else {
    //   console.log('fetching stations');
    //   // getStations();
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchStations = (keyword) => {
    const initialStations = storedStations.current ?? stations;

    const normalizedKeyword = keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const filteredStations = initialStations.filter((station) =>
      station.station_name.toUpperCase().includes(normalizedKeyword.toUpperCase()),
    );

    // console.log('filteredStations', filteredStations);

    setStations(filteredStations);
  };

  return (
    <>
      <input
        className=" flex transition-all duration-300 rounded-lg p-2 border outline-none  bg-slate-50
                    w-10/12       bg-opacity-10       placeholder:text-slate-50        text-slate-50
              focus:w-11/12 focus:bg-opacity-75 focus:placeholder:text-slate-950 focus:text-slate-950"
        placeholder="Αναζήτηση"
        onChange={(e) => searchStations(e.target.value)}
        type="text"
        aria-label="Αναζήτηση"
      />

      <div className="flex w-full px-2 md:px-3 flex-col justify-center">
        {(stations?.length === 0 || stations === null) && <StationsNotFound />}

        <div className="flex flex-col md:flex-row md:flex-wrap">
          {stations &&
            stations?.length > 0 &&
            stations?.map((station) => (
              <div className="w-full md:w-1/2 p-2" key={`station_${station.station_id}`}>
                <Link href={'stations/' + station.station_id} className=" bg-slate-800 rounded-lg h-20 w-full flex">
                  <div className=" bg-slate-50 rounded-lg h-20 w-5/6">
                    <div className=" text-slate-800 font-bold h-11 my-auto p-3 mx-1"> {station.station_name} </div>
                    <div className="flex p-1 h-9 ml-2">
                      {station.routes?.map((route) => (
                        <div
                          key={`route_${route}`}
                          className="font-bold  border-slate-300 border-2 text-slate-900 text-center text-xs rounded-md w-5 h-5 mx-1"
                        >
                          {route}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="m-auto">
                    <Image className="hidden md:block" src={goToStationIcon} alt="icon" width={32} height={32} />
                    <Image className="block md:hidden" src={goToStationIconMobile} alt="icon" width={32} height={32} />
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default StationsList;
