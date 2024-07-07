import Link from "next/link";
import Layout from "../src/layout/Layout";
const E404 = () => {
  return (
    <Layout pageName={"404 Error"}>
      <section className="error-section pt-45 pb-150 rpb-100">
        <div className="container">
          <div className="error-inner text-center wow zoomIn delay-0-2s">
            <img src="assets/images/background/404-error.png" alt="404 Error" />
            <h2>OPPS! This Page Are Can’t Be Found</h2>
            <Link href="/">
              <a className="theme-btn style-six">
                Goto Home <i className="fas fa-long-arrow-alt-right" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default E404;
