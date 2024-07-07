import Link from "next/link";
import CounterSection from "../src/components/CounterSection";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const Services = () => {
  return (
    <Layout pageName={"Our Services"}>
      <PageBanner
        pageName={"Our Services"}
        bgText="Services"
        textAlign={"center"}
      />
      <section className="services-page pt-140 rpt-90 pb-90 rpb-40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-65">
                <img
                  className="bg-image"
                  src="assets/images/shapes/service-bg.png"
                  alt="Leaf"
                />
                <span className="sub-title">What We Offer</span>
                <h3>
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae consequatur, vel illum qui
                  dolorem eum fugiat quo voluptas nulla pariatur
                </h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="service-item wow fadeInUp delay-0-2s">
                <img src="assets/images/services/service-1.jpg" alt="Service" />
                <div className="service-content">
                  <i className="flaticon-cut" />
                  <h5>
                    <Link href="/service-details">Hair Cutting</Link>
                  </h5>
                  <Link href="/service-details">
                    <a className="read-more">
                      read more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item wow fadeInUp delay-0-4s">
                <img src="assets/images/services/service-2.jpg" alt="Service" />
                <div className="service-content">
                  <i className="flaticon-nail" />
                  <h5>
                    <Link href="/service-details">Nail Polish</Link>
                  </h5>
                  <Link href="/service-details">
                    <a className="read-more">
                      read more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item wow fadeInUp delay-0-6s">
                <img src="assets/images/services/service-3.jpg" alt="Service" />
                <div className="service-content">
                  <i className="flaticon-massage-1" />
                  <h5>
                    <Link href="/service-details">Body Massage</Link>
                  </h5>
                  <Link href="/service-details">
                    <a className="read-more">
                      read more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item wow fadeInUp delay-0-8s">
                <img src="assets/images/services/service-4.jpg" alt="Service" />
                <div className="service-content">
                  <i className="flaticon-relax" />
                  <h5>
                    <Link href="/service-details">Spa &amp; Foot</Link>
                  </h5>
                  <Link href="/service-details">
                    <a className="read-more">
                      read more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item wow fadeInUp delay-1-0s">
                <img src="assets/images/services/service-5.jpg" alt="Service" />
                <div className="service-content">
                  <i className="flaticon-beauty-treatment-1" />
                  <h5>
                    <Link href="/service-details">Hair Colors</Link>
                  </h5>
                  <Link href="/service-details">
                    <a className="read-more">
                      read more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-item wow fadeInUp delay-1-2s">
                <img src="assets/images/services/service-6.jpg" alt="Service" />
                <div className="service-content">
                  <i className="flaticon-liner" />
                  <h5>
                    <Link href="/service-details">Brow Polish</Link>
                  </h5>
                  <Link href="/service-details">
                    <a className="read-more">
                      read more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section End */}
      {/* Counter Section Start */}
      <CounterSection />
      {/* Counter Section End */}
      {/* Popular Services Start */}
      <section className="popular-services rel z-1 py-150 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="service-left rmb-55 wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/services/popular-service.jpg"
                  alt="Services"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="popular-service-wrap wow fadeInRight delay-0-2s">
                <div className="section-title mb-50">
                  <span className="bg-text">offers</span>
                  <span className="sub-title">Popular Service</span>
                  <h2>Beauty Treatments</h2>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-sm-4 col-6 col-small">
                    <Link href="/service-details">
                      <a className="popular-service-item">
                        <i className="flaticon-relax" />
                        <h5>Body Relax</h5>
                      </a>
                    </Link>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-sm-4 col-6 col-small">
                    <Link href="/service-details">
                      <a className="popular-service-item">
                        <i className="flaticon-beauty" />
                        <h5>Facials</h5>
                      </a>
                    </Link>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-sm-4 col-6 col-small">
                    <Link href="/service-details">
                      <a className="popular-service-item">
                        <i className="flaticon-massage" />
                        <h5>Massages</h5>
                      </a>
                    </Link>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-sm-4 col-6 col-small">
                    <Link href="/service-details">
                      <a className="popular-service-item">
                        <i className="flaticon-cbd-oil" />
                        <h5>Oil Therapy</h5>
                      </a>
                    </Link>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-sm-4 col-6 col-small">
                    <Link href="/service-details">
                      <a className="popular-service-item">
                        <i className="flaticon-sauna" />
                        <h5>Sauna</h5>
                      </a>
                    </Link>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-sm-4 col-6 col-small">
                    <Link href="/service-details">
                      <a className="popular-service-item">
                        <i className="flaticon-hair-removal" />
                        <h5>Cosmetology</h5>
                      </a>
                    </Link>
                  </div>
                </div>
                <Link href="/booking">
                  <a className="theme-btn mt-30">
                    make appointment{" "}
                    <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/images/shapes/service-white-leaf.png"
          alt="Shape"
          className="white-leaf"
        />
        <img
          src="assets/images/shapes/service-color-leaf.png"
          alt="Shape"
          className="color-leaf"
        />
        <img
          src="assets/images/shapes/service-circle.png"
          alt="Shape"
          className="circle"
        />
      </section>
      {/* Popular Services End */}
      {/* Video Section Start */}
      <div
        className="video-section-two wow fadeInUp delay-0-2s"
        style={{
          backgroundImage: "url(assets/images/video/service-page-video.jpg)",
        }}
      >
        <a
          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
          className="mfp-iframe video-play"
        >
          <i className="fas fa-play" />
        </a>
      </div>
    </Layout>
  );
};
export default Services;
