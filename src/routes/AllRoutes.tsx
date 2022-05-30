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
      <Route index element={<Home />}></Route>
      <Route path="home" element={<Home />}></Route>
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
      <Route path="*" element={<p>404 not found</p>}></Route>
    </Routes>
  );
};

export default AllRoutes;
