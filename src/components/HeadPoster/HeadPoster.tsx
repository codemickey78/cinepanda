import "../components.scss";
import movieImg from "../../assets/img/movie-1.jpeg";
import movieImg1 from "../../assets/img/movie-2.jpeg";
import movieImg2 from "../../assets/img/movie-3.jpeg";
import movieImg3 from "../../assets/img/movie-4.jpeg";
import { Carousel, Button } from "react-bootstrap";
import { RiMovie2Fill, RiHeart3Line } from "react-icons/ri";

const HeadPoster = () => {
  const headMovies = [movieImg3, movieImg1, movieImg2, movieImg];

  return (
    <div className="main-headposter">
      <Carousel fade controls={false}>
        {headMovies.map((img, index) => (
          <Carousel.Item key={index}>
            <div className="inner-carousel-img">
              <img className="d-block w-100" src={img} alt="First slide" />
            </div>
            <Carousel.Caption>
              <div className="inner-carousel text-start">
                <h3 className="mb-3 text-capitalize">
                  Expand The Shawshank Redemption (1994)
                </h3>
                <div className="d-flex justify-content-start align-items-center mb-3">
                  <span className="badge text-bg-light">Documentary</span>
                  <div className="vr"></div>
                  <span className="badge text-bg-light">2h39mins</span>
                  <div className="vr"></div>
                  <span className="badge text-bg-light">3rd June, 2021</span>
                  <div className="vr"></div>
                  <span className="badge text-bg-light">Released</span>
                </div>
                <p className="m-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, saepe quia labore iure repellendus culpa! Distinctio
                  hic deserunt inventore, nobis minus suscipit dicta accusantium
                  deserunt inventore, nobis minus suscipit dicta accusantium
                  pariatur?
                </p>
                <div className="d-flex gap-3 mt-3">
                  <Button className="border-0 btn-watch btn-md rounded-5">
                    <RiMovie2Fill /> <span>Watch Now</span>
                  </Button>
                  <Button className="border-0 btn-md btn-addfav">
                    <RiHeart3Line />
                    <span>Add to Favorites</span>
                  </Button>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeadPoster;
