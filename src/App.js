import { Highlight } from "@material-ui/icons";
import "./App.css";
import Navheader from "./Navbar/Navheader";
import About from "./screens/About";
import Banner from "./screens/Banner";
import Courses from "./screens/Courses";
import Footer from "./screens/Footer";
import Students from "./screens/Students";
import Teachers from "./screens/Teachers";
import Welcome from "./screens/Welcome";
import Whyus from "./screens/Whyus";

function App() {
  return (
    <div>
      <Navheader />
      <Banner />
      <Welcome />
      <Students />
      <Courses />
      <Teachers />

      <Whyus />
      <Footer/>
    </div>
  );
}

export default App;
