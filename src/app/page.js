import { Station } from "@/components/Station";
import { Map } from "@/components/Map";
import { Report } from "@/components/Report";

export default async function Home() {
  return (
    <div class="justify-between">
    <Map />
    <Report />
    <Station />
    </div>
  )
}