import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./layout/PageLayout";
import Info from "./pages/Info";
import Writting from "./pages/Writting";
import CaseStudy from "./pages/CaseStudy";
import Work from "./pages/Work";
import Kompare from "./pages/Kompare";
import Taeillo from "./pages/Taeillo";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
              </div>
            }
          />
          <Route
            path="/info"
            element={
              <PageLayout>
                <Info />
              </PageLayout>
            }
          />
          <Route
            path="/Writting"
            element={
              <PageLayout>
                <Writting />
              </PageLayout>
            }
          />
          <Route
            path="/Work"
            element={
              <PageLayout>
                <Work />
              </PageLayout>
            }
          />
          <Route
            path="/case-study/:id"
            element={
              <PageLayout>
                <CaseStudy />
              </PageLayout>
            }
          />
          <Route
            path="/case-study/kompare"
            element={
              <PageLayout>
                <Kompare />
              </PageLayout>
            }
          />
          <Route
            path="/case-study/taeillo"
            element={
              <PageLayout>
                <Taeillo />
              </PageLayout>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
