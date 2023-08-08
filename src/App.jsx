import { Box } from "@chakra-ui/react";
import "./App.css";
import IntroPage from "./component/IntroPage";
import Navbar from "./component/Navbar";
import AboutPage from "./component/AboutPage";
import SkillPage from "./component/skill";
import Portfolio from "./component/Porfolio";
import ContactPage from "./component/Contact";

function App() {
  return (
    <Box
      width={"full"}
      height={"fit-content"}
      bg={"#000814"}
      px={["0.9rem", "0.4rem", "2rem", "2rem", "10rem"]}>
      <Navbar />
      <IntroPage />
      <AboutPage />
      <SkillPage />
      <Portfolio />
      <ContactPage />
    </Box>
  );
}

export default App;
