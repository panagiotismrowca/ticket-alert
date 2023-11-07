import ClientComponentExample from "@/components/ClientComponentExample"
import ServerComponentExample from "@/components/ServerComponentExample"

const page = () => {
  return (
    <main className="flex flex-grow flex-col items-center justify-center space-y-10">
      <ClientComponentExample />
      <ServerComponentExample />
    </main>
  )
}

export default page