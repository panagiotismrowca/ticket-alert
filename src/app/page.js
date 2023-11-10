import ClientComponentExample from "@/components/ClientComponentExample"
import ServerComponentExample from "@/components/ServerComponentExample"
import Link from "next/link"
import StaredStations from "@/components/StaredStations"
import Message from "@/components/Message"

const page = () => {
  return (
    <main className="flex flex-grow flex-col items-center justify-center space-y-10">
      <Message />
      <StaredStations />
      <Link href="/stations"> stations </ Link>
    </main>
  )
}

export default page