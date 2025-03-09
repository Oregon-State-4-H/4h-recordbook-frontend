import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import NavBarLanding from "./components/NavbarLanding";
import IntroBanner from "./components/IntroBanner";
import IntroAbout from "./components/IntroAbout";
import IntroTeam from "./components/IntroTeam";
import IntroContact from "./components/IntroContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <NavBarLanding />
      <IntroBanner />
      <IntroAbout />
      <IntroTeam />
      <IntroContact />
    </div>
  );
}
