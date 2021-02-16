import Container from "../../../../components/Container";
import SectionHeader from "../../../../components/SectionHeader";
import Speaker from "../Speaker";
// import img from "./img.png";
import senthil from "./senthil.jpg";

export default function Speakers() {
  const speakers = [
    {
      align: "left",
      img: senthil,
      name: "Senthil ​Kumar ​M",
      shortName: "Vishnu",
      title: "CEO CO-FOUNDER, Jiovio healthcare",
      description: ['Senthil ​Kumar ​M. ​hails ​from ​Madurai, ​Tamilnadu India ​with ​a ​great ​passion ​for innovating ​through ​technology ​to ​solve ​real-life ​problems. He has ​innovated ​in ​fields ​like wireless ​network, ​defence, ​maternal ​healthcare, ​and ​safety ​solutions ​and ​filed ​nearly ​10 patents ​for ​the ​same.',
      'Beginning his ​career ​as ​an ​engineer ​in ​Samsung ​| ​Qualcomm ​Fortune ​500 companies, ​he ​realised he is destined to be an ​entrepreneur. He ​quit ​his ​job ​to ​found ​two tech ​startups, ​Geomeo ​and ​JioVio, ​in ​urban ​infrastructure ​and ​healthcare ​sector respectively.',
      'He has ​the ​vision ​to ​build ​technology-enabled ​self-sustaining ​communities ​in his ​region. He believes ​that ​we ​can ​achieve ​this ​only ​by ​bridging ​the ​digital ​divide ​in ​ ​society ​and ​by empowering ​the ​powerless and vulnerable.',
      'To ​this ​end, he is actively engaged ​in ​community ​empowerment ​and ​education ​initiatives especially ​among ​girls ​and ​young ​women ​through ​‘MetooMentor’ ​’ ​a ​non-profit organisation ​that ​mentors ​young ​women ​to ​innovate ​through ​technology. ​With ​a handful ​of ​dedicated ​volunteers, ​he ​has ​reached ​around ​1000 ​girls ​in ​Madurai, Tamilnadu. ​Currently, ​this ​community ​development ​initiative ​has ​evolved ​into ​one ​of ​the largest ​physical ​‘Meetup’ ​communities ​in ​Tamilnadu.',
      'He ​has also ​offered ​guest ​lectures ​in ​more ​than ​80 ​higher ​education ​institutes ​in ​India ​and has ​been ​honoured ​as ​the ​top ​5 ​Technology ​Explorers ​in ​India ​by ​Nasscom. ​He ​has ​won several ​‘hackathons’ ​at ​the ​national ​and ​international ​level. ​He has also ​represented ​India ​in ‘Battlemesh ​Research ​Programme ​in ​Europe’. ​At ​present, he is ​exploring ​‘open-source ecosystem’ ​and ​actively ​engaging ​with ​it ​as ​one ​of ​its ​contributors.'],
      social: {},
    },
    // {
    //   align: "right",
    //   img,
    //   name: "Vishnu Haridas",
    //   shortName: "Vishnu",
    //   title: "Web Developer",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima  rchitecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam",
    //   social: {},
    // },
  ];

  return (
    <Container>
      <SectionHeader
        title="Speakers"
        description="Lineup of rockstar speakers! We will begin with Senthil, who is a passionate engineer and an entrepreneur. He will discuss about the role of AI during a pandemic."
      />
      {speakers.map((speaker, index) => (
        <Speaker key={index} {...speaker} />
      ))}
    </Container>
  );
}
