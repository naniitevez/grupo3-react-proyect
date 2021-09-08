import './MyNavbar.css'
import AlertNotice from "./AlertNotice";
import NoticeSection from "./NoticeSection";

const MyNavbar = () => {
  return (
    <div id="navbar-row__container">
        <AlertNotice/>
        <NoticeSection/>
    </div>
  );
};

export default MyNavbar;
