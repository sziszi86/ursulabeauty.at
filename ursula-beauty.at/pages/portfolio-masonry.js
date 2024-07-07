// import PortfolioMasonryIsotop from "../src/components/isotop/PortfolioMasonryIsotop";
import dynamic from "next/dynamic";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const PortfolioMasonryIsotop = dynamic(
  () => import("../src/components/isotop/PortfolioMasonryIsotop"),
  {
    ssr: false,
  }
);
const PortfolioMasonry = () => {
  return (
    <Layout pageName={"portfolioMasonry"}>
      <PageBanner
        pageName={"Portfolio Masonry"}
        bgText="portfolio"
        textAlign={"center"}
      />
      <PortfolioMasonryIsotop />
    </Layout>
  );
};
export default PortfolioMasonry;
