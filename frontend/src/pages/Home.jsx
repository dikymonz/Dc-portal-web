import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServerStats from "../components/ServerStats";
import Footer from "../components/Footer";
import amelGif from "../assets/img/amel.gif";

export default function Home() {
  useEffect(() => {
    let link = document.querySelector("link[rel='icon']");

    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    link.href = amelGif;
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServerStats />
      </main>
      <Footer />
    </>
  );
}