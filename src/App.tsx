import React, { Suspense } from "react";
import LoadingScreen from "./Components/LoadingScreen";

import "./styles/main.css";

const Header = React.lazy(() => import("./Components/Header"));
const Works = React.lazy(() => import("./Components/Works"));
const Footer = React.lazy(() => import("./Components/Footer"));

function App() {
  return (
    <>
      <LoadingScreen />
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Works />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
