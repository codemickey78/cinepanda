import { MainNavbar, MovieCard } from "../../components/index";
import { Button, Container, Row, Col, Dropdown } from "react-bootstrap";
import "../layout.scss";
import MovieNightOne from "../../assets/img/movies/m6.jpeg";
import MovieNightTwo from "../../assets/img/movies/m8.jpeg";
import MovieNightThree from "../../assets/img/movies/m9.jpeg";
import MovieNightFour from "../../assets/img/movies/m2.jpeg";
import MovieNightFive from "../../assets/img/movies/m1.jpeg";
import MovieNightSix from "../../assets/img/movies/m5.jpeg";
import { allGenres } from "../../data/dummyData";
import { BiFilterAlt } from "react-icons/bi";
import { useState, useEffect } from "react";

const DefaultCategoryView = ({ categoryType }: any) => {
  const [activeGenre, setActiveGenre] = useState({ name: "" });

  const filterMovies = (genre: any): any => {
    setActiveGenre(genre);
  };

  useEffect(() => {
    setActiveGenre(allGenres[0]);
  }, []);

  const allMovies = [
    MovieNightOne,
    MovieNightTwo,
    MovieNightThree,
    MovieNightFour,
    MovieNightFive,
    MovieNightSix,
    MovieNightThree,
    MovieNightFour,
    MovieNightOne,
    MovieNightTwo,
    MovieNightFive,
    MovieNightSix,
    MovieNightOne,
    MovieNightTwo,
    MovieNightThree,
    MovieNightFour,
    MovieNightFive,
    MovieNightSix,
    MovieNightThree,
    MovieNightFour,
    MovieNightOne,
    MovieNightTwo,
    MovieNightFive,
    MovieNightSix,
  ];
  return (
    <>
      <MainNavbar></MainNavbar>
      <div className="phead container-fluid mb-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="w-50">
              {categoryType === "TV Shows" ? (
                <>
                  <h5 className="mb-2">{categoryType}</h5>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, cupiditate tempora. Odio consequuntur
                    repellendus dolorum!
                  </p>
                  <Button>Discover great tv shows</Button>
                </>
              ) : (
                <>
                  <h5 className="mb-2">{categoryType} Movies</h5>
                  <p className="mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, cupiditate tempora. Odio consequuntur
                    repellendus dolorum!
                  </p>
                  <Button>Discover great movies</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="pfilter mb-4 d-flex justify-content-between align-items-center">
          <h5 className="m-0">{activeGenre?.name} Movies</h5>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              <BiFilterAlt />
              <span className="ms-2">Filter Movies</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {allGenres.map((genre, index) => (
                <Dropdown.Item
                  as={Button}
                  onClick={() => {
                    filterMovies(genre);
                  }}
                  key={index}
                >
                  {genre.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Row>
          {allMovies.map((img, index) => (
            <Col lg={2} key={index} className="mb-4">
              <MovieCard image={img} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default DefaultCategoryView;
