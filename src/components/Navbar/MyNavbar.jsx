import { Container, Row } from "react-bootstrap";
import AlertNotice from "./AlertNotice";
import './MyNavbar.css'
import NoticeSection from "./NoticeSection";

const MyNavbar = () => {
  return (
    <Container>
      <Row>
        <AlertNotice/>
        <NoticeSection/>
      </Row>
    </Container>
  );
};

export default MyNavbar;
