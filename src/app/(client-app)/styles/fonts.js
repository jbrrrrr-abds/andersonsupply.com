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
      path: "../../../../public/fonts/GothamSSm-Black.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../../../public/fonts/GothamSSm-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../../public/fonts/GothamSSm-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../../../public/fonts/GothamSSm-Black.woff2",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-GothamSS",
});

export { Anton, GothamSS };