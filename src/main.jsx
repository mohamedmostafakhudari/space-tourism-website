import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
const Root = lazy(() => import("./Root.jsx"));
const Home = lazy(() => import("./pages/Home/index.jsx"));
const Destination = lazy(() => import("./pages/Destination/index.jsx"));
const Crew = lazy(() => import("./pages/Crew/index.jsx"));
const Technology = lazy(() => import("./pages/Technology/index.jsx"));
const ErrorPage = lazy(() => import("./pages/ErrorPage.jsx"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<>Loading app ...</>}>
          <Root />
        </Suspense>
      }
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route
          index
          element={
            <Suspense fallback={<>Loading app ...</>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="destination"
          element={
            <Suspense fallback={<>Loading app ...</>}>
              <Destination />
            </Suspense>
          }
        />
        <Route
          path="crew"
          element={
            <Suspense fallback={<>Loading app ...</>}>
              <Crew />
            </Suspense>
          }
        />
        <Route
          path="technology"
          element={
            <Suspense fallback={<>Loading app ...</>}>
              <Technology />
            </Suspense>
          }
        />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
