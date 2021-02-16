import Hero from "./components/Hero";
import Speakers from "./components/Speakers";
import Programs from "./components/Programs";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Programs />
      <Speakers />
      <AboutUs />
    </div>
  );
}
