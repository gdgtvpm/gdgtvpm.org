import { useRef } from "react";
import useFadeIn from "../../hooks/useFadeIn";
import './style.css';

export default function SectionHeader(props) {
  const headingRef = useRef();
  const descripRef = useRef();

  const headingClassName = useFadeIn(headingRef, {
    direction: "up",
    delay: "100",
  });
  const descripClassName = useFadeIn(descripRef, {
    direction: "up",
    delay: "300",
  });

  return (
    <div className="SectionHeader">
      <h2 ref={headingRef} className={headingClassName + " SectionHeading"}>{props.title}</h2>
      <p ref={descripRef} className={descripClassName + " SectionDescription"}>{props.description}</p>
    </div>
  );
}
