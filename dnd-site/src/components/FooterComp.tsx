import { MDBFooter, MDBContainer, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { SOCIALS } from "../constants/mylinks";

export default function FootComp() {
  return (
    <>
      <MDBFooter
        className="text-center text-white mt-5"
        style={{ backgroundColor: "rgba(68, 43, 10, 0)" }}
      >
        <MDBContainer className="pt-4">
          <section className="my-4">
            {Object.entries(SOCIALS).map(([social, url], index) => (
              <MDBBtn
                rippleColor="dark"
                color="light"
                floating
                size="lg"
                className="text-dark m-1"
                href={url}
                key={index}
                role="button"
              >
                <MDBIcon fab className={"fa-" + social} />
              </MDBBtn>
            ))}
          </section>
        </MDBContainer>

        <div
          className="text-center text-secondary p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        >
          Copyright © 2025 {" | "} Made by{" "}
          <a className="text-light" href="https://CypherO2.github.io/work">
            CJ Presley
          </a>
        </div>
      </MDBFooter>
    </>
  );
}
