import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import MainBanner from "../components/BannerComp";
import GroupTitle from "../assets/Group_Title.png";
import RecRepoCard from "../components/RecommendedRepoCard";
import LatestEpisode from "../components/latestEpisode";

export default function Homepage() {
  useEffect(() => {
    document.title = "The Terrible Tavern | Home";
  });
  return (
    <>
      <MainBanner titleText={GroupTitle} />
      <Container>
        <Row>
          <RecRepoCard
            repoTitle="Welcome to The Terrible Tavern!"
            repoDesc="A TTRPG podcast like no other! A wild crew of mostly Forever GMs finally gets out from behind the screen and into the player seat, taking turns crafting campaigns across systems like D&D 5E, Candela Obscura, Daggerheart, Call of Cthulhu, and more. But the fun doesn’t stop at the table—expect post-session talks, Reddit reads, gaming streams, and wild side quests. Join us as we tell the stories we’ve been waiting to share. Pull up a chair and give us a shot at your next favorite listen!"
          />
        </Row>
        <Row>
          <LatestEpisode
            compTitle="Nexoria : Age of Return"
            episodeLink="https://open.spotify.com/embed/episode/"
          />
        </Row>
        {/* <Row>
          <QuoteComp quoteText="The Terrible Tavern is an amazing Podcast" quoteAuthor="Anon #1" />
        </Row> */}
      </Container>
    </>
  );
}
