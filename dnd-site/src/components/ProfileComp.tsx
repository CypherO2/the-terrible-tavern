import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import "../css/profile.css";
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
  playerRole: string[];
  playerIntro?: string;
  playerGradient: string;
  characters: Character[];
}

export default function ProfileComp({
  playerAvatar,
  playerName,
  playerRole,
  playerIntro,
  playerGradient,
  characters,
}: profileProps) {
  return (
    <>
      <MDBContainer className="py-3">
        <MDBRow>
          <MDBCol lg="3">
            <MDBCard
              className="py-1"
              style={{
                backgroundImage: "linear-gradient(" + playerGradient + ")",
                borderWidth: "4px",
                borderStyle: "solid",
                borderRadius: "10px",
                border: "4px solid transparent",
                background:
                  "linear-gradient(" + playerGradient + ") border-box",
              }}
              id=""
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
                {(playerRole[1] == undefined && (
                  <div
                    style={{
                      backgroundColor: "rgba(10,10,10,0.5)",
                      borderRadius: "15px",
                    }}
                    className=""
                  >
                    <p className="fs-6 text-light mb-4">{playerRole[0]}</p>
                  </div>
                )) || (
                  <div
                    style={{
                      backgroundColor: "rgba(10,10,10,0.5)",
                      borderRadius: "15px",
                    }}
                    className=""
                  >
                    <p className="fs-6 text-light mb-4">
                      {playerRole[0] + " / " + playerRole[1]}
                    </p>
                  </div>
                )}
                {playerIntro && playerIntro.length > 0 && (
                  <div
                    style={{
                      backgroundColor: "rgba(10,10,10,0.5)",
                      borderRadius: "15px",
                    }}
                    className=""
                  >
                    <p className="text-light mb-4 p-2">{playerIntro}</p>
                  </div>
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
