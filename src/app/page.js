import { Station } from "c:/Users/mcpan/projects/ticket-alert/src/components/Station";
import { Map } from "c:/Users/mcpan/projects/ticket-alert/src/components/Map";
import { Report } from "c:/Users/mcpan/projects/ticket-alert/src/components/Report";

async function getStations(){
  const res = await fetch('c:/Users/mcpan/projects/ticket-alert/src/app/api/getStations')
  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

export default async function Home() {
  const data =  await getStations()
  console.log(data);
  return (
    <div class="justify-between">
    <Map />
    <Report />
    <Station />
    </div>
  )
}