import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "pages/SampleHeader";

const Sample = lazy(() => import("pages/Sample"));
const Sample2 = lazy(() => import("pages/Sample2"));

const Index = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="*" element={<Sample />} />
        <Route path="one" element={<Sample />} />
        <Route path="two" element={<Sample2 />} />
      </Routes>
    </main>
  );
};

export default Index;
