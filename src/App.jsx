import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HFLayout from "./layouts/HFLayout";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage";
import AboutPage from "./pages/AboutPage";
import SettingsPage from "./pages/SettingsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HFLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Route>,
  ),
);

export function App() {
  return <RouterProvider router={router} />;
}
export default App;
