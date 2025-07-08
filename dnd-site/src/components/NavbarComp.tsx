import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
} from "mdb-react-ui-kit";
import { useState } from "react";
import Logo from "../assets/TTT_Logo.png.png";
import {
  CONTACT_PATH,
  DS_DARKLESS_PATH,
  NEXORIA_PATH,
} from "../constants/paths";

export default function NavComp() {
  const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState(false);
  return (
    <>
      <header style={{ paddingLeft: 0, fontSize: "1.2rem" }}>
        <MDBNavbar
          expand="lg"
          light
          style={{
            backgroundColor: "rgb(10,10,10,0)",
          }}
        >
          <MDBContainer className="fw-bold" style={{ fontFamily: "monospace" }}>
            <MDBNavbarBrand href="#/">
              <img
                src={Logo}
                alt="logo for site"
                className="px-auto mx-auto d-block"
                style={{ width: "90px" }}
              />
            </MDBNavbarBrand>
            <MDBNavbarToggler
              type="button"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpenNavNoTogglerSecond(!openNavNoTogglerSecond)}
            >
              <MDBIcon fas className="fa-bars text-light" />
            </MDBNavbarToggler>
            <MDBCollapse navbar open={openNavNoTogglerSecond}>
              <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                <MDBNavbarItem className="px-2">
                  <MDBNavbarLink
                    active
                    className="text-light"
                    aria-current="page"
                    href="#/"
                  >
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem className="px-2">
                  <MDBNavbarLink active className="text-light" href="#/about">
                    About
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem className="px-2">
                  <MDBDropdown>
                    <MDBDropdownToggle
                      tag="a"
                      className="nav-link text-light"
                      role="button"
                    >
                      On-Going
                    </MDBDropdownToggle>
                    <MDBDropdownMenu
                      style={{ backgroundColor: "rgba(10, 10, 10, 0.5)" }}
                    >
                      <MDBDropdownItem href={"#" + NEXORIA_PATH} link>
                        <span className="text-secondary fw-bold">
                          Nexoria: AoR
                        </span>
                      </MDBDropdownItem>
                      <MDBDropdownItem href={"#" + DS_DARKLESS_PATH} link>
                        <span className="text-secondary fw-bold">
                          Dark Souls : AoD
                        </span>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
                <MDBNavbarItem className="px-2">
                  <MDBNavbarLink
                    active
                    className="text-light"
                    aria-current="page"
                    href={"#" + CONTACT_PATH}
                  >
                    Contact
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </header>
    </>
  );
}
