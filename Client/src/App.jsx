import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./Rootlayout";
import Home from "./Components/home/Home";
import UserProfile from "./Components/userProfile/UserProfile";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
import Dashboard from "./Components/dashboard/Dashboard";
import Focus from "./Components/focus/Focus";
import Pomodora from "./Components/pomodoro/Pomodora";
import Settimer from "./Components/settimer/Settimer";
import Breathing from "./Components/breathing/Breathing";
import Tictactoe from "./Components/tictactoe/Tictactoe";
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
        },
        {
          path: "dashboard",
          element:<Dashboard />,
         },{
          path:"focus",
          element:<Focus/>,
          children:[
            {
              path:"pomodora",
              element:<Pomodora/>
            },
            {
              path:"settimer",
              element:<Settimer/>
            },
            {
              path:"breathing",
              element:<Breathing/>
            },
            {
              path:"tictactoe",
              element:<Tictactoe/>
            }
          ],

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