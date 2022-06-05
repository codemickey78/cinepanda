import { Container } from "react-bootstrap";
import "../pages.scss";
import { ProfileHeader, MainNavbar } from "../../components/index";

const Profile = () => {
  return (
    <>
      <MainNavbar />
      <ProfileHeader />
    </>
  );
};

export default Profile;
