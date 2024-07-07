import Link from "next/link";
import Slider from "react-slick";
import { FeedBackSliderWithLogo } from "../src/components/slider/FeedBackSlider";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import { logoSliderProps } from "../src/sliderProps";
const About = () => {
  return (
    <Layout pageName={"About Us"}>
      <PageBanner pageName={"About Us"} />

      <section className="about-page-section rel z-2 pt-140 rpt-90">
        <div className="container">
          <div className="row mb-55">
            <div className="col-lg-5">
              <div className="about-page-content wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="bg-text">about</span>
                  <span className="sub-title">Who We Are</span>
                  <h2>Quality &amp; Natural Beauty Salon</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-page-right-text wow fadeInRight delay-0-2s">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam rem aperia eaque ipsa
                  quae abillo inventore veritatis quasi architecto beatae vitae
                  dicta sunt explicabo. Nemo enim quia voluptas sit aspernatur
                  aut odit aut fugit sed consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt porro quisquam
                </p>
                <p>
                  Nemo enim quia voluptas sit aspernatur aut odit aut fugit sed
                  consequuntur magni dolores ratione voluptatem sequi nesciunt
                  quisquam
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="about-page-left mb-30 wow fadeInUp delay-0-2s">
                <img
                  src="assets/images/about/about-page-left.jpg"
                  alt="About"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-page-right-video mb-30 wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/about/about-page-right.jpg"
                  alt="About"
                />
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* Services Section Start */}
      <section className="about-page pb-120 pt-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-9">
              <div className="section-title text-center mb-65">
                <span className="bg-text">Services</span>
                <span className="sub-title">Our Services</span>
                <h2>Popular Services We Provide For Customers</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="category-section">
          <div className="category-item style-two wow fadeInUp delay-0-2s">
            <i className="flaticon-nail" />
            <div className="category-title">
              <span className="bg-text">Category</span>
              <h4>
                <Link href="/service-details">Nail Polish</Link>
              </h4>
            </div>
            <p>Quis autem velum reprender eoluptate velit esse</p>
            <Link href="/service-details">
              <a className="read-more">
                read more <i className="fas fa-long-arrow-alt-right" />
              </a>
            </Link>
          </div>
          <div className="category-item style-two wow fadeInUp delay-0-4s">
            <i className="flaticon-eyebrow" />
            <div className="category-title">
              <span className="bg-text">Category</span>
              <h4>
                <Link href="/service-details">Brow Polish</Link>
              </h4>
            </div>
            <p>Quis autem velum reprender eoluptate velit esse</p>
            <Link href="/service-details">
              <a className="read-more">
                read more <i className="fas fa-long-arrow-alt-right" />
              </a>
            </Link>
          </div>
          <div className="category-item style-two wow fadeInUp delay-0-6s">
            <i className="flaticon-hairdresser" />
            <div className="category-title">
              <span className="bg-text">Category</span>
              <h4>
                <Link href="/service-details">Hair Dresser</Link>
              </h4>
            </div>
            <p>Quis autem velum reprender eoluptate velit esse</p>
            <Link href="/service-details">
              <a className="read-more">
                read more <i className="fas fa-long-arrow-alt-right" />
              </a>
            </Link>
          </div>
          <div className="category-item style-two wow fadeInUp delay-0-8s">
            <i className="flaticon-pedicure" />
            <div className="category-title">
              <span className="bg-text">Category</span>
              <h4>
                <Link href="/service-details">Foot Massage</Link>
              </h4>
            </div>
            <p>Quis autem velum reprender eoluptate velit esse</p>
            <Link href="/service-details">
              <a className="read-more">
                read more <i className="fas fa-long-arrow-alt-right" />
              </a>
            </Link>
          </div>
          <div className="category-item style-two wow fadeInUp delay-1-0s">
            <i className="flaticon-cosmetics" />
            <div className="category-title">
              <span className="bg-text">Category</span>
              <h4>
                <Link href="/service-details">Cosmetics</Link>
              </h4>
            </div>
            <p>Quis autem velum reprender eoluptate velit esse</p>
            <Link href="/service-details">
              <a className="read-more">
                read more <i className="fas fa-long-arrow-alt-right" />
              </a>
            </Link>
          </div>
        </div>
      </section>
      {/* Services Section End */}
      {/* Client Logo Section Start */}
      <div className="client-logos text-center pt-80 pb-70">
        <div className="container">
          <Slider {...logoSliderProps} className="client-logo-wrap">
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo1.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo2.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo3.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo4.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo5.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo6.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo1.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo2.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo3.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo4.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo5.png"
                alt="Client Logo"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo6.png"
                alt="Client Logo"
              />
            </a>
          </Slider>
        </div>
      </div>
      {/* Client Logo Section End */}
      {/* Feedback Section Start */}
      <div className="feedback-section mb-150 rmb-100">
        <div className="container">
          <div className="about-page-feedback rel z-1 bg-butter">
            <div className="row">
              <div className="col-xl-6">
                <div
                  className="feedback-left-image bgs-cover h-100 wow fadeInLeft delay-0-2s"
                  style={{
                    backgroundImage:
                      "url(assets/images/testimonials/about-page-feedback.jpg)",
                  }}
                />
              </div>
              <div className="col-xl-6">
                <div className="feedback-wrap rel my-145 rm-100 text-center wow fadeInRight delay-0-2s">
                  <span className="bg-text">Feedback</span>
                  <FeedBackSliderWithLogo />
                </div>
              </div>
            </div>
            <div className="feedback-leaf">
              <img
                src="assets/images/shapes/about-page-leaf.png"
                alt="Feedback Leaf"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Feedback Section End */}
      {/* Instagram Section Start */}
      <div className="instagram-section mb-120 rmb-70">
        <div className="instagram-item wow fadeInUp delay-0-2s">
          <img src="assets/images/instagram/instagram-1.jpg" alt="Instagram" />
          <a href="assets/images/instagram/instagram-1.jpg">
            <i className="fab fa-instagram" />
          </a>
        </div>
        <div className="instagram-item wow fadeInUp delay-0-4s">
          <img src="assets/images/instagram/instagram-2.jpg" alt="Instagram" />
          <a href="assets/images/instagram/instagram-2.jpg">
            <i className="fab fa-instagram" />
          </a>
        </div>
        <div className="instagram-item wow fadeInUp delay-0-6s">
          <img src="assets/images/instagram/instagram-3.jpg" alt="Instagram" />
          <a href="assets/images/instagram/instagram-3.jpg">
            <i className="fab fa-instagram" />
          </a>
        </div>
        <div className="instagram-item wow fadeInUp delay-0-8s">
          <img src="assets/images/instagram/instagram-4.jpg" alt="Instagram" />
          <a href="assets/images/instagram/instagram-4.jpg">
            <i className="fab fa-instagram" />
          </a>
        </div>
        <div className="instagram-item wow fadeInUp delay-1-0s">
          <img src="assets/images/instagram/instagram-5.jpg" alt="Instagram" />
          <a href="assets/images/instagram/instagram-5.jpg">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </Layout>
  );
};
export default About;
