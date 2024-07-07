import Link from "next/link";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const Pricing = () => {
  return (
    <Layout pageName={"Pricing"}>
      <PageBanner
        pageName={"Pricing Plan"}
        bgText="Pricing"
        pageTitle={"Pricing Package"}
        textAlign={"center"}
      />
      <section className="pricing-section pricing-page rel z-1 pt-140 rpt-90 mb-120 rmb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10">
              <div className="section-title text-center mb-65">
                <span className="bg-text">Menus</span>
                <span className="sub-title">Pricing Package</span>
                <h2>Spa &amp; Beauty Treatments</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="pricing-wrap wow fadeInLeft delay-0-2s">
                <div className="pricing-item">
                  <i className="flaticon-hot-stone" />
                  <div className="pricing-content">
                    <div className="pricing-title">
                      <h5>Body Treatments</h5>
                      <span className="price">259</span>
                    </div>
                    <p>Sed ut perspiciatis unde omnis.......</p>
                  </div>
                </div>
                <div className="pricing-item">
                  <i className="flaticon-sauna" />
                  <div className="pricing-content">
                    <div className="pricing-title">
                      <h5>Sauna Relax</h5>
                      <span className="price">123</span>
                    </div>
                    <p>Sed ut perspiciatis unde omnis.......</p>
                  </div>
                </div>
                <div className="pricing-item">
                  <i className="flaticon-spa" />
                  <div className="pricing-content">
                    <div className="pricing-title">
                      <h5>Geothermal Spa</h5>
                      <span className="price">352</span>
                    </div>
                    <p>Sed ut perspiciatis unde omnis.......</p>
                  </div>
                </div>
                <div className="pricing-item">
                  <i className="flaticon-diet" />
                  <div className="pricing-content">
                    <div className="pricing-title">
                      <h5>Backbone Therapy</h5>
                      <span className="price">853</span>
                    </div>
                    <p>Sed ut perspiciatis unde omnis.......</p>
                  </div>
                </div>
                <div className="pricing-item">
                  <i className="flaticon-stones" />
                  <div className="pricing-content">
                    <div className="pricing-title">
                      <h5>Professional Care</h5>
                      <span className="price">352</span>
                    </div>
                    <p>Sed ut perspiciatis unde omnis.......</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-wrap wow fadeInRight delay-0-2s">
                <div className="pricing-item">
                  <i className="flaticon-hand-cream" />
                  <div className="pricing-content">
                    <div className="pricing-title">
                      <h5>Hand &amp; Feet</h5>
                      <span className="price">259</span>
                    </div>
                    <p>Sed ut perspiciatis unde omnis.......</p>
                  </div>
                </div>
                <div className="pricing-item">
                  <i className="flaticon-beauty-treatment" />
                  <div className="pricing-content">
                    <div className="pricing-title">
                      <h5>Body Wrap</h5>
                      <span className="price">123</span>
                    </div>
                    <p>Sed ut perspiciatis unde omnis.......</p>
                  </div>
                </div>
                <div className="pricing-item">
                  <i className="flaticon-pedicure" />
                  <div className="pricing-content">
                    <div className="pricing-title">
                      <h5>Aroma Therapy</h5>
                      <span className="price">352</span>
                    </div>
                    <p>Sed ut perspiciatis unde omnis.......</p>
                  </div>
                </div>
                <div className="pricing-item">
                  <i className="flaticon-massage" />
                  <div className="pricing-content">
                    <div className="pricing-title">
                      <h5>Body Relaxation</h5>
                      <span className="price">853</span>
                    </div>
                    <p>Sed ut perspiciatis unde omnis.......</p>
                  </div>
                </div>
                <div className="pricing-item">
                  <i className="flaticon-spa-2" />
                  <div className="pricing-content">
                    <div className="pricing-title">
                      <h5>Professional Care</h5>
                      <span className="price">352</span>
                    </div>
                    <p>Sed ut perspiciatis unde omnis.......</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section End */}
      {/* Services Section Start */}
      <section
        className="pricing-page-services overlay bgs-cover pt-140 pb-120 rpt-90 rpb-70"
        style={{
          backgroundImage: "url(assets/images/background/pricing-page.jpg)",
        }}
      >
        <div className="container">
          <div className="row align-items-end mb-45">
            <div className="col-lg-6">
              <div className="section-title text-white mb-35 wow fadeInLeft delay-0-2s">
                <span className="bg-text">Services</span>
                <span className="sub-title">Our Services</span>
                <h2>Services We Provide For Customers</h2>
              </div>
            </div>
            <div className="col-lg-6 text-lg-right wow fadeInRight delay-0-2s">
              <Link href="/services">
                <a className="theme-btn style-six mb-35">
                  view all category{" "}
                  <i className="fas fa-long-arrow-alt-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="category-item style-two wow fadeInUp delay-0-2s">
                <i className="flaticon-nail" />
                <div className="category-title">
                  <span className="bg-text">Category</span>
                  <h4>
                    <Link href="/service-details">Nail Polish</Link>
                  </h4>
                </div>
                <p>Quis autem velum rese eotate velit esse</p>
                <Link href="/service-details">
                  <a className="read-more">
                    read more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="category-item style-two wow fadeInUp delay-0-4s">
                <i className="flaticon-eyebrow" />
                <div className="category-title">
                  <span className="bg-text">Category</span>
                  <h4>
                    <Link href="/service-details">Brow Polish</Link>
                  </h4>
                </div>
                <p>Quis autem velum rese eotate velit esse</p>
                <Link href="/service-details">
                  <a className="read-more">
                    read more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="category-item style-two wow fadeInUp delay-0-6s">
                <i className="flaticon-hairdresser" />
                <div className="category-title">
                  <span className="bg-text">Category</span>
                  <h4>
                    <Link href="/service-details">Hair Dresser</Link>
                  </h4>
                </div>
                <p>Quis autem velum rese eotate velit esse</p>
                <Link href="/service-details">
                  <a className="read-more">
                    read more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="category-item style-two wow fadeInUp delay-0-8s">
                <i className="flaticon-pedicure" />
                <div className="category-title">
                  <span className="bg-text">Category</span>
                  <h4>
                    <Link href="/service-details">Foot Massage</Link>
                  </h4>
                </div>
                <p>Quis autem velum rese eotate velit esse</p>
                <Link href="/service-details">
                  <a className="read-more">
                    read more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section End */}
      {/* Pricing Section Start */}
      <section className="pricing-section-two rel z-1 pt-140 rpt-90 pb-120 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10">
              <div className="section-title text-center mb-65">
                <span className="bg-text">Pricing</span>
                <span className="sub-title">Pricing Package</span>
                <h2>Pricing Plan For Treatments</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="pricing-item-two wow fadeInUp delay-0-2s">
                <h5>Basic Plan</h5>
                <span className="price">486.96</span>
                <h6>Quis autem veleu repren volutate velit esse</h6>
                <ul className="list-style-three">
                  <li>Relaxation Massages</li>
                  <li>Free Yoga Classes</li>
                  <li>Unlimite Sauna Access</li>
                  <li>Free Pool Access</li>
                  <li>Signature Facial</li>
                </ul>
                <a href="#" className="theme-btn style-two">
                  Get started <i className="fas fa-long-arrow-alt-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-item-two wow fadeInUp delay-0-4s">
                <h5>Standard Plan</h5>
                <span className="price">763.97</span>
                <h6>Quis autem veleu repren volutate velit esse</h6>
                <ul className="list-style-three">
                  <li>Relaxation Massages</li>
                  <li>Free Yoga Classes</li>
                  <li>Unlimite Sauna Access</li>
                  <li>Free Pool Access</li>
                  <li>Signature Facial</li>
                </ul>
                <a href="#" className="theme-btn style-two">
                  Get started <i className="fas fa-long-arrow-alt-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-item-two wow fadeInUp delay-0-6s">
                <h5>Silver Plan</h5>
                <span className="price">986.96</span>
                <h6>Quis autem veleu repren volutate velit esse</h6>
                <ul className="list-style-three">
                  <li>Relaxation Massages</li>
                  <li>Free Yoga Classes</li>
                  <li>Unlimite Sauna Access</li>
                  <li>Free Pool Access</li>
                  <li>Signature Facial</li>
                </ul>
                <a href="#" className="theme-btn style-two">
                  Get started <i className="fas fa-long-arrow-alt-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          src="assets/images/shapes/price-shape.png"
          alt="Shape"
          className="price-shape"
        />
        <img
          src="assets/images/shapes/service-circle.png"
          alt="Shape"
          className="circle"
        />
      </section>
    </Layout>
  );
};
export default Pricing;
