import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return ( 
    // add "bg-bkg" below
    <div className="bg-bkg content">
      <Navbar />
      { children }
      {/* <Footer /> */}
    </div>
   );
}
 
export default Layout;