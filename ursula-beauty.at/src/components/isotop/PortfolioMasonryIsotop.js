import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const PortfolioMasonryIsotop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-active", {
        itemSelector: ".item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  return (
    <section className="portfolio-section pt-140 rpt-90 pb-120 rpb-80">
      <div className="container">
        <div className="section-title text-center mb-45">
          <span className="bg-text">Case Study</span>
          <span className="sub-title">Photo Gallery</span>
          <h2>Latest Working Projects</h2>
        </div>
        <ul className="portfolio-filter mb-70">
          <li
            data-filter="*"
            className={`c-pointer ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
          >
            Show All
          </li>
          <li
            className={`c-pointer ${activeBtn("beauty")}`}
            onClick={handleFilterKeyChange("beauty")}
            data-filter=".beauty"
          >
            Beauty
          </li>
          <li
            className={`c-pointer ${activeBtn("massage")}`}
            onClick={handleFilterKeyChange("massage")}
            data-filter=".massage"
          >
            Massage
          </li>
          <li
            className={`c-pointer ${activeBtn("spa-foot")}`}
            onClick={handleFilterKeyChange("spa-foot")}
            data-filter=".spa-foot"
          >
            Spa &amp; Foot
          </li>
          <li
            className={`c-pointer ${activeBtn("hair-colors")}`}
            onClick={handleFilterKeyChange("hair-colors")}
            data-filter=".hair-colors"
          >
            Hair Colors
          </li>
          <li
            className={`c-pointer ${activeBtn("treatments")}`}
            onClick={handleFilterKeyChange("treatments")}
            data-filter=".treatments"
          >
            Treatments
          </li>
        </ul>
        <div className="row portfolio-active">
          <div className="col-xl-3 col-lg-4 col-sm-6 item massage treatments">
            <div className="portfolio-item wow fadeInUp delay-0-2s">
              <img src="assets/images/projects/masonry2.jpg" alt="Protfolio" />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 item beauty spa-foot">
            <div className="portfolio-item wow fadeInUp delay-0-4s">
              <img src="assets/images/projects/masonry3.jpg" alt="Protfolio" />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 item treatments">
            <div className="portfolio-item wow fadeInUp delay-0-6s">
              <img src="assets/images/projects/masonry1.jpg" alt="Protfolio" />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 item spa-foot hair-colors">
            <div className="portfolio-item wow fadeInUp delay-0-2s">
              <img src="assets/images/projects/masonry9.jpg" alt="Protfolio" />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 item beauty hair-colors">
            <div className="portfolio-item wow fadeInUp delay-0-4s">
              <img src="assets/images/projects/masonry7.jpg" alt="Protfolio" />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 item massage">
            <div className="portfolio-item wow fadeInUp delay-0-6s">
              <img src="assets/images/projects/masonry8.jpg" alt="Protfolio" />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 item beauty">
            <div className="portfolio-item wow fadeInUp delay-0-2s">
              <img src="assets/images/projects/masonry4.jpg" alt="Protfolio" />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 item spa-foot treatments">
            <div className="portfolio-item wow fadeInUp delay-0-4s">
              <img src="assets/images/projects/masonry6.jpg" alt="Protfolio" />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 item massage">
            <div className="portfolio-item wow fadeInUp delay-0-6s">
              <img src="assets/images/projects/masonry5.jpg" alt="Protfolio" />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PortfolioMasonryIsotop;
