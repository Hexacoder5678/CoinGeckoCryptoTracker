import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../Home/Layout";
import PageLoader from "../PageLoader/PageLoader";
import CustomErrorBoundaryUI from "../ErrorBoundary/ErrorBoundary";

const Home = lazy(() => import("../Home/Home"));
const CoinDetailsPage = lazy(() => import("../Home/CoinDetailsPage"));

function Routing() {
  return (
    <CustomErrorBoundaryUI>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="details/:coinId"
            element={
              <Suspense fallback={<PageLoader />}>
                <CoinDetailsPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </CustomErrorBoundaryUI>
  );
}

export default Routing;
