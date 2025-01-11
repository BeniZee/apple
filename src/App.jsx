
import "./commonResource/css/bootstrap.css"
import "./commonResource/css/styles.css"
import Header from "./components/Header";
import AlertSection from "./components/AlertSection";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import SixthSection from "./components/SixthSection";
import Footer from "./components/Footer";
import YouTube from "./components/youtube/YouTube";


function App() {
  return (
    < >
      < Header />
      <AlertSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      {/* <YouTube /> */}
      <Footer />
    </>
  );
}
export default App;
