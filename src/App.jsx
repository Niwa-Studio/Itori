import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HFLayout from "./layouts/HFLayout";
import HeaderLayout from "./layouts/HeaderLayout";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage";
import AboutPage from "./pages/AboutPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CheckoutPage from "./pages/CheckoutPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route element={<HFLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
      <Route element={<HeaderLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Route>
      <Route path="/signup" element={<SignUpPage />} />,
    </Route>,
  ),
);

export function App() {
  return <RouterProvider router={router} />;
}
export default App;
