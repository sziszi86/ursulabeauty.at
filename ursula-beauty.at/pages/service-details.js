import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import BSAccordion from "../src/components/BSAccordion";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const ServiceDetails = () => {
  const accordionData = [
    { title: "Flippy Snaps With React And GreenSock ?", eventKey: "collapse1" },
    {
      title: "Smashing Podcast Chris Ferdinand The Web Dead?",
      eventKey: "collapse2",
    },
    { title: "Where should I incorporate my business?", eventKey: "collapse3" },
    {
      title: "Guide To Modern CSS Colors With RGB, HSL, HWB,?",
      eventKey: "collapse4",
    },
  ];
  const [active, setActive] = useState("0A");
  const onClick = (value) => setActive(value === active ? "" : value);
  return (
    <Layout pageName={"Service Details"}>
      <PageBanner
        pageName={"Portfolio Details"}
        bgText="Portfolio"
        textAlign={"center"}
      />
      <section className="service-details py-150 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-content-wrap">
                <div className="service-details-image wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details.jpg"
                    alt="Service Details"
                  />
                </div>
                <div className="service-details-content icon-before wow fadeInUp delay-0-2s">
                  <h3>Hair Cutting &amp; Color Treatments</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium dolore mque laudantium, totam rem
                    aperiam, eaque ipsa quae ainventores veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem voluptas sit aspernatur aut odit aut fugit
                  </p>
                  <p>
                    Totam rem aperiam, eaque ipsa quae ainventores veritatis et
                    quasi architecto beatae vitae dicta sunt explic aboemo enim
                    ipsam voluptatem voluptas
                  </p>
                  <h3>Benefit For Hair Treatments</h3>
                  <p>
                    Omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium totam rem aperiam, eaque ipsa quae ainventores
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo enim ipsam voluptatem voluptas{" "}
                  </p>
                  <ul className="list-style-one my-25">
                    <li>Best For Human Health</li>
                    <li>Always Be Strong &amp; Motivate</li>
                    <li>Best For Human Health</li>
                    <li>Always Be Strong &amp; Motivate</li>
                    <li>Best For Human Health</li>
                    <li>Always Be Strong &amp; Motivate</li>
                  </ul>
                </div>
                <div className="service-middle-images">
                  <div className="row">
                    <div className="col-sm-6 wow fadeInLeft delay-0-2s">
                      <img
                        src="assets/images/services/middle-left.jpg"
                        alt="Service Middle"
                      />
                    </div>
                    <div className="col-sm-6 wow fadeInRight delay-0-2s">
                      <img
                        src="assets/images/services/middle-right.jpg"
                        alt="Service Middle"
                      />
                    </div>
                  </div>
                </div>
                <div className="service-details-content mb-80 wow fadeInUp delay-0-2s">
                  <h3>Take Care Hair &amp; Health</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium dolore mque laudantium, totam rem
                    aperiam, eaque ipsa quae ainventores veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim
                    ipsam voluptatem voluptas sit aspernatur aut odit aut fugit
                  </p>
                  <Accordion
                    defaultActiveKey="0A"
                    className="faq-accordion mt-35"
                    id="faq-accordion"
                  >
                    {accordionData.map((data, i) => (
                      <div className="card" key={i}>
                        <BSAccordion
                          title={data.title}
                          onClick={() => onClick(`${i}A`)}
                          active={active}
                          event={`${i}A`}
                        />
                      </div>
                    ))}
                  </Accordion>
                </div>
                <hr />
                <div className="next-prev-service mt-60">
                  <div className="nps-item prev-item wow fadeInLeft delay-0-2s">
                    <Link href="/service-details">
                      <img src="assets/images/services/prev.jpg" alt="Servce" />
                    </Link>
                    <div className="nps-content">
                      <h6>
                        <Link href="/service-details">
                          Spa &amp; Foot Massage
                        </Link>
                      </h6>
                      <span>Beauty Treatments</span>
                      <Link href="/service-details">
                        <a className="read-more">
                          read more{" "}
                          <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <Link href="/services">
                    <a className="all-services">
                      <i className="fas fa-th-large" />
                    </a>
                  </Link>
                  <div className="nps-item next-item wow fadeInRight delay-0-2s">
                    <div className="nps-content">
                      <h6>
                        <Link href="/service-details">
                          Hair &amp; Nail Polish
                        </Link>
                      </h6>
                      <span>Beauty Treatments</span>
                      <Link href="/service-details">
                        <a className="read-more">
                          read more{" "}
                          <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </Link>
                    </div>
                    <Link href="/service-details">
                      <img src="assets/images/services/next.jpg" alt="Servce" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-sidebar rmt-55">
                <div className="widget category-widget wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Services Category</h5>
                  <ul>
                    <li>
                      <a href="#">
                        Hair Cutting &amp; Colors{" "}
                        <span className="fas fa-long-arrow-alt-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Body Treatments{" "}
                        <span className="fas fa-long-arrow-alt-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Brow &amp; Nail Polish{" "}
                        <span className="fas fa-long-arrow-alt-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Spa &amp; Body Treatments{" "}
                        <span className="fas fa-long-arrow-alt-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Foot Massage{" "}
                        <span className="fas fa-long-arrow-alt-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Nail Colors &amp; Fitting{" "}
                        <span className="fas fa-long-arrow-alt-right" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget form-widget wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Make Appointment</h5>
                  <form onClick={(e) => e.preventDefault()} action="#">
                    <div className="form-group">
                      <label htmlFor="name">
                        <i className="far fa-user" />
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Full Name"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        <i className="far fa-envelope" />
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <select name="services" id="services">
                        <option value="services">Services</option>
                        <option value="service1">Hair Cutting</option>
                        <option value="service2">Foot Massage</option>
                        <option value="service3">Nail Colors</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <textarea
                        rows={4}
                        id="message"
                        placeholder="Message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <button type="submit" className="theme-btn style-six">
                      appointment <i className="fas fa-long-arrow-alt-right" />
                    </button>
                  </form>
                </div>
                <div className="widget product-add-widget wow fadeInUp delay-0-2s">
                  <div className="product-add-content text-white">
                    <h3>Need Beauty &amp; Spa Products</h3>
                    <p>Quis autem vel eum reprehe nderit quin voluptate</p>
                    <a href="#" className="theme-btn style-two">
                      shop now <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Details End */}
    </Layout>
  );
};
export default ServiceDetails;
