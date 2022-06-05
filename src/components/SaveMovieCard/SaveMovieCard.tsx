import "../components.scss";
import sampleImg from "../../assets/img/profilebg.jpg";
import { Button, Badge } from "react-bootstrap";
import { BiBookmarkAltMinus } from "react-icons/bi";

const SaveMovieCard = () => {
  return (
    <div className="savem-card position-relative shadow rounded-5 mb-5">
      <img src={sampleImg} alt="sample-img" />
      <Badge className="position-absolute savem-badge">Info</Badge>
      <div className="savemc-info px-3 pt-2">
        <h6 className="m-0 text-capitalize">the codemickey: all developer</h6>
        <p className="m-0">
          <span>Released</span><div className="vr"></div>
          <span>24/04/2023</span>
        </p>
        <hr />
      </div>
      <div className="d-flex justify-content-end px-3 pb-3">
        <Button className="border-0">
          <BiBookmarkAltMinus />
        </Button>
      </div>
    </div>
  );
};

export default SaveMovieCard;
