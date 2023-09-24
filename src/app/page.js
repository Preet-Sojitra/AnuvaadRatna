import Image from "next/image"
import Navbar from "../components/navbar"
import { BsArrowRightShort } from "react-icons/bs"
import Link from "next/link"


export default function Home() {
  
  return (
    <div className="bg-bgprimary px-5 py-4 min-h-screen">
      <Navbar />

      <main className="px-20 mt-20 flex items-center">
        {/* Add font in this heading */}
        <div className="w-4/5">
          <h1 className="text-action text-6xl font-bold">Anuvaad रत्न</h1>

          <p className="text-secondary font-semibold text-4xl mt-6 w-[70%]">
            Bridging Languages, Connecting Hearts.
          </p>

          <div>
            <p className="text-secondary font-medium mt-5 w-4/5 text-lg">
              Anuvaad Ratna is your gateway to effortless translation,
              converting English into Indian regional languages with precision
              and ease. Connect, communicate, and bridge the language divide
              effortlessly with our powerful NLP-based software."
            </p>

            <div className="mt-5">
              <Link href="/user">
                <button className="bg-action px-5 py-2 gap-1 group rounded-md font-medium flex items-center text-xl text-white">
                  Get Started
                  <div className="group-hover:translate-x-1 group-hover:duration-300 group-hover:ease-in-out">
                    <BsArrowRightShort className="text-3xl" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src="hero.svg" alt="illust" className="w-[47vw]" />
        </div>
      </main>
    </div>
  )
}
