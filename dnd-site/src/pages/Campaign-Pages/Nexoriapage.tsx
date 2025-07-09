import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import MainBanner from "../../components/BannerComp";
import NexoriaBanner from "../../assets/Nexoria.png";
import RecRepoCard from "../../components/RecommendedRepoCard";
import { NEXORIA_OVERVIEW } from "../../constants/campaign-overviews";

import LatestEpisode from "../../components/latestEpisode";

export default function NexoriaPage() {
  useEffect(() => {
    document.title = "The Terrible Tavern | Nexoria Campaign";
  });
  return (
    <>
      <Container className="my-5">
        <MainBanner titleText={NexoriaBanner} />
        <RecRepoCard repoDesc="*A new episode every other XXXDay" />
        <RecRepoCard
          repoTitle="Campaign Overview"
          repoDesc={NEXORIA_OVERVIEW.desc}
        />
        <Row>
          <LatestEpisode
            compTitle="Nexoria : Age of Return"
            episodeLink="https://open.spotify.com/embed/episode/"
          />
        </Row>
      </Container>
    </>
  );
}
