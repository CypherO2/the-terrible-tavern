import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import ExperienceText from "./experienceText";

export interface characterProps {
  name: string;
  role: string;
  race: string;
  campaign: string;
  campaignLink?: string;
}

export interface cardProps {
  characters: characterProps[];
}

export default function ExperienceCard({ characters }: cardProps) {
  return (
    <MDBCard
      className="mb-4"
      style={{ backgroundColor: "rgba(10, 10, 10, 0.5)" }}
    >
      <MDBCardBody className="text-light">
        <MDBContainer>
          {characters.map((character, index) => (
            <ExperienceText
              key={index}
              race={character.race}
              name={character.name}
              role={character.role}
              campaign={character.campaign}
              campaignLink={character.campaignLink}
            />
          ))}
        </MDBContainer>
      </MDBCardBody>
    </MDBCard>
  );
}
