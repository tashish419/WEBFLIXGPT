import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Browse from "./components/Browse";

function App() {
  const appRouter =   createBrowserRouter([
    {
       path: "/",
       element: <Body/>
    },
    // {
    //   path: "/login",
    //   element: <Login/>
    // },
    {
        path: "/Browse",
        element: <Browse/>
    }
  ])
  return (
    <RouterProvider router={appRouter}/>
  );
};

export default App;