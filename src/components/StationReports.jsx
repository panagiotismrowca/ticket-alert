'use client';
import Image from "next/image";

const StationReports = ({ station_reports : reports }) => {
  console.log(reports)
  console.log(reports.total_reports_with_controllers)
  console.log(reports.total_reports_without_controllers)

  if(!(reports.total_reports_with_controllers>0 && reports.total_reports_without_controllers>0)){
    // εάν δεν υπάρχουν αναφορές καλείται συνάρτηση που υπολογίζει πιθανότητες
    console.log('statistica')
  } else {
    reports_balance = reports.total_reports_without_controllers - reports.total_reports_with_controllers;
    if(reports_balance < 0){
      // εάν η ισορροπία του σταθμού ειναι αρνητικη υπάρχουν περισσοτερες αναφορές για ελεγκτές
      if(reports_balance < 1){
        ;
      }
    }

  }

  
  return (
    <div className="w-full">
      <div className="p-2 flex bg-slate-50 justify-center">
        <div className="text-slate-800 font-black h-22 p-6 text-2xl w-7/12">
          {reports.station_name} 
        </div>
        <div className="text-slate-800 font-black h-22 p-6 text-center text-2xl w-5/12">
        <div className="flex bg-slate-800 text-slate-50 rounded-t-md">
            <div className="w-1/2">2</div>
            <div className="w-1/2">3</div>
          </div>
          <div className="rounded-b-md border-slate-800 border-2 text-red-800">
            EXEI
          </div>
        </div>
      </div>
      <div className="flex p-2 bg-slate-50 font-medium">
        <button className="border-4 border-green-700 text-green-700 w-1/3 p-2 rounded-3xl mx-auto"> DEN EXEI </button>
        <button className="border-4 border-red-700 text-red-700 w-1/3 rounded-3xl p-4 mx-auto"> EXEI </button>
      </div>
    </div>
  );
};

export default StationReports;
