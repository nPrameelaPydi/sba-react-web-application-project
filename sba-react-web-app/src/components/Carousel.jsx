import { Carousel } from "react-bootstrap";
//import assets from "../assets";
import image4 from "../assets/image4.jpg";
import image3 from "../assets/image3.jpg";
import image5 from "../assets/image5.jpg";
import image0 from "../assets/image0.jpg";

export default function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image0}
          alt="First slide"
          style={{
            maxWidth: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            margin: "auto",
          }}
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Description for the first slide</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image5}
          alt="Second slide"
          style={{
            maxWidth: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            margin: "auto",
          }}
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Description for the second slide</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          style={{
            maxWidth: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            margin: "auto",
          }}
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Description for the third slide</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
