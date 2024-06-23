import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import HFLayout from "./layouts/HFLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HFLayout />}>
      <Route index element={<LandingPage />} />
    </Route>,
  ),
);

export function App() {
  return <RouterProvider router={router} />;
}
export default App;
