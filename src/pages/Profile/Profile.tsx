import "../pages.scss";
import {
  ProfileHeader,
  MainNavbar,
  ProfileDetails,
  SaveMovieCard,
} from "../../components/index";
import { Row, Col, Container } from "react-bootstrap";

const Profile = () => {
  const movieArray = Array(6)
    .fill(0)
    .map((_, i) => i + 1);

  return (
    <>
      <div className="main-profile container-fluid p-0 position-relative">
        <MainNavbar />
        <ProfileHeader />
        <ProfileDetails />
        <Container className="mt-5">
          <Row>
            {movieArray.map((movie, i) => (
              <Col lg={3} md={3} xs={1} key={i}>
                <SaveMovieCard />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Profile;
