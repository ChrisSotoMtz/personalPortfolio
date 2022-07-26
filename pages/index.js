import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Skillset from "../components/Skillset";
import Projects from "../components/Projects";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skillset />
      <Projects />
    </div>
  );
}
