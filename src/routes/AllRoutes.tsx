import {
  Genres,
  Home,
  Login,
  SignUp,
  Profile,
  ForgotPass,
} from "../pages/index";
import ProtectRoutes from "./ProtectRoutes";
import { Route, Routes } from "react-router-dom";
const AllRoutes = (): any => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/reset-password" element={<ForgotPass />}></Route>
      <Route path="/register" element={<SignUp />}></Route>
      <Route path="/genres" element={<Genres />}></Route>
      <Route
        path="/profile"
        element={
          <ProtectRoutes>
            <Profile />
          </ProtectRoutes>
        }
      ></Route>
    </Routes>
  );
};

export default AllRoutes;
