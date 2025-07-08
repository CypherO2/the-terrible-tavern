import { useEffect } from "react";
import MainBanner from "../../components/BannerComp";
import { Col, Container, Row } from "react-bootstrap";
import RecRepoCard from "../../components/RecommendedRepoCard";
import DSDarklessBanner from "../../assets/Darkless.png";
import { DARKLESS_OVERVIEW } from "../../constants/campaign-overviews";
import CharacterBios from "../../components/characterBios";

export default function DSDarklessPage() {
  useEffect(() => {
    document.title = "The Terrible Tavern | Darkless Campaign";
  });
  return (
    <>
      <Container className="my-5">
        <MainBanner titleText={DSDarklessBanner} />
        <RecRepoCard repoDesc="" />
        <RecRepoCard
          repoTitle="Campaign Overview"
          repoDesc={DARKLESS_OVERVIEW.desc}
        />
        <Row>
          <Col>
            <CharacterBios />
          </Col>
          <Col>
            <CharacterBios />
          </Col>
        </Row>
      </Container>
    </>
  );
}
