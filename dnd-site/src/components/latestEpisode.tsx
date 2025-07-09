import { MDBCard, MDBCardTitle, MDBContainer } from "mdb-react-ui-kit";
// import { SGATHACH_LINK } from "../constants/mylinks";

export interface episodeProps {
  compTitle: string;
  episodeLink: string;
}

export default function LatestEpisode({
  compTitle,
  episodeLink,
}: episodeProps) {
  return (
    <MDBContainer className="text-light py-3 h-100">
      <MDBCard
        className="text-white"
        style={{ backgroundColor: "rgba(10,10,10,0.5)" }}
      >
        <MDBContainer className="px-5 py-1">
          {compTitle && compTitle.length > 0 && (
            <MDBCardTitle
              className="fw-bold fs-2 pt-4"
              style={{ fontFamily: "Verdana" }}
            >
              {"Latest Episode - " + compTitle}
            </MDBCardTitle>
          )}
          <iframe
            style={{ borderRadius: "12px" }}
            src={episodeLink?.length > 0 ? episodeLink : "https://open.spotify.com/embed/episode/"}
            width="100%"
            height="252"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="my-3"
          ></iframe>
        </MDBContainer>
      </MDBCard>
    </MDBContainer>
  );
}
