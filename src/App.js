import { Container } from "react-bootstrap";
import InstagramCarousel from "./components/Carousel/InstagramCarousel";
import MyNavbar from "./components/Navbar/MyNavbar";

function App() {
  return (
    <Container id="container-principal" fluid>
      <MyNavbar />
        <InstagramCarousel />
    </Container>
  );
}

export default App;
