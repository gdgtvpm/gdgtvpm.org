import { useEffect, useState } from "react";
import "./style.css";

export default function useFadeIn(ref, { threshold, direction, delay, keep }) {
  let dir = "";

  switch (direction) {
    case "left":
      dir = "FadeIn__Left";
      break;
    case "right":
      dir = "FadeIn__Right";
      break;
    case "up":
      dir = "FadeIn__Up";
      break;
    case "down":
      dir = "FadeIn__Down";
      break;
    default:
      break;
  }
  const time = ["100", "200", "300", "400", "500"].includes(delay)
    ? `FadeIn__${delay}`
    : "";

  const [visible, setVisible] = useState(false);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true) setVisible(true);
      },
      { threshold: threshold || [0.25] }
    );
    const onTransitionEnd = () => setClear(true);

    observer.observe(el);
    if (!keep) el.addEventListener("transitionend", onTransitionEnd, false);

    return () => {
      observer && observer.disconnect && observer.disconnect();
      if (!keep) el && el.removeEventListener("transitionend", onTransitionEnd);
    };
  }, [ref, threshold, keep]);

  return clear ? "" : `FadeIn ${dir} ${time} ${visible ? "FadeIn__Init" : ""}`;
}
