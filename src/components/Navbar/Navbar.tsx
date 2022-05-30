import { UserAuth } from "../../context/AuthContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { userState, logOutUser }: any = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOutUser();
      navigate("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h6>Navbar</h6>
      {userState?.email && (
        <>
          <div>{JSON.stringify(userState)}</div>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      )}
    </div>
  );
};

export default Navbar;
