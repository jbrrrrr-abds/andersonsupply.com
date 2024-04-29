//👇 Configure our font object
import localFont from "next/font/local";
import { Anton as AntonFont } from "next/font/google";

const Anton = AntonFont({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-Anton",
});

const GothamSS = localFont({
  src: [
    {
      path: "../../../../public/fonts/GothamSSm-Book.woff2",
      weight: "400",
    },
    {
      path: "../../../../public/fonts/GothamSSm-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../../../public/fonts/GothamSSm-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../../../public/fonts/GothamSSm-Black.woff2",
      weight: "9000",
    },
  ],
  variable: "--font-GothamSS",
});

export { Anton, GothamSS };