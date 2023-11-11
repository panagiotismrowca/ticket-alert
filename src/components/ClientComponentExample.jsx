'use client';

import { useState, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';

const ClientComponentExample = () => {
  const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const [data, setData] = useState();

  // if (typeof window !== 'undefined') {
  //   localStorage?.setItem('someKey', JSON.stringify(someData));
  // }

  const handleClick = async () => {
    const { data, error } = await supabase.from('stations').select('*').eq('id', 1);
    setData(JSON.stringify(data));

    data.forEach(function (station) {
      console.log(station.name);
    });
  };

  useEffect(() => {
    handleClick();
  }, []);

  return <button onClick={handleClick}>{data ? data : 'Client Component'}</button>;
};

export default ClientComponentExample;
