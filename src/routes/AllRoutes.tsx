import { Genres, Home, Login, SignUp, Profile } from "../pages/index";
import { Route, Routes } from "react-router-dom";
const AllRoutes = (): any => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<SignUp />}></Route>
      <Route path="/genres" element={<Genres />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
};

export default AllRoutes;
