import { Page } from "./pages/Page/Page";
import "./index.css";
import { PageWrapper } from "./widget/PageWrapper";
import rawDataProducts from "./data/products.json";
import rawPricePlans from "./data/pricePlans.json";
import rawPages from "./data/pages.json";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageWrapper Page={Page} filterField="name" rawData={rawDataProducts} />
    ),
  },
  {
    path: "/products",
    element: (
      <PageWrapper Page={Page} filterField="name" rawData={rawDataProducts} />
    ),
  },
  {
    path: "/price-plans",
    element: (
      <PageWrapper Page={Page} filterField="description" rawData={rawPricePlans} />
    ),
  },
  {
    path: "/pages",
    element: (
      <PageWrapper Page={Page} filterField="title" rawData={rawPages} />
    ),
  },
]);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
