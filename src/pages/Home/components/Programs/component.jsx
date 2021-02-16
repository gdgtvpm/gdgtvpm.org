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
      time: "10:00",
      am: "AM",
      title: "AI's role in pandemic",
      speakers: ["Senthil ​Kumar"],
    },
    // {
    //   time: "9:30",
    //   am: "AM",
    //   title: "Design your open source strategy",
    //   speakers: ["Chris Mathews"],
    // },
  ];
  const day2programs = [
    {
      time: "10:00",
      am: "AM",
      title: "TBD",
      speakers: ["TBD"],
    },
    // {
    //   time: "10:30",
    //   am: "AM",
    //   title: "Design your UX strategy",
    //   speakers: ["Chris Mathews"],
    // },
  ];
  const day3programs = [
    {
      time: "10:00",
      am: "AM",
      title: "TBD",
      speakers: ["TBD"],
    },
    // {
    //   time: "10:30",
    //   am: "AM",
    //   title: "Design your UX strategy",
    //   speakers: ["Chris Mathews"],
    // },
  ];

  const ref = useRef();
  const refClassName = useFadeIn(ref, {
    threshold: [0.75],
    direction: "up",
    delay: 100,
  });

  const getDay = () => {
    switch(day) {
      case 1:
        return day1programs;
      case 2:
        return day2programs;
      case 3:
        return day3programs;
      default:
        return [];
    }
  }

  return (
    <Container>
      <SectionHeader
        title="Programs"
        description="A virtual event series happening on weekends that you can attend from the comforts of your homes."
      />
      <div ref={ref} className={refClassName + " ProgramDays"}>
        <Button type="button" onClick={() => setDay(1)} selected={day === 1}>
          Mar 6th
        </Button>
        <Button type="button" onClick={() => setDay(2)} selected={day === 2}>
          Apr 3th
        </Button>
        <Button type="button" onClick={() => setDay(3)} selected={day === 3}>
          Next
        </Button>
      </div>
      {getDay().map((item, index) => (
        <Program key={index} {...item} />
      ))}
    </Container>
  );
}
