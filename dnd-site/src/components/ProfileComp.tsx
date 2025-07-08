import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

import ExperienceCard from "./ExperienceCard.tsx";

export interface Character {
  name: string;
  role: string;
  race: string;
  campaign: string;
  campaignLink?: string;
}

export interface profileProps {
  playerAvatar: string;
  playerName: string;
  playerRole: string;
  playerIntro?: string;
  characters: Character[];
}

export default function ProfileComp({
  playerAvatar,
  playerName,
  playerRole,
  playerIntro,
  characters,
}: profileProps) {
  return (
    <>
      <MDBContainer className="py-3">
        <MDBRow>
          <MDBCol lg="3">
            <MDBCard
              style={{ backgroundColor: "rgba(10,10,10,0.5)" }}
              className="py-1"
            >
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={playerAvatar}
                  alt="avatar"
                  className="rounded-circle m-2"
                  style={{ width: "120px" }}
                  fluid
                />
                <h4 className="text-light mb-1 fw-bold">{playerName}</h4>
                <p className="fs-6 text-light mb-4">{playerRole}</p>
                {playerIntro && playerIntro.length > 0 && (
                  <p className="text-light mb-4">{playerIntro}</p>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBRow>
              <ExperienceCard characters={characters} />
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
