import Head from "next/head";
import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";
const Layout = ({
  pageName,
  children,
  header,
  noSidebar,
  noFooter,
  noHeader,
}) => {
  useEffect(() => {
    animation();
    return () => {
      niceSelect();
    };
  }, []);

  return (
    <Fragment>
      <Head>
        {/* <!--====== Title ======--> */}
        <title>Lezar - Beauty Salon React NextJS Template || {pageName}</title>
        {/* <!--====== Favicon Icon ======--> */}
        <link
          rel="shortcut icon"
          href="assets/images/favicon.png"
          type="image/x-icon"
        />
        {/* <!--====== Google Fonts ======--> */}

        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>{" "}
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        {/* main header */}
        {!noHeader && <Header header={header} />}
        {children}
        {/* Footer Area Start */}
        {!noFooter && <Footer />}
        {/* Footer Area End */}
      </div>
      <ScrollTop />
    </Fragment>
  );
};
export default Layout;
