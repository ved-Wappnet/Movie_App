import Navbar from "../Navbar";
import Footer from "../Footer";
import Sidebar from "./Sidebar";

const Outer = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Outer;
