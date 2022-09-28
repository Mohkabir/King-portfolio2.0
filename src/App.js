import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageLayout from "./layout/PageLayout";
import Info from "./pages/Info";
import Writting from "./pages/Writting";
import CaseStudy from "./pages/CaseStudy";
import Work from "./pages/Work";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <PageLayout>
                <Home />
              </PageLayout>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
