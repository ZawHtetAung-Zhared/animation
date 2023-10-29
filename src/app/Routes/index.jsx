import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loading from "pages/Loading";
import ChangeLanguage from "./ChangeLanguage.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import ScrollToHash from "./ScrollToHash.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import MainRoutes from "./Main";

const Index = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="*" element={<ScrollToTop />} />
          </Routes>
          <Routes>
            <Route path="" element={<Navigate to="en" />} />
            <Route path="en/*" element={<MainRoutes />} />
            <Route path="pl/*" element={<MainRoutes />} />
            <Route path="*" element={<Navigate to="en" />} />
          </Routes>
          <Routes>
            <Route path="*" element={<ScrollToHash />} />
          </Routes>
          <Routes>
            <Route path="*" element={<ChangeLanguage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default Index;
