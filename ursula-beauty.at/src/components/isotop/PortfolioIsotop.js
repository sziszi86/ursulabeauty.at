import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PortfolioIsotop = () => {
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
      <div className="container-fluid">
        <div className="section-title text-center mb-45">
          <span className="bg-text">Case Study</span>
          <span className="sub-title">Photo Gallery</span>
          <h2>Latest Working Projects</h2>
        </div>
        <ul className="portfolio-filter mb-55">
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
          <div className="col-xl-3 col-lg-4 col-sm-6 item beauty treatments">
            <div className="portfolio-item wow fadeInUp delay-0-2s">
              <img
                src="assets/images/projects/portfolio1.jpg"
                alt="Protfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 item massage">
            <div className="portfolio-item wow fadeInUp delay-0-4s">
              <img
                src="assets/images/projects/portfolio2.jpg"
                alt="Protfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 item spa-foot">
            <div className="portfolio-item wow fadeInUp delay-0-6s">
              <img
                src="assets/images/projects/portfolio3.jpg"
                alt="Protfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 item beauty treatments">
            <div className="portfolio-item wow fadeInUp delay-0-8s">
              <img
                src="assets/images/projects/portfolio4.jpg"
                alt="Protfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 item massage">
            <div className="portfolio-item wow fadeInUp delay-0-2s">
              <img
                src="assets/images/projects/portfolio5.jpg"
                alt="Protfolio"
              />
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
              <img
                src="assets/images/projects/portfolio6.jpg"
                alt="Protfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 item beauty hair-colors">
            <div className="portfolio-item wow fadeInUp delay-0-6s">
              <img
                src="assets/images/projects/portfolio7.jpg"
                alt="Protfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 item massage">
            <div className="portfolio-item wow fadeInUp delay-0-8s">
              <img
                src="assets/images/projects/portfolio8.jpg"
                alt="Protfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 item spa-foot hair-colors">
            <div className="portfolio-item wow fadeInUp delay-0-2s">
              <img
                src="assets/images/projects/portfolio9.jpg"
                alt="Protfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 item beauty treatments">
            <div className="portfolio-item wow fadeInUp delay-0-4s">
              <img
                src="assets/images/projects/portfolio10.jpg"
                alt="Protfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 item hair-colors">
            <div className="portfolio-item wow fadeInUp delay-0-6s">
              <img
                src="assets/images/projects/portfolio11.jpg"
                alt="Protfolio"
              />
              <div className="portfolio-content">
                <h6>
                  <Link href="/portfolio-details">Beauty &amp; Spa Cream</Link>
                </h6>
                <b>Products Salon</b>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 item spa-foot treatments">
            <div className="portfolio-item wow fadeInUp delay-0-8s">
              <img
                src="assets/images/projects/portfolio12.jpg"
                alt="Protfolio"
              />
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
export default PortfolioIsotop;
