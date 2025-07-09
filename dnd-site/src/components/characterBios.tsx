import {
  MDBCard,
  MDBCardText,
  MDBCardTitle,
  MDBContainer,
} from "mdb-react-ui-kit";

export interface characterBiosProps {
  titleText?: string;
  contentField?: string;
}

export default function CharacterBios({
  titleText,
  contentField,
}: characterBiosProps) {
  return (
    <>
      <MDBContainer className="text-light my-4 h-100">
        <MDBCard
          className="text-white"
          style={{ backgroundColor: "rgba(10,10,10,0.5)" }}
        >
          <MDBContainer className="px-5 py-1">
            <MDBCardTitle
              className="fw-bold fs-2 pt-4"
              style={{ fontFamily: "Verdana" }}
            >
              {titleText || "Placeholder Title"}
            </MDBCardTitle>
            <MDBCardText className="fs-4 py-4">{contentField}</MDBCardText>
          </MDBContainer>
        </MDBCard>
      </MDBContainer>
    </>
  );
}
