// import Index2GalleryIsotop from "../src/components/isotop/Index2GalleryIsotop";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Footer1 } from "../src/layout/Footer";
import Layout from "../src/layout/Layout";
import { index2Feedback } from "../src/sliderProps";
const Index2GalleryIsotop = dynamic(
  () => import("../src/components/isotop/Index2GalleryIsotop"),
  {
    ssr: false,
  }
);
const index2 = () => {
  return (
    <Layout header={2} noFooter noPageBanner>
      <section className="hero-section-two rel z-1 bg-green">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-content-two mt-225 mb-170">
                <span className="sub-title wow fadeInUp delay-0-2s">
                  Welcome to Lezar
                </span>
                <h1 className="wow fadeInUp delay-0-4s">
                  Organic Fresh Spa Treatment Center
                </h1>
                <ul className="list-style-two pt-10 wow fadeInUp delay-0-6s">
                  <li>Natural Glow Face Treatments</li>
                  <li>Organic Products For Body</li>
                  <li>Low Cost Treatments</li>
                  <li>Experts Team Members</li>
                </ul>
                <div className="hero-btn mt-15 wow fadeInUp delay-0-8s">
                  <Link href="/about">
                    <a className="theme-btn mt-15 style-four">
                      Learn more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                  <Link href="/services">
                    <a className="theme-btn mt-15 style-five">
                      Our services <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right-image">
          <img src="assets/images/hero/hero-circle.png" alt="Hero" />
          <img
            className="wow fadeInUp delay-0-2s"
            src="assets/images/hero/hero-two-right.png"
            alt="Heo Right"
          />
        </div>
        <div className="hero-green-lear">
          <img src="assets/images/shapes/hero-green-leaf.png" alt="Leaf" />
        </div>
        <div className="hero-three-shapes">
          <img src="assets/images/shapes/hero-three-shapes.png" alt="Shape" />
        </div>
      </section>
      {/* Hero Section End */}
      {/* Offer Section Start */}
      <section className="offer-section text-center rel z-1 pt-140 rpt-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-10">
              <div className="section-title mb-65">
                <span className="bg-text">Offer</span>
                <span className="sub-title">Who We Offer</span>
                <h2>Quality &amp; Natural Spa Salon</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
              <Link href="/service-details">
                <a className="offer-item wow fadeInUp delay-0-2s">
                  <i className="flaticon-relax" />
                  <h5>Body Relax</h5>
                </a>
              </Link>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
              <Link href="/service-details">
                <a className="offer-item wow fadeInUp delay-0-4s">
                  <i className="flaticon-beauty" />
                  <h5>Facials</h5>
                </a>
              </Link>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
              <Link href="/service-details">
                <a className="offer-item wow fadeInUp delay-0-6s">
                  <i className="flaticon-massage" />
                  <h5>Massages</h5>
                </a>
              </Link>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
              <Link href="/service-details">
                <a className="offer-item wow fadeInUp delay-0-8s">
                  <i className="flaticon-cbd-oil" />
                  <h5>Oil Therapy</h5>
                </a>
              </Link>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
              <Link href="/service-details">
                <a className="offer-item wow fadeInUp delay-1-0s">
                  <i className="flaticon-spa-1" />
                  <h5>Sauna</h5>
                </a>
              </Link>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6 col-small">
              <Link href="/service-details">
                <a className="offer-item wow fadeInUp delay-1-2s">
                  <i className="flaticon-hair-removal" />
                  <h5>Cosmetology</h5>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Offer Section End */}
      {/* About Section Start */}
      <section className="about-section-two rel py-150 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-left rel pt-10 rmb-55 wow fadeInLeft delay-0-2s">
                <img src="assets/images/about/about-two-left.jpg" alt="About" />
                <div className="circle-image">
                  <img
                    src="assets/images/shapes/about-circle.png"
                    alt="Circle"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content wow fadeInRight delay-0-2s">
                <div className="section-title mb-30">
                  <span className="bg-text">about</span>
                  <span className="sub-title">Who We Are</span>
                  <h2>
                    We Provide Quality &amp; Natural Beauty Spa Treatments
                  </h2>
                </div>
                <p>
                  Sed ut persiciatis unde omnis iste natus error sit voluptate
                  maccusantium doloremque laudantium, totam rem aperiam eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explic aboemo enim ipsa
                </p>
                <i>
                  Natus sit voluptate maccusantium doloremque laudantium totam
                  rem aperiam eaque ipsa quae inventore
                </i>
                <div className="about-btn mt-30">
                  <Link href="/about">
                    <a className="theme-btn style-three">
                      read more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-right-leaf">
          <img
            src="assets/images/shapes/about-right-leaf.png"
            alt="About Leaf"
          />
        </div>
      </section>
      {/* About Section End */}
      {/* Gallery Section Start */}
      <Index2GalleryIsotop />
      {/* Gallery Section End */}
      {/* Pricing Section Start */}
      <section className="pricing-section rel z-1 pt-140 rpt-90 mb-120 rmb-70">
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
        <div className="price-left-shape">
          <img src="assets/images/shapes/price-left.png" alt="Shape" />
        </div>
        <div className="price-bg-shape">
          <img src="assets/images/shapes/price-bg.png" alt="Shape" />
        </div>
      </section>
      {/* Pricing Section End */}
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
                        className="theme-btn w-100 style-three"
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
      {/* Feedback Section Start */}
      <section className="feedback-section-two rel pt-135 rpt-85 pb-150 rpb-100">
        <div className="container">
          <div className="section-title-with-btn mb-15">
            <div className="section-title mb-15">
              <span className="bg-text">Feedback</span>
              <span className="sub-title">Customer Testimonials</span>
              <h2>Valuable Clients Feedback</h2>
            </div>
            <div className="feedback-arrows">
              <button className="feedback-prev">
                <i className="fas fa-long-arrow-alt-left" />
              </button>
              <button className="feedback-next">
                <i className="fas fa-long-arrow-alt-right" />
              </button>
            </div>
          </div>
          <Swiper {...index2Feedback} className="feedback-wraper">
            <div className="feedback-active">
              <SwiperSlide className="feedback-item wow fadeInUp delay-0-2s">
                <div className="quote-rating">
                  <i className="fas fa-quote-left" />
                  <div className="rating">
                    <i className="fas fa-star" />
                    <span>5.0</span>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptateme accusantium dolore laudantium, totam rem aperiam
                  eaque ipsa quae abillo inventore veritatis et architecto
                  beatae vitae
                </p>
                <div className="author-description">
                  <img
                    src="assets/images/testimonials/author-1.jpg"
                    alt="Author"
                  />
                  <div className="description">
                    <h5>Michael L. Morre</h5>
                    <span>Joniour Manager</span>
                  </div>
                </div>
                <div className="for-border" />
              </SwiperSlide>
              <SwiperSlide className="feedback-item wow fadeInUp delay-0-4s">
                <div className="quote-rating">
                  <i className="fas fa-quote-left" />
                  <div className="rating">
                    <i className="fas fa-star" />
                    <span>5.0</span>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptateme accusantium dolore laudantium, totam rem aperiam
                  eaque ipsa quae abillo inventore veritatis et architecto
                  beatae vitae
                </p>
                <div className="author-description">
                  <img
                    src="assets/images/testimonials/author-2.jpg"
                    alt="Author"
                  />
                  <div className="description">
                    <h5>Rodney B. Andre</h5>
                    <span>Joniour Manager</span>
                  </div>
                </div>
                <div className="for-border" />
              </SwiperSlide>
              <SwiperSlide className="feedback-item wow fadeInUp delay-0-6s">
                <div className="quote-rating">
                  <i className="fas fa-quote-left" />
                  <div className="rating">
                    <i className="fas fa-star" />
                    <span>5.0</span>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptateme accusantium dolore laudantium, totam rem aperiam
                  eaque ipsa quae abillo inventore veritatis et architecto
                  beatae vitae
                </p>
                <div className="author-description">
                  <img
                    src="assets/images/testimonials/author-3.jpg"
                    alt="Author"
                  />
                  <div className="description">
                    <h5>John C. Brookse</h5>
                    <span>Joniour Manager</span>
                  </div>
                </div>
                <div className="for-border" />
              </SwiperSlide>
              <SwiperSlide className="feedback-item">
                <div className="quote-rating">
                  <i className="fas fa-quote-left" />
                  <div className="rating">
                    <i className="fas fa-star" />
                    <span>5.0</span>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptateme accusantium dolore laudantium, totam rem aperiam
                  eaque ipsa quae abillo inventore veritatis et architecto
                  beatae vitae
                </p>
                <div className="author-description">
                  <img
                    src="assets/images/testimonials/author-1.jpg"
                    alt="Author"
                  />
                  <div className="description">
                    <h5>Michael L. Morre</h5>
                    <span>Joniour Manager</span>
                  </div>
                </div>
                <div className="for-border" />
              </SwiperSlide>
              <SwiperSlide className="feedback-item">
                <div className="quote-rating">
                  <i className="fas fa-quote-left" />
                  <div className="rating">
                    <i className="fas fa-star" />
                    <span>5.0</span>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptateme accusantium dolore laudantium, totam rem aperiam
                  eaque ipsa quae abillo inventore veritatis et architecto
                  beatae vitae
                </p>
                <div className="author-description">
                  <img
                    src="assets/images/testimonials/author-2.jpg"
                    alt="Author"
                  />
                  <div className="description">
                    <h5>Rodney B. Andre</h5>
                    <span>Joniour Manager</span>
                  </div>
                </div>
                <div className="for-border" />
              </SwiperSlide>
              <SwiperSlide className="feedback-item">
                <div className="quote-rating">
                  <i className="fas fa-quote-left" />
                  <div className="rating">
                    <i className="fas fa-star" />
                    <span>5.0</span>
                  </div>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptateme accusantium dolore laudantium, totam rem aperiam
                  eaque ipsa quae abillo inventore veritatis et architecto
                  beatae vitae
                </p>
                <div className="author-description">
                  <img
                    src="assets/images/testimonials/author-3.jpg"
                    alt="Author"
                  />
                  <div className="description">
                    <h5>John C. Brookse</h5>
                    <span>Joniour Manager</span>
                  </div>
                </div>
                <div className="for-border" />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>
      {/* Feedback Section End */}
      {/* Video Area Start */}
      <div className="video-section rel z-1">
        <div className="container">
          <div className="video-inner wow fadeInUp delay-0-2s">
            <img src="assets/images/video/video-bg.jpg" alt="Video" />
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play mb-10"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
      {/* Video Area End */}
      {/* Booking Section Start */}
      <section className="booking-section-two rel text-white pt-120 rpt-95 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="booking-two-item wow fadeInUp delay-0-2s">
                <span className="bg-text">Booking</span>
                <h3>Working Hours</h3>
                <ul>
                  <li>
                    <i className="far fa-clock" />
                    <div className="booking-info">
                      <p>
                        Mon to Fri: 7:30 am — 1:00 am <br />
                        Sat: 9:00 am — 1:00 am <br />
                        Sun: 9:00 am — 11:30 pm
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="booking-two-item wow fadeInUp delay-0-4s">
                <span className="bg-text">Address</span>
                <h3>Address</h3>
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt" />
                    <div className="booking-info">
                      <h5>Location</h5>
                      <p>523 Main Street, 2nd Floor, New York City</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="booking-two-item wow fadeInUp delay-0-6s">
                <span className="bg-text">Contact</span>
                <h3>Contact</h3>
                <ul>
                  <li>
                    <i className="fas fa-phone-alt" />
                    <div className="booking-info">
                      <h5>Hotline</h5>
                      <h5>
                        <a href="callto:+012(345)67899">+012 (345) 678 99</a>
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="booking-section-bg bgs-cover bg-green"
          style={{
            backgroundImage: "url(assets/images/booking/booking-bg.png)",
          }}
        />
      </section>
      {/* Booking Section End */}
      {/* Blog Section Start */}
      <section className="blog-section rel z-1 pt-140 rpt-90 mb-95 rmb-45">
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
              <div className="news-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <Link href="/blog-details">
                    <img src="assets/images/news/news-1.jpg" alt="News" />
                  </Link>
                </div>
                <div className="news-header">
                  <div className="title-meta">
                    <h4>
                      <Link href="/blog-details">
                        Smase Podcast Episode Chris Ferdinande
                      </Link>
                    </h4>
                    <ul>
                      <li>
                        <i className="far fa-user-circle" />{" "}
                        <a href="#">Robert Doe</a>
                      </li>
                      <li>
                        <i className="far fa-comment-dots" />{" "}
                        <a href="#">Comments (05)</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <Link href="/blog-details">
                    <img src="assets/images/news/news-2.jpg" alt="News" />
                  </Link>
                </div>
                <div className="news-header">
                  <div className="title-meta">
                    <h4>
                      <Link href="/blog-details">
                        Useful React Hooks That You Can Projects
                      </Link>
                    </h4>
                    <ul>
                      <li>
                        <i className="far fa-user-circle" />{" "}
                        <a href="#">Robert Doe</a>
                      </li>
                      <li>
                        <i className="far fa-comment-dots" />{" "}
                        <a href="#">Comments (05)</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="news-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <Link href="/blog-details">
                    <img src="assets/images/news/news-3.jpg" alt="News" />
                  </Link>
                </div>
                <div className="news-header">
                  <div className="title-meta">
                    <h4>
                      <Link href="/blog-details">
                        Smase Podcast Episode Chris Ferdinande
                      </Link>
                    </h4>
                    <ul>
                      <li>
                        <i className="far fa-user-circle" />{" "}
                        <a href="#">Robert Doe</a>
                      </li>
                      <li>
                        <i className="far fa-comment-dots" />{" "}
                        <a href="#">Comments (05)</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer1 />
    </Layout>
  );
};
export default index2;
