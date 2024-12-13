import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./Rootlayout";
import Home from "./Components/home/Home";
import UserProfile from "./Components/userProfile/UserProfile";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "",
      element: <Rootlayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path:'userProfile',
          element:<UserProfile />,
        }
      ],
    },
  ]);

  return (
    <div className="main">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;