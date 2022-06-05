import { FiEdit } from "react-icons/fi";
import "../components.scss";
import { Button } from "react-bootstrap";

const ProfileDetails = () => {
  return (
    <div className="text-center position-relative prof-details">
      <h6 className="m-0 text-capitalize">code mickey</h6>
      <span className="badge rounded-pill bg-primary">
        codemickey78@gmail.com
      </span>
      <h5 className="m-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
        facilis.
      </h5>
      <Button className="default-primary edit-btn rounded-pill border-0">
        <FiEdit />
         Edit Profile
      </Button>
    </div>
  );
};

export default ProfileDetails;
