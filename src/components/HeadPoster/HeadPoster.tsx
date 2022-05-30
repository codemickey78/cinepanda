import "../components.scss";
import movieImg from "../../assets/img/movie-1.jpeg";
import movieImg1 from "../../assets/img/movie-2.jpeg";
import movieImg2 from "../../assets/img/movie-3.jpeg";
import { Carousel } from "react-bootstrap";

const HeadPoster = () => {
  return (
    <div className="main-headposter">
      <Carousel fade controls={false}>
        <Carousel.Item>
          <div className="inner-carousel-img">
            <img className="d-block w-100" src={movieImg} alt="First slide" />
          </div>
          <Carousel.Caption>
            <div className="inner-carousel text-start">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img className="d-block w-100" src={movieImg1} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={movieImg2} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default HeadPoster;
