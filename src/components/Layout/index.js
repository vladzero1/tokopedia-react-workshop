import { node } from "prop-types";
import Footer from "../Footer";
import Topbar from "../Topbar";

const Layout = (props) => {
  const { children } = props;
  
  return (
    <main className="layout">
      <Topbar />
      {children}
      <Footer />
    </main>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
