import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import GroupTitle from "../assets/Group_Title.png";
import MainBanner from "../components/BannerComp";

export default function UnknownPage() {
  useEffect(() => {
    document.title = "The Terrible Tavern | Error 404";
  });
  return (
    <>
      <MainBanner titleText={GroupTitle} />
      <Container>
        <Row>
          <h1 className="text-white fw-bold text-center pt-2">Error 404:</h1>
          <h3 className="text-white fw-bold text-center pb-2">
            Page Not Found
          </h3>
        </Row>
      </Container>
    </>
  );
}
