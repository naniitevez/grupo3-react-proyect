import { NavDropdown } from "react-bootstrap";

const MyDropDown = ({ title, action1, action2, action3, action4 }) => {
  return (
    <NavDropdown title={title} id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">{action1}</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">{action2}</NavDropdown.Item>
      {action3 && (
        <>
          <NavDropdown.Item href="#action/3.3">{action3}</NavDropdown.Item>

          {
            action4 &&
            <>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">{action4}</NavDropdown.Item>
            </>
          }
        </>
      )}
    </NavDropdown>
  );
};

export default MyDropDown;
