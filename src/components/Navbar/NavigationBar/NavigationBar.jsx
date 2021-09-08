import { Navbar, Container } from "react-bootstrap";
import Menu from "./Menu";

const NavigationBar = () => {
  return (
    <Navbar id="navigationBar" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Menu/>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
