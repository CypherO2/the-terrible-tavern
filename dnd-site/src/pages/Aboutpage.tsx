import { useEffect } from "react";
import ProfileComp from "../components/ProfileComp";
// import Thumbnail from "../assets/SiteIcon.png";
import { Container, Row } from "react-bootstrap";
import { PLAYER_INFO } from "../constants/characters";

export default function Aboutpage() {
  useEffect(() => {
    document.title = "The Terrible Tavern | About Us";
  });
  return (
    <>
      <Container>
        <Row>
          {PLAYER_INFO.map((player, index) => (
            <ProfileComp
              playerAvatar={player.playerAvatar}
              playerName={player.playerName}
              playerRole={player.playerRole}
              playerIntro={player.playerIntro}
              playerGradient={player.playerGradient}
              characters={player.playerCharacters}
              key={index}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}
