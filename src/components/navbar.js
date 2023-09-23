import { Poppins, Roboto } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function navbar() {
  return (
    <>
      <div className={`flex justify-between `}>
        <h1 className={`text-action font-bold text-3xl ${poppins.className}`}>
          Anuvaad Ratna
        </h1>

        <div className={`${roboto.className} flex gap-10 items-center text-lg`}>
          <h2> About </h2>
          <h2> Contact </h2>

          <button className="border-action border-2 px-4 text-secondary rounded-md hover:bg-action duration-300">
            Login
          </button>
        </div>
      </div>
    </>
  )
}
