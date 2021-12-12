import Footer from "./footer";
import Meta from "./meta";
import Alert from "./alert";
import {FunctionComponent} from "react";

const Layout: FunctionComponent = ({children}) => (
  <>
    <Meta/>
    <div className="min-h-screen">
      <Alert/>
      <main>{children}</main>
    </div>
    <Footer/>
  </>
);
export default Layout