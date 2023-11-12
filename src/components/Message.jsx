// import { cookies } from "next/headers"
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

const Message = async () => {
  // const supabase = createServerComponentClient({ cookies })

  // const { data, error } = await supabase.from("stations").select("*")

  let message = 'Λειτουργία ΜΜΜ λόγω της διεξαγωγής του 40ου Αυθεντικού Μαραθωνίου Αθηνών και των παράλληλων αγώνων δρόμου';

  return (
    <div className="w-full text-md nowrap bg-slate-50 text-red-500 p-1 overflow-hidden">
      <div className="marquee text-sm">{message}</div>
    </div>
  );
};

export default Message;
