import "./styles/main.css";
import Header from "./Components/Header";
import Works from "./Components/Works";
import Footer from "./Components/Footer";
import LoadingScreen from "./Components/LoadingScreen";

function App() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <Works />
      <Footer />
    </>
  );
}

export default App;
