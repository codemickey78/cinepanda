import { AuthContextProvider } from "./context/AuthContext";
import AllRoutes from "./routes/AllRoutes";
const App = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <AuthContextProvider>
          <AllRoutes />
        </AuthContextProvider>
      </div>
    </>
  );
};

export default App;
