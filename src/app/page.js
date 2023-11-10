import ClientComponentExample from "@/components/ClientComponentExample"
import ServerComponentExample from "@/components/ServerComponentExample"
import Link from "next/link"

const page = () => {
  return (
    <main className="flex flex-grow flex-col items-center justify-center space-y-10">
      <Link href="/stations" > stations </ Link>
    </main>
  )
}

export default page