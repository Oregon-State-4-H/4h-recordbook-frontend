import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import NavBarLanding from "../components/NavbarLanding";
import IntroBanner from "../components/Landing/IntroBanner";
import IntroAbout from "../components/Landing/IntroAbout";
import IntroTeam from "../components/Landing/IntroTeam";
import IntroContact from "../components/Landing/IntroContact";

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
