import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Home1ProjectIsotop = () => {
  // Isotope
  const isotope = useRef();
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-active", {
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
  return (
    <section className="project-section pt-170 rpt-110 pb-150 rpb-100">
      <div className="container">
        <div className="row align-items-end project-active">
          <div className="item col-md-4 col-sm-6">
            <div className="project-item mt-140 wow fadeInUp delay-0-2s">
              <img src="assets/images/projects/project-1.jpg" alt="Feature" />
              <div className="project-content">
                <h5>
                  <Link href="/portfolio-details">
                    Girls Face Beauty Treatments
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="item col-md-4 col-sm-6">
            <div className="project-item wow fadeInUp delay-0-4s">
              <img src="assets/images/projects/project-3.jpg" alt="Feature" />
              <div className="project-content">
                <h5>
                  <Link href="/portfolio-details">
                    Girls Face Beauty Treatments
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="item col-md-4 col-sm-6">
            <div className="project-item mt-75 ml-lg-auto wow fadeInUp delay-0-6s">
              <img src="assets/images/projects/project-5.jpg" alt="Feature" />
              <div className="project-content">
                <h5>
                  <Link href="/portfolio-details">
                    Girls Face Beauty Treatments
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="item col-md-4 col-sm-6">
            <div className="project-item mb-80 wow fadeInUp delay-0-2s">
              <img src="assets/images/projects/project-4.jpg" alt="Feature" />
              <div className="project-content">
                <h5>
                  <Link href="/portfolio-details">
                    Girls Face Beauty Treatments
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="item col-md-4 col-sm-6">
            <div className="project-item ml-lg-auto wow fadeInUp delay-0-4s">
              <img src="assets/images/projects/project-6.jpg" alt="Feature" />
              <div className="project-content">
                <h5>
                  <Link href="/portfolio-details">
                    Girls Face Beauty Treatments
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="item col-md-4 col-sm-6">
            <div className="project-item wow fadeInUp delay-0-6s">
              <img src="assets/images/projects/project-2.jpg" alt="Feature" />
              <div className="project-content">
                <h5>
                  <Link href="/portfolio-details">
                    Girls Face Beauty Treatments
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="item col-lg-12">
            <div className="project-btn text-center">
              <Link href="/portfolio">
                <a className="theme-btn">
                  view more <i className="fas fa-long-arrow-alt-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home1ProjectIsotop;
