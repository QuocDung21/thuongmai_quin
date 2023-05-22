import { Carousel } from "antd";
import pn1 from "../img/panel.jpg";
import pn2 from "../img/panel1.jpg";
import pn3 from "../img/panel2.png";
import pn4 from "../img/panel3.png";
import "./Slider.css"
const contentStyle = {
  height: "600px",
  color: "#fff",
  textAlign: "center",
};
const Slidebar = () => (
  <Carousel autoplay autoplaySpeed={3000}>
    <div>
      <div style={contentStyle}>
        <img src={pn4} class="w-full"/>
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <img src={pn1} class="w-full"/>
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <img src={pn2} class="w-full"/>
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <img src={pn3} class="w-full"/>
      </div>
    </div>
  </Carousel>
);
export default Slidebar;
