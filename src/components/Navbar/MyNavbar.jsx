import { Container, Row } from "react-bootstrap";
import './MyNavbar.css'
import NoticeSection from "./NoticeSection";

const MyNavbar = () => {
  return (
    <Container>
      <Row>
        <NoticeSection/>
      </Row>
    </Container>
  );
};

export default MyNavbar;
