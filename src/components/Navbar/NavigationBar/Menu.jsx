import { Navbar, Nav } from "react-bootstrap";
import IconsSection from "./IconsSection";
import MyDropDown from "./MyDropDown";

const Menu = () => {
  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <MyDropDown
          title="Occasions"
          action1="uno"
          action2="dos"
        />
        <MyDropDown
          title="All Categories"
          action1="uno"
          action2="dos"
          action3="tres"
          action4="cuatro"
        />
        <MyDropDown
          title="Gifts & Bundles"
          action1="uno"
          action2="dos"
          action3="tres"
        />
        <Nav.Link href="#home">Our Brands</Nav.Link>
        <Nav.Link href="#link">About Us</Nav.Link>
      </Nav>
      <IconsSection/>
    </Navbar.Collapse>
  );
};

export default Menu;
