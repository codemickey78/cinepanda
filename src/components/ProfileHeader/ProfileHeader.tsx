import "../components.scss";
import profileImg from "../../assets/img/profile.jpeg";

const ProfileHeader = () => {
  return (
    <div className="pro-header position-relative">
      <div className="proh-inner text-center">
        <div className="proh-sub">
          <div className="p-2 rounded-circle">
            <img
              src={profileImg}
              alt="profile-img"
              className="rounded-circle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
