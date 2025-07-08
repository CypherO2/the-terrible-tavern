import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
} from "mdb-react-ui-kit";
// import { SGATHACH_LINK } from "../constants/mylinks";

export interface RecRepoProps {
  repoTitle?: string;
  repoDesc: string;
  repoButtonText?: string;
  repoLink?: string;
}

export default function RecRepoCard({
  repoDesc,
  repoLink,
  repoTitle,
  repoButtonText,
}: RecRepoProps) {
  return (
    <MDBContainer className="text-light my-4 h-100">
      <MDBCard
        className="text-white"
        style={{ backgroundColor: "rgba(10,10,10,0.5)" }}
      >
        <MDBContainer className="px-5 py-1">
          {repoTitle && repoTitle.length > 0 && (
            <MDBCardTitle
              className="fw-bold fs-2 py-4 mb-3 border-bottom"
              style={{ fontFamily: "Verdana" }}
            >
              {repoTitle}
            </MDBCardTitle>
          )}
          <MDBCardText className="fs-4 py-4">{repoDesc}</MDBCardText>
          {repoLink && repoLink.length > 0 && (
            <a
              className="btn btn-outline-purple btn-lg m-1 fw-bold my-auto"
              href={repoLink}
              style={{ color: "rgb(150,70,150)" }}
              role="button"
            >
              {repoButtonText}
            </a>
          )}
        </MDBContainer>
      </MDBCard>
    </MDBContainer>
  );
}
