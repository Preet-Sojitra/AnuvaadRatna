import gTTS from "gtts"
import { NextResponse } from "next/server"

export async function GET(req, res) {
  //   const { text, lang } = req.query
  const gtts = new gTTS("helloo i am preet", "en")
  //   gtts.save("./tmp/hello.mp3", function (err, result) {
  //     if (err) {
  //       throw new Error(err)
  //     }
  //     console.log("Success! Open file ./tmp/hello.mp3 to hear result.")
  //   })s

  gtts.stream().pipe(res)

  return NextResponse.json({ message: "Success!" })
}
