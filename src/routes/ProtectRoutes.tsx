import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectRoutes = ({ children }: any) => {
  const mainNavigate = useNavigate();
  const { user }: any = UserAuth();

  if (!user) {
    return mainNavigate('/login')
  } else {
    return children;
  }
};

export default ProtectRoutes;
