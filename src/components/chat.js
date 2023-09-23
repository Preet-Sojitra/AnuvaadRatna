import { IoSend } from "react-icons/io5"
import { chats } from "../../utils/constants";

export default function Chat() {
  const chats = [
    {
        user:"This is test",
        computer:"Haaaa"
    },
    {
        user:"This is test",
        computer:"Haaaa"
    },
    {
        user:"This is test",
        computer:"Haaaa"
    },
    {
        user:"This is test",
        computer:"Haaaa"
    },
    {
        user:"This is test",
        computer:"Haaaa"
    },
    {
        user:"This is test",
        computer:"Haaaa"
    },
    {
        user:"This is test",
        computer:"Haaaa"
    },
]
  console.log(chats);
  return (
    <>
      <main className="fixed bottom-5 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-3">
          <input
            type="text"
            className="border-2 border-action bg-transparent rounded-md w-[40vw] text-xl px-2 py-1"
            placeholder="Enter text to translate"
          />
          <div>
            <div className="bg-secondary px-2 py-2 rounded cursor-pointer">
              <IoSend className="text-white text-lg" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
