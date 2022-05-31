import { Row, Col, ButtonGroup, Button } from "react-bootstrap";
import allImgs from "../../data/dummyData";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const MovieThumbnails = () => {
  return (
    <div className="main-mthumbs mt-3">
      <div className="container py-3">
        <div className="mmthumbs-header mb-3 d-flex justify-content-between align-items-center">
          <h3 className="m-0">Popular Movies</h3>
          <div>
            <ButtonGroup aria-label="Basic example">
              <Button>
                <FaAngleLeft />
              </Button>
              <Button>
                <FaAngleRight />
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <Row className="flex-row flex-nowrap overflow-scroll">
          {allImgs.map((img, index) => (
            <Col lg={2} key={index}>
              <div className="mnt-card position-relative">
                <div className="mnt-card-overlay">
                  <div className="mnt-co-inner">
                      <h4>jakksjdheg</h4>
                  </div>
                </div>
                <img src={img} alt="mov-img" />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MovieThumbnails;
