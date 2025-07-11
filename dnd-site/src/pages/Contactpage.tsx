import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import GroupTitle from "../assets/Group_Title.png";
import MainBanner from "../components/BannerComp";

export default function ContactPage() {
  useEffect(() => {
    document.title = "The Terrible Tavern | Contact Us";
  });
  return (
    <>
      <MainBanner titleText={GroupTitle} />
      <Container>
        <Row>
          <h1 className="text-white fw-bold text-center py-2 border border-warning rounded-pill" style={{backgroundColor: "rgba(216, 178, 10, 0.5)"}}>NOTICE:</h1>
          <h3 className="text-white fw-bold text-center pb-2">
            Page Under Construction
          </h3>
        </Row>
      </Container>
    </>
  );
}
