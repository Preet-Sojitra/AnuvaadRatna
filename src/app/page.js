import Image from "next/image"
import Navbar from "../components/navbar"

export default function Home() {
  return (
    <div className="bg-bgprimary px-5 py-4">
      <Navbar />

      <main className="px-20 mt-6">
        <h1 className="text-action">Anuvaad Ratna</h1>
      </main>
    </div>
  )
}
