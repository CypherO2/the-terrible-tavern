import { useEffect } from "react";
import ProfileComp from "../components/ProfileComp";
// import Thumbnail from "../assets/SiteIcon.png";
import { Container, Row } from "react-bootstrap";
import CJAvatar from "../assets/player-avatars/CJ-Avatar.png";
import DioAvatar from "../assets/player-avatars/Dio-Avatar.png";
import NeoAvatar from "../assets/player-avatars/Neo-Avatar.png";
import JayAvatar from "../assets/player-avatars/Jay-Avatar.png";
import DevaAvatar from "../assets/player-avatars/Deva-Avatar.png";
import {
  CJ_CHARACTERS,
  DEVA_CHARACTERS,
  DIO_CHARACTERS,
  ELO_CHARACTERS,
  INTRODUCTIONS,
  JAY_CHARACTERS,
  NEO_CHARACTERS,
  RACC_CHARACTERS,
} from "../constants/characters";

export default function Aboutpage() {
  useEffect(() => {
    document.title = "The Terrible Tavern | About Us";
  });
  return (
    <>
      <Container>
        <Row>
          <ProfileComp
            playerAvatar={CJAvatar}
            playerName="CJ / Cassiopeia"
            playerRole="DM & Player"
            playerIntro={INTRODUCTIONS.CJ} // Added playerIntro prop
            characters={CJ_CHARACTERS} // Updated to use the correct characters constant
          />
          <ProfileComp
            playerAvatar={NeoAvatar}
            playerName="Neo"
            playerRole="Player"
            playerIntro={INTRODUCTIONS.Neo} // Added playerIntro prop
            characters={NEO_CHARACTERS} // Updated to use the correct characters constant
          />
          <ProfileComp
            playerAvatar={JayAvatar}
            playerName="Jay"
            playerRole="DM & Player"
            playerIntro={INTRODUCTIONS.Jay} // Added playerIntro prop
            characters={JAY_CHARACTERS} // Updated to use the correct characters constant
          />
          <ProfileComp
            playerAvatar={CJAvatar}
            playerName="Racc / Raccoon"
            playerRole="DM & Player"
            playerIntro={INTRODUCTIONS.Racc} // Added playerIntro prop
            characters={RACC_CHARACTERS} // Updated to use the correct characters constant
          />
          <ProfileComp
            playerAvatar={CJAvatar}
            playerName="Elo / Eloediel"
            playerRole="Player"
            playerIntro={INTRODUCTIONS.Elo} // Added playerIntro prop
            characters={ELO_CHARACTERS} // Updated to use the correct characters constant
          />
          <ProfileComp
            playerAvatar={DevaAvatar}
            playerName="Deva / Argo"
            playerRole="Player"
            playerIntro={INTRODUCTIONS.Deva} // Added playerIntro prop
            characters={DEVA_CHARACTERS} // Updated to use the correct characters constant
          />
          <ProfileComp
            playerAvatar={DioAvatar}
            playerName="Dio"
            playerRole="Player"
            playerIntro={INTRODUCTIONS.Dio} // Added playerIntro prop
            characters={DIO_CHARACTERS} // Updated to use the correct characters constant
          />
        </Row>
      </Container>
    </>
  );
}
