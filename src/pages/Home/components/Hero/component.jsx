import { useRef } from "react";
import "./style.css";
import Container from "../../../../components/Container";
import Button from "../../../../components/Button";
import useFadeIn from "../../../../hooks/useFadeIn";

export default function Hero() {
  const tagRef = useRef();
  const headingRef = useRef();
  const venueRef = useRef();
  const registerRef = useRef();
  const imgRef = useRef();

  const tagClassName = useFadeIn(tagRef, { direction: "up", delay: "100" });
  const headingClassName = useFadeIn(headingRef, {
    direction: "up",
    delay: "200",
  });
  const venueClassName = useFadeIn(venueRef, { direction: "up", delay: "300" });
  const registerClassName = useFadeIn(registerRef, {
    direction: "up",
    delay: "400",
  });
  const imgClassName = useFadeIn(imgRef, {
    direction: "left",
    delay: "400",
  });

  return (
    <Container>
      <div className="HeroContent">
        <div className="HeroText">
          <span ref={tagRef} className={tagClassName + " Tag "}>
            Celebrating
          </span>
          <h1 ref={headingRef} className={headingClassName + " Heading"}>
            Our Eighth Year<br /> Anniversary
          </h1>
          <span ref={venueRef} className={venueClassName + " Venue"}>
            Series of events every month from Mar 6th.
          </span>
          <Button ref={registerRef} href="/" className={registerClassName}>
            Register Now
          </Button>
        </div>
        <div ref={imgRef} className={imgClassName + " HeroImg"}>
          <div className="Circle Circle__Small" />
          <div className="Circle Circle__Big" />
        </div>
      </div>
    </Container>
  );
}
