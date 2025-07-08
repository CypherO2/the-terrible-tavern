import { MDBContainer } from "mdb-react-ui-kit";
import { Row } from "react-bootstrap";
import { useEffect } from "react";
import MainBanner from "../components/BannerComp";
// import QuoteComp from "../components/QuoteComp";
import GroupTitle from "../assets/Group_Title.png";
import RecRepoCard from "../components/RecommendedRepoCard";

export default function Homepage() {
  useEffect(() => {
    document.title = "The Terrible Tavern | Home";
  });
  return (
    <>
      <MainBanner titleText={GroupTitle} />
      <MDBContainer>
        <Row>
          <RecRepoCard
            repoTitle="What is the Terrible Tavern?"
            repoDesc="The Terrible Tavern is a group of friends who play Dungeons and Dragons together. We rotate between campaigns and GMs, and we would love to share our many adventures with the world - like a story told by weary adventurers over a pint of aged Ale. Join us as we explore the many worlds, locales and face foes great and many. We hope you enjoy our stories as much as we do."
          />
        </Row>
      </MDBContainer>
    </>
  );
}
