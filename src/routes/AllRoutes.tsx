import {
  MovieStars,
  Home,
  Login,
  SignUp,
  Profile,
  ForgotPass,
  TopRated,
  Popular,
  TvShows,
  Upcoming,
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
      <Route path="/stars" element={<MovieStars />}></Route>
      <Route path="/top-rated" element={<TopRated />}></Route>
      <Route path="/upcoming" element={<Upcoming />}></Route>
      <Route path="/popular" element={<Popular />}></Route>
      <Route path="/tv-shows" element={<TvShows />}></Route>
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
