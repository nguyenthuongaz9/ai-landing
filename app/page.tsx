import About from "@/components/About";
import Contact from "@/components/Contact";
import Goals from "@/components/Goals";
import Header from "@/components/Header";
import Team from "@/components/Team";
import Technologies from "@/components/Technologies";


export default function Home() {

  return (
    <div>
      <Header />
      <About />
      <Goals />
      <Technologies />
      {/* <Team /> */}
      <Contact />
    </div>
  )
}