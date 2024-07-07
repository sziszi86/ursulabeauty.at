import Link from "next/link";
import Slider from "react-slick";
import { FeedBackItemThree } from "../src/components/slider/FeedBackSlider";
import Layout from "../src/layout/Layout";
import { hero3Slider } from "../src/sliderProps";
const index3 = () => {
  return (
    <Layout header={3} noPageBanner>
      {/*End Hidden Sidebar */}
      {/* Slider Section Start */}
      <div className="slider-section">
        <Slider {...hero3Slider}>
          <div
            className="slider-single-item slider-single-item-1"
            style={{ backgroundImage: "url(assets/images/slider/slider1.jpg)" }}
          >
            <div className="container">
              <span className="bg-text">Hair Salon</span>
              <span className="sub-title">Welcome to Lezar</span>
              <h1>Quality Hair Salon Center</h1>
              <div className="slider-btn">
                <Link href="/about">
                  <a className="theme-btn style-six">
                    Learn more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
                <Link href="/services">
                  <a className="theme-btn style-five">
                    our service <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-single-item slider-single-item-2"
            style={{ backgroundImage: "url(assets/images/slider/slider1.jpg)" }}
          >
            <div className="container">
              <span className="bg-text">Hair Salon</span>
              <span className="sub-title">Welcome to Lezar</span>
              <h1>Quality Hair Salon Center</h1>
              <div className="slider-btn">
                <Link href="/about">
                  <a className="theme-btn style-six">
                    Learn more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
                <Link href="/services">
                  <a className="theme-btn style-five">
                    our service <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-single-item slider-single-item-3"
            style={{ backgroundImage: "url(assets/images/slider/slider1.jpg)" }}
          >
            <div className="container">
              <span className="bg-text">Hair Salon</span>
              <span className="sub-title">Welcome to Lezar</span>
              <h1>Quality Hair Salon Center</h1>
              <div className="slider-btn">
                <Link href="/about">
                  <a className="theme-btn style-six">
                    Learn more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
                <Link href="/services">
                  <a className="theme-btn style-five">
                    our service <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* Slider Section End */}
      {/* About Section Start */}
      <section className="about-section-two rel z-2 pt-140 rpt-90 pb-120 rpb-70">
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-6">
              <div className="about-page-content wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="bg-text">about</span>
                  <span className="sub-title">Who We Are</span>
                  <h2>We’re Best Quality Hair Treatment Center</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-right-text wow fadeInRight delay-0-2s">
                <p>
                  Sed ut perspiciatis unde omnis iste natus err voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis
                </p>
                <Link href="/about">
                  <a className="read-more mt-10">
                    read more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="about-offer-item">
                <img
                  src="assets/images/about/about-offer1.jpg"
                  alt="About Offer"
                />
                <div className="about-offer-content">
                  <span className="bg-text">Hair</span>
                  <h4>Hair Cutting</h4>
                  <span>Beauty Hair &amp; Spa Salon</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="about-offer-item">
                <img
                  src="assets/images/about/about-offer2.jpg"
                  alt="About Offer"
                />
                <div className="about-offer-content">
                  <span className="bg-text">Color</span>
                  <h4>Hair Cutting</h4>
                  <span>Beauty Hair &amp; Spa Salon</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="about-offer-item">
                <img
                  src="assets/images/about/about-offer3.jpg"
                  alt="About Offer"
                />
                <div className="about-offer-content">
                  <span className="bg-text">Wash</span>
                  <h4>Hair Cutting</h4>
                  <span>Beauty Hair &amp; Spa Salon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* Booking Hours Section Start */}
      <section className="booking-hours-area bg-light-gray rel z-1">
        <div
          className="booking-hour-image bgs-cover"
          style={{
            backgroundImage: "url(assets/images/booking/booking-three.jpg)",
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="booking-hours-content pb-150 pt-140 rpt-0 rpb-100 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="bg-text">menus</span>
                  <span className="sub-title">Hair Salon</span>
                  <h2>Working Hours</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium doloremque laudantium totam aperiame eaque quae
                  abillo inventore veritatis
                </p>
                <ul className="booking-hours py-20 wow fadeInRight delay-0-2s">
                  <li>
                    <span className="date">Mon to Friday</span>{" "}
                    <span className="symbol">:</span>{" "}
                    <span className="time">7:30 am — 1:00 am</span>
                  </li>
                  <li>
                    <span className="date">Satuaday</span>{" "}
                    <span className="symbol">:</span>{" "}
                    <span className="time">7:30 am — 1:00 am</span>
                  </li>
                  <li>
                    <span className="date">Wednesday</span>{" "}
                    <span className="symbol">:</span>{" "}
                    <span className="time">7:30 am — 1:00 am</span>
                  </li>
                </ul>
                <Link href="/booking">
                  <a className="theme-btn style-six">
                    booking now <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-circle">
          <img src="assets/images/shapes/service-circle.png" alt="Circle" />
        </div>
        <div className="booking-bg-icon">
          <i className="flaticon-hair-iron" />
        </div>
      </section>
      {/* Booking Hours Section End */}
      {/* Service Section Start */}
      <section className="service-section-two text-center pt-140 rpt-90 pb-120 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10">
              <div className="section-title mb-65">
                <span className="bg-text">Services</span>
                <span className="sub-title">Who We Offer</span>
                <h2>Quality Hair Treatments</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="service-item-two">
                <div className="image">
                  <div className="icon">
                    <i className="fas fa-cut" />
                  </div>
                  <img
                    src="assets/images/services/service-two1.jpg"
                    alt="Service"
                  />
                  <span className="bg-text">Color</span>
                </div>
                <h5>Hair Colors</h5>
                <p>Quis autem vel eum sure repreh enderit wun</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="service-item-two">
                <div className="image">
                  <div className="icon">
                    <i className="fas fa-cut" />
                  </div>
                  <img
                    src="assets/images/services/service-two2.jpg"
                    alt="Service"
                  />
                  <span className="bg-text">Wash</span>
                </div>
                <h5>Hair Washing</h5>
                <p>Quis autem vel eum sure repreh enderit wun</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="service-item-two">
                <div className="image">
                  <div className="icon">
                    <i className="fas fa-cut" />
                  </div>
                  <img
                    src="assets/images/services/service-two3.jpg"
                    alt="Service"
                  />
                  <span className="bg-text">Cutt</span>
                </div>
                <h5>Hair Cutting</h5>
                <p>Quis autem vel eum sure repreh enderit wun</p>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="service-item-two">
                <div className="image">
                  <div className="icon">
                    <i className="fas fa-cut" />
                  </div>
                  <img
                    src="assets/images/services/service-two4.jpg"
                    alt="Service"
                  />
                  <span className="bg-text">Style</span>
                </div>
                <h5>Hair Message</h5>
                <p>Quis autem vel eum sure repreh enderit wun</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section End */}
      {/* Project Section Start */}
      <section className="project-section-two pb-120 rpb-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="project-item-two">
                <img
                  src="assets/images/projects/project-two1.jpg"
                  alt="Project"
                />
                <div className="project-content-two">
                  <h3>Hair Style Mix</h3>
                  <h5>Beauty Salon</h5>
                  <Link href="/portfolio-details">
                    <a className="theme-btn style-five">
                      read more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-item-two">
                <img
                  src="assets/images/projects/project-two2.jpg"
                  alt="Project"
                />
                <div className="project-content-two">
                  <h3>Hair Style Mix</h3>
                  <h5>Beauty Salon</h5>
                  <Link href="/portfolio-details">
                    <a className="theme-btn style-five">
                      read more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="project-item-two big-item">
                <img
                  src="assets/images/projects/project-two3.jpg"
                  alt="Project"
                />
                <div className="project-content-two">
                  <h3>Women Hair Color</h3>
                  <h5>Beauty Salon</h5>
                  <Link href="/portfolio-details">
                    <a className="theme-btn style-five">
                      read more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="project-item-two video-item">
                <img
                  src="assets/images/projects/project-two4.jpg"
                  alt="Project"
                />
                <div className="project-content-two">
                  <a
                    href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                    className="mfp-iframe video-play mb-10"
                  >
                    <i className="fas fa-play" />
                  </a>
                  <span className="bg-text">Watch Videos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Section End */}
      {/* Booking Section Start */}
      <section className="booking-section-three rel z-1 bg-light-gray pt-140 rpt-90 pb-150 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="booding-three-content rmb-55">
                <div className="section-title mb-30">
                  <span className="bg-text">Book</span>
                  <span className="sub-title">Make Appointment</span>
                  <h2>Get Hair Treatment Booking Seat</h2>
                </div>
                <Link href="/contact">
                  <a className="read-more">
                    learn more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <form
                onClick={(e) => e.preventDefault()}
                action="#"
                className="booking-from"
              >
                <div className="row clearfix">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="number"
                        name="number"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 mb-30">
                    <div className="form-group z-2">
                      <select name="services" id="services">
                        <option value="services">Services</option>
                        <option value="service1">Hair Cutting</option>
                        <option value="service2">Foot Massage</option>
                        <option value="service3">Nail Colors</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        className="theme-btn w-100 style-six"
                      >
                        Make appointment{" "}
                        <i className="fas fa-long-arrow-alt-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="booking-circle">
          <img src="assets/images/shapes/service-circle.png" alt="Circle" />
        </div>
      </section>
      {/* Booking Section End */}
      {/* Products Section Start */}
      <section className="products-section text-center pt-140 rpt-90 pb-115 rpb-65">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10">
              <div className="section-title mb-65">
                <span className="bg-text">products</span>
                <span className="sub-title">popular product</span>
                <h2>Visit Our Shop to collect beauty products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <Link href="/product-details">
                    <a>
                      <img
                        src="assets/images/products/product-1.jpg"
                        alt="Product"
                      />
                    </a>
                  </Link>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <h5>
                  <Link href="/product-details">Face Cream Winter</Link>
                </h5>
                <span className="price">Price $253.59</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <Link href="/product-details">
                    <img
                      src="assets/images/products/product-2.jpg"
                      alt="Product"
                    />
                  </Link>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <h5>
                  <Link href="/product-details">Organic Hair Oil</Link>
                </h5>
                <span className="price">Price $253.59</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <Link href="/product-details">
                    <img
                      src="assets/images/products/product-3.jpg"
                      alt="Product"
                    />
                  </Link>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <h5>
                  <Link href="/product-details">Natural Hair Colors</Link>
                </h5>
                <span className="price">Price $253.59</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product-item wow fadeInUp delay-0-8s">
                <div className="image">
                  <Link href="/product-details">
                    <img
                      src="assets/images/products/product-4.jpg"
                      alt="Product"
                    />
                  </Link>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <h5>
                  <Link href="/product-details">Summer Face Cream</Link>
                </h5>
                <span className="price">Price $253.59</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section End */}
      {/* Feedback Section Start */}
      <div className="feedback-section rel z-1 bg-light-gray">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-xl-6">
              <FeedBackItemThree />
            </div>
            <div className="col-xl-6">
              <div
                className="feedback-left-image bgs-cover h-100"
                style={{
                  backgroundImage:
                    "url(assets/images/testimonials/testimonial-right.jpg)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Feedback Section End */}
      {/* Blog Section Start */}
      <section className="blog-section rel z-1 pt-140 rpt-90 mb-120 rmb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10">
              <div className="section-title text-center mb-65">
                <span className="bg-text">Blog</span>
                <span className="sub-title">News &amp; Blog</span>
                <h2>Latest News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="news-item-two">
                <ul className="title-meta">
                  <li>
                    <i className="far fa-user-circle" /> <a href="#">Robert</a>
                  </li>
                  <li>
                    <i className="far fa-comment-dots" /> <a href="#">(05)</a>
                  </li>
                </ul>
                <h5>
                  <Link href="/blog-details">
                    Smase Podcast Episode Chris Ferdinande
                  </Link>
                </h5>
                <div className="image">
                  <Link href="/blog-details">
                    <img src="assets/images/news/blog-two1.jpg" alt="Blog" />
                  </Link>
                </div>
                <p>Quis autem vel eurep ehenderit quin voluptate velit esse</p>
                <Link href="/blog-details">
                  <a className="read-more">
                    learn more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item-two">
                <ul className="title-meta">
                  <li>
                    <i className="far fa-user-circle" /> <a href="#">Robert</a>
                  </li>
                  <li>
                    <i className="far fa-comment-dots" /> <a href="#">(05)</a>
                  </li>
                </ul>
                <h5>
                  <Link href="/blog-details">
                    Meet Touch Design For Mobile Interfaces
                  </Link>
                </h5>
                <div className="image">
                  <Link href="/blog-details">
                    <img src="assets/images/news/blog-two2.jpg" alt="Blog" />
                  </Link>
                </div>
                <p>Quis autem vel eurep ehenderit quin voluptate velit esse</p>
                <Link href="/blog-details">
                  <a className="read-more">
                    learn more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item-two">
                <ul className="title-meta">
                  <li>
                    <i className="far fa-user-circle" /> <a href="#">Robert</a>
                  </li>
                  <li>
                    <i className="far fa-comment-dots" /> <a href="#">(05)</a>
                  </li>
                </ul>
                <h5>
                  <Link href="/blog-details">
                    Guide To Modern CSS Colors With RGB
                  </Link>
                </h5>
                <div className="image">
                  <Link href="/blog-details">
                    <img src="assets/images/news/blog-two3.jpg" alt="Blog" />
                  </Link>
                </div>
                <p>Quis autem vel eurep ehenderit quin voluptate velit esse</p>
                <Link href="/blog-details">
                  <a className="read-more">
                    learn more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default index3;
