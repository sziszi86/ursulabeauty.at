import Link from "next/link";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const Booking = () => {
  return (
    <Layout pageName={"Service Details"}>
      <PageBanner
        pageName={"Appointment"}
        pageTitle="Make Appointment"
        bgText="Booking"
        textAlign={"center"}
      />

      {/* Offer Section Start */}
      <section className="offer-section text-center rel z-1 pt-140 rpt-90 pb-120 rpb-70">
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
      {/* Booking Hours Section Start */}
      <section className="booking-hours-area bg-light-gray rel z-1">
        <div
          className="booking-hour-image"
          style={{
            backgroundImage: "url(assets/images/booking/booking-page.jpg)",
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="booking-hours-content py-150 rpt-0 rpb-100 wow fadeInLeft delay-0-2s">
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
                  <a className="theme-btn style-two">
                    booking now <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-circle">
          <img src="assets/images/shapes/booking-circle.png" alt="Circle" />
        </div>
        <div className="booking-bg-icon">
          <i className="flaticon-hair-iron" />
        </div>
      </section>
      {/* Booking Hours Section End */}
      {/* Booking Section Start */}
      <section className="booking-section pt-140 rpt-90 pb-150 rpb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-title text-center mb-45">
                <span className="bg-text">Booking</span>
                <span className="sub-title">Booking Seat</span>
                <h2>Make Appointment</h2>
              </div>
            </div>
          </div>
          <form
            onClick={(e) => e.preventDefault()}
            action="#"
            className="booking-from"
          >
            <div className="row clearfix">
              <div className="col-lg-4 col-sm-6">
                <div className="form-group wow fadeInUp delay-0-2s">
                  <label htmlFor="name">
                    <i className="far fa-user" />
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="form-group wow fadeInUp delay-0-3s">
                  <label htmlFor="number">
                    <i className="fas fa-phone" />
                  </label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="form-group wow fadeInUp delay-0-4s">
                  <label htmlFor="email">
                    <i className="far fa-envelope" />
                  </label>
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
              <div className="col-lg-4 col-sm-6 mb-30">
                <div className="form-group z-2 wow fadeInUp delay-0-5s">
                  <select name="services" id="services">
                    <option value="services">Services</option>
                    <option value="service1">Hair Cutting</option>
                    <option value="service2">Foot Massage</option>
                    <option value="service3">Nail Colors</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="form-group wow fadeInUp delay-0-6s">
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-control"
                    required=""
                  />
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="form-group wow fadeInUp delay-0-7s">
                  <input
                    type="time"
                    id="time"
                    name="time"
                    className="form-control"
                    required=""
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-0 wow fadeInUp delay-0-8s">
                  <button type="submit" className="theme-btn w-100 style-six">
                    Make appointment{" "}
                    <i className="fas fa-long-arrow-alt-right" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};
export default Booking;
