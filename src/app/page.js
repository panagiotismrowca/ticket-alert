import Image from "next/image";
import { Station } from "@/components/Station";
import { Map } from "@/components/Map";
import { Report } from "@/components/Report";
import User from "@/components/User";
import { PrismaClient } from '@prisma/client';

export default function Home() {
  return (
    <div class="justify-between">
    <Map />
    <Report />
    <Station />
    </div>
  )
}