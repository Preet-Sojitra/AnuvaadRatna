import { Poppins, Roboto } from "next/font/google"
import Link from "next/link"

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
      <div className={`flex justify-between px-10 `}>
        <h1 className={`text-action font-bold text-3xl ${poppins.className}`}>
          Anuvaad रत्न
        </h1>

        <div className={`${roboto.className} flex gap-10 items-center text-lg`}>
          <h2> About </h2>
          <h2> Contact </h2>

          <Link href={"/auth"}>
            <button className="border-action border-2 px-4 text-secondary rounded-md hover:bg-action duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
