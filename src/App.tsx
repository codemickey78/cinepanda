import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./routes/AllRoutes";
const App = () => {
  return (
    <>
      <div className="container-fluid p-0">
        {/* <Navbar /> */}
        <AllRoutes />
      </div>
    </>
  );
};

export default App;
