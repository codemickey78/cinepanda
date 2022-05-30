import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectRoutes = ({ children }: any) => {
  const { user }: any = UserAuth();

  if (!user) {
    // return <Navigate to='/' />;
  } else {
    return children;
  }
};

export default ProtectRoutes;
