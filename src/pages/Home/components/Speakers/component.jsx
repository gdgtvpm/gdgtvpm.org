import Container from "../../../../components/Container";
import SectionHeader from "../../../../components/SectionHeader";
import Speaker from "../Speaker";
import img from "./img.png";

export default function Speakers() {
  const speakers = [
    {
      align: "left",
      img,
      name: "Vishnu Haridas",
      shortName: "Vishnu",
      title: "Web Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima  rchitecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam",
      social: {},
    },
    {
      align: "right",
      img,
      name: "Vishnu Haridas",
      shortName: "Vishnu",
      title: "Web Developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima  rchitecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam",
      social: {},
    },
  ];

  return (
    <Container>
      <SectionHeader
        title="Speakers"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Minima architecto impedit eaque molestiae dicta quam. Cum ducimus. Culpa distinctio aperiam"
      />
      {speakers.map((speaker, index) => (
        <Speaker key={index} {...speaker} />
      ))}
    </Container>
  );
}
