import { useState, useEffect } from "react";
import "./style.css";
import useMedia from "../../hooks/useMedia";

// function MenuItems( {
//   return (
//     <div
//       className={
//         display === "mobile"
//           ? open
//             ? "NavFloating NavFloating__Open"
//             : "NavFloating"
//           : ""
//       }
//     >
//       {display === "mobile" ? (
//         <button className="NavClose" onClick={onClick}>
//           <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//       ) : null}
//       <ul className={display === "mobile" ? "NavMobile" : "NavDekstop"}>
//         <li className="NavActive">
//           <a className="Link" href="/" onClick={onClick}>
//             Home
//           </a>
//         </li>
//         <li>
//           <a className="Link" href="/" onClick={onClick}>
//             Speakers
//           </a>
//         </li>
//         <li>
//           <a className="Link" href="/" onClick={onClick}>
//             About Us
//           </a>
//         </li>
//         <li className="cta">
//           <a className="Link" href="/" onClick={onClick}>
//             Register Now
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

export default function Menu() {
  const display = useMedia(["(min-width: 992px)"], ["desktop"], "mobile");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (display === "desktop" && open) {
      setOpen(false);
    }
  }, [display, open]);

  const onClick = (e, to) => {
    e.preventDefault();
    setOpen(false);

    const el = document.querySelector('#'+to);

    el && el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  return (
    <nav className="Nav">
      {display === "mobile" ? (
        <button className="NavOpen" onClick={() => setOpen(true)}>
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      ) : null}
      <div
        className={
          display === "mobile"
            ? open
              ? "NavFloating NavFloating__Open"
              : "NavFloating"
            : ""
        }
      >
        {display === "mobile" ? (
          <button className="NavClose" onClick={() => setOpen(false)}>
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ) : null}
        <ul className={display === "mobile" ? "NavMobile" : "NavDekstop"}>
          <li>
            <a className="Link" href="#Programs" onClick={(e) => onClick(e, 'Programs')}>
              Programs
            </a>
          </li>
          <li>
            <a className="Link" href="/" onClick={(e) => onClick(e, 'Speakers')}>
              Speakers
            </a>
          </li>
          <li>
            <a className="Link" href="/" onClick={(e) => onClick(e, 'AboutUs')}>
              About Us
            </a>
          </li>
          <li className="cta">
            <a
              className="Link"
              href="https://gdg.community.dev/events/details/google-gdg-thiruvananthapuram-presents-ais-role-during-a-pandemic-by-senthil-kumar-anniversary-event-series-day-1/"
              target="_blank"
              rel="noreferrer"
            >
              Register Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
