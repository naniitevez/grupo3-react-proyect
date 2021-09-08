import "./MyNavbar.css";
// import AlertNotice from "./AlertNotice";
import NoticeSection from "./NoticeSection";
import NavigationBar from "./NavigationBar/NavigationBar";

const MyNavbar = () => {
  return (
    <>
      <div id="navbar-row__container">
        {/* <AlertNotice/> */}
        <NoticeSection />
      </div>
      <NavigationBar/>
    </>
  );
};

export default MyNavbar;
