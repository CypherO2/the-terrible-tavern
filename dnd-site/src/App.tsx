import { Routes, Route } from "react-router-dom";
import NavComp from "./components/NavbarComp";
import {
  ABOUT_PATH,
  UNKNOWN_PATH,
  CONTACT_PATH,
  DS_DARKLESS_PATH,
  INDEX_PATH,
  NEXORIA_PATH,
} from "./constants/paths";
import Homepage from "./pages/Homepage";
import FootComp from "./components/FooterComp";
import Aboutpage from "./pages/Aboutpage";
import ContactPage from "./pages/Contactpage";
import NexoriaPage from "./pages/Campaign-Pages/Nexoriapage";
import DSDarklessPage from "./pages/Campaign-Pages/DSDarklesspage";
import UnknownPage from "./pages/Unknownpage";

export default function App() {
  return (
    <>
      <NavComp />
      <span style={{ backgroundColor: "rgb(10,10,10)" }}>
        <Routes>
          <Route path={INDEX_PATH} element={<Homepage />} />
          <Route path={ABOUT_PATH} element={<Aboutpage />} />
          <Route path={CONTACT_PATH} element={<ContactPage />} />
          <Route path={NEXORIA_PATH} element={<NexoriaPage />} />
          <Route path={DS_DARKLESS_PATH} element={<DSDarklessPage />} />
          <Route path={UNKNOWN_PATH} element={<UnknownPage />} />
          {/* Add other routes here as needed */}
        </Routes>
      </span>
      <FootComp />
    </>
  );
}
