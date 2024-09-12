import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

function App() {
  const router = createBrowserRouter(
    [
      { path: "/", element: <Header /> },
      { path: "destination", element: <Destination /> },
      { path: "crew", element: <Crew /> },
      { path: "technology", element: <Technology /> },
    ],
    { basename: "https://github.com/Maryam1982/Frontend-Mentor-Space-Tourism" }
  );
  return <RouterProvider router={router} />;
}

export default App;
