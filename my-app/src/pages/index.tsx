import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import NavBarLanding from "../components/NavbarLanding";
import IntroBanner from "../components/IntroBanner";

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
      {/* <IntroAbout />
      <IntroTeam />
      <IntroContact /> */}
    </div>
  );
}
