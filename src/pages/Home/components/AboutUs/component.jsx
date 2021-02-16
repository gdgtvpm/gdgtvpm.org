import { useRef } from "react";
import useFadeIn from "../../../../hooks/useFadeIn";
import Container from "../../../../components/Container";
import SectionHeader from "../../../../components/SectionHeader";
import "./style.css";
import Arun from "./Arun.jpg";
import Remya from "./Remya.jpg";
import Ananya from "./Ananya.jpg";
import Manikandan from "./Manikandan.jpg";
import Vijay from "./Vijay.jpg";

const members = [
  {
    img: Arun,
    name: "Arun Shanker",
    title: "Community Organizer",
  },
  {
    img: Remya,
    name: "Remya P Vava",
    title: "Women Techmakers Ambassador / Community Co-Organizer",
  },
  {
    img: Ananya,
    name: "Ananya Raman Iyer",
    title: "Women Techmakers Ambassador / Community Co-Organizer",
  },
  {
    img: Manikandan,
    name: "Manikandan",
    title: "Assistant Organizer",
  },
  {
    img: Vijay,
    name: "Vijay Dev",
    title: "Assistant Organizer",
  },
];

export default function AboutUs() {
  const imgRef = useRef();
  const imgClassName = useFadeIn(imgRef, { threshold: [0.75], keep: true });

  return (
    <Container>
      <SectionHeader
        title="About Us"
        description="We work as a family! Meet our pillars of strength. The team which puts their heart and soul in making the events happen."
      />
      <div ref={imgRef} className="Member">
        {members.map((item, index) => (
          <div
            key={item.name}
            className={imgClassName + " MemberItem"}
            data-delay={100 * index}
            data-direction={index % 2 ? "up" : "down"}
          >
            <div className="MemberImg">
              <img src={item.img} alt="text" />
            </div>
            <h3 className={imgClassName + " MemberName"}>{item.name}</h3>
            <span className={imgClassName + " MemberTitle"}>{item.title}</span>
          </div>
        ))}
      </div>
    </Container>
  );
}
