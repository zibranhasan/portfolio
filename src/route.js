import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import EduDetails from "./components/EduDetails";
import AllWork from "./components/AllWork";

// In router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edu-details",
    element: <EduDetails />,
  },
  {
    path: "/all-work",
    element: <AllWork />,
  },
]);
export default router;
