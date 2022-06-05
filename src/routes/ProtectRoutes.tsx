import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectRoutes = ({ children }: any) => {
  const { userState }: any = UserAuth();

  if (!userState) {
    console.log(userState);
    
    return <Navigate to='/login' />
  } else {
    console.log(userState);
    return children;
  }
};

export default ProtectRoutes;
