// import PortfolioIsotop from "../src/components/isotop/PortfolioIsotop";
import dynamic from "next/dynamic";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const PortfolioIsotop = dynamic(
  () => import("../src/components/isotop/PortfolioIsotop"),
  {
    ssr: false,
  }
);
const Portfolio = () => {
  return (
    <Layout pageName={"Portfolio"}>
      <PageBanner
        pageName={"Portfolio Grid"}
        bgText="Portfolio"
        textAlign={"center"}
      />

      <PortfolioIsotop />
    </Layout>
  );
};
export default Portfolio;
