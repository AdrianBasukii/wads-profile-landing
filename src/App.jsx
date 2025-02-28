import {Navigate,RouterProvider,createBrowserRouter,} from "react-router-dom"
import Homepage from "./pages/Homepage.jsx"
import ToDoListPage from "./pages/ToDoListPage.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" replace/>,
    },
    {
      path: "/home",
      element: <Homepage/>,
    },
    {
      path: "/todolist",
      element: <ToDoListPage/>,
    },
    {
      path: "/profile",
      element: <Profile/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
