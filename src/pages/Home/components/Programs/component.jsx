import { useState, useRef } from "react";
import Container from "../../../../components/Container";
import SectionHeader from "../../../../components/SectionHeader";
import Button from "../../../../components/Button";
import useFadeIn from "../../../../hooks/useFadeIn";
import "./style.css";

function Program(props) {
  const ref = useRef();

  const refClassName = useFadeIn(ref, {
    threshold: [0.25],
    direction: "up",
    delay: 100,
  });

  return (
    <div ref={ref} className={refClassName + " ProgramItem"}>
      <div className="ProgramTime">
        <span className="ProgramHour">{props.time}</span>{" "}
        <span className="ProgramAM">{props.am}</span>
      </div>
      <div className="ProgramDetails">
        <h3 className="ProgramTitle">{props.title}</h3>
        <span className="ProgramSpeaker">{props.speakers.join(", ")}</span>
      </div>
    </div>
  );
}

export default function Programs() {
  const [day, setDay] = useState(1);
  const day1programs = [
    {
      time: "8:00",
      am: "AM",
      title: "Design your open source strategy",
      speakers: ["Chris Mathews"],
    },
    {
      time: "9:30",
      am: "AM",
      title: "Design your open source strategy",
      speakers: ["Chris Mathews"],
    },
  ];
  const day2programs = [
    {
      time: "9:00",
      am: "AM",
      title: "Design your UX strategy",
      speakers: ["Chris Mathews"],
    },
    {
      time: "10:30",
      am: "AM",
      title: "Design your UX strategy",
      speakers: ["Chris Mathews"],
    },
  ];

  return (
    <Container>
      <SectionHeader
        title="Programs"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi."
      />
      <div className="ProgramDays">
        <Button type="button" onClick={() => setDay(1)} selected={day === 1}>
          Day 1
        </Button>
        <Button type="button" onClick={() => setDay(2)} selected={day === 2}>
          Day 2
        </Button>
      </div>
      {(day === 1 ? day1programs : day2programs).map((item, index) => (
        <Program key={index} {...item} />
      ))}
    </Container>
  );
}
