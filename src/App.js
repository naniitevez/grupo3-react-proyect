import { Container } from "react-bootstrap";
import InstagramCarousel from "./components/Carousel/InstagramCarousel";
import MyNavbar from "./components/Navbar/MyNavbar";
import SorpresaContainer from "./components/Sorpresa/SorpresaContainer";
import "./App.css";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import WhyChooseText from "./components/WhyChoose/WhyChooseText";
import {
  faTshirt,
  faCoffee,
  faFont,
  faPalette,
  faHippo,
} from "@fortawesome/free-solid-svg-icons";
import BannerPrincipal from "./components/BannerPrincipal/BannerPrincipal";

function App() {
  return (

    <Container fluid>
      <MyNavbar />
      <BannerPrincipal />
      <SorpresaContainer />

      <div>
        <WhyChoose />
      </div>
      <div className="why-columns">
        <WhyChooseText
          icon={faTshirt}
          title="Descubra nuevos colores y formas"
          texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nisi debitis pariatur ex doloremque! Aliquid aliquam eum aperiam? Illo, deserunt sit provident aliquid accusantium qui fugiat cumque magni officiis quo. "
        />
        <WhyChooseText
          icon={faCoffee}
          title="Hagalo desde su casa"
          texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nisi debitis pariatur ex doloremque! Aliquid aliquam eum aperiam? Illo, deserunt sit provident aliquid accusantium qui fugiat cumque magni officiis quo. "
        />
        <WhyChooseText
          icon={faFont}
          title="Todo tipo de letras"
          texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nisi debitis pariatur ex doloremque! Aliquid aliquam eum aperiam? Illo, deserunt sit provident aliquid accusantium qui fugiat cumque magni officiis quo. "
        />
        <WhyChooseText
          icon={faPalette}
          title="Todo tipo de colores"
          texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nisi debitis pariatur ex doloremque! Aliquid aliquam eum aperiam? Illo, deserunt sit provident aliquid accusantium qui fugiat cumque magni officiis quo. "
        />
        <WhyChooseText
          icon={faHippo}
          title="Toda la serie Animal Print"
          texto="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nisi debitis pariatur ex doloremque! Aliquid aliquam eum aperiam? Illo, deserunt sit provident aliquid accusantium qui fugiat cumque magni officiis quo. "
        />
      </div>
        <InstagramCarousel />

    </Container>
  );
}

export default App;
