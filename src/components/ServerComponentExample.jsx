import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';

const ServerComponentExample = async () => {
  const cookieStore = cookies();
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      get(name) {
        return cookieStore.get(name)?.value;
      },
    },
  });

  const { data, error } = await supabase.from('stations').select('*');

  return (
    <>
      {data.map((data) => (
        <div key={data._id}>
          <h1>{data.name}</h1>
          <h1>{data.open_at}</h1>
        </div>
      ))}
    </>
  );
};

export default ServerComponentExample;

// <div>{JSON.stringify(data)}</div>
