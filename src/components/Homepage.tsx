import Carousel from "react-bootstrap/Carousel";

const Homepage = function () {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQZhXQzwKSAit3oIk_9Se8fW37rGRUmHuoQ&usqp=CAU"
          alt="meteo"
          className="w-100"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQZhXQzwKSAit3oIk_9Se8fW37rGRUmHuoQ&usqp=CAU"
          alt="meteo"
          className="w-100"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQZhXQzwKSAit3oIk_9Se8fW37rGRUmHuoQ&usqp=CAU"
          alt="meteo"
          className="w-100"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Homepage;
