import { useState } from "react";
import { Accordion } from "react-bootstrap";
import BSAccordion from "../src/components/BSAccordion";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const Faqs = () => {
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
    { title: "Flippy Snaps With React And GreenSock ?", eventKey: "collapse5" },
    {
      title: "Smashing Podcast Chris Ferdinand The Web Dead?",
      eventKey: "collapse6",
    },
    { title: "Where should I incorporate my business?", eventKey: "collapse7" },
    {
      title: "Guide To Modern CSS Colors With RGB, HSL, HWB,?",
      eventKey: "collapse8",
    },
  ];
  const [active, setActive] = useState(`0A`);
  const onClick = (value) => setActive(value === active ? "" : value);

  return (
    <Layout pageName={"Service Details"}>
      <PageBanner pageName={"FAQs"} textAlign={"center"} />

      <section
        className="faq-page pt-140 pb-150 rpt-90 rpb-100"
        id="faq-accordion"
      >
        <Accordion defaultActiveKey="0A">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-content wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-65">
                    <span className="bg-text">faqs</span>
                    <span className="sub-title">Asked Questions</span>
                    <h2>
                      Have Any Questions On Minds! Take a Look Company Faqs
                    </h2>
                  </div>
                  <div className="faq-accordion">
                    {accordionData.map(
                      (data, i) =>
                        i < 7 && (
                          <div className="card" key={i}>
                            <BSAccordion
                              active={active}
                              onClick={onClick}
                              title={data.title}
                              event={`${i}A`}
                            />
                          </div>
                        )
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content rmt-55 wow fadeInRight delay-0-2s">
                  <p>
                    Sed perspiciatis unde omnis natus error voluptatem
                    accusantium doloremque laudantium totam aperiam eaque ipsa
                    quillo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur
                  </p>
                  <h6>
                    Inventore veritatis et quasi architecto beatae vitae dic
                    explicabo. Nemo enim ipsam voluptatem voluptas aspernatur
                  </h6>
                  <div className="faq-accordion mt-65">
                    {accordionData.map((data, i) => (
                      <div className="card" key={i}>
                        <BSAccordion
                          active={active}
                          onClick={onClick}
                          title={data.title}
                          event={`${i}B`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Accordion>
      </section>
      {/* FAQ Page End */}
      {/* Video Section Start */}
      <div
        className="video-section-two wow fadeInUp delay-0-2s"
        style={{ backgroundImage: "url(assets/images/video/video-bg.jpg)" }}
      >
        <a
          href="https://www.youtube.com/watch?v=9Y7ma241N8k"
          className="mfp-iframe video-play"
        >
          <i className="fas fa-play" />
        </a>
      </div>
      {/* Video Section End */}
      {/* Contact Us Start */}
      <section className="faq-contact-services rel z-1 py-150 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-contact-left rmb-55 wow fadeInLeft delay-0-2s">
                <img src="assets/images/contacts/faq-page.jpg" alt="Contact" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-contact-content wow fadeInRight delay-0-2s">
                <div className="section-title mb-35">
                  <span className="bg-text">message</span>
                  <span className="sub-title">Contact Us</span>
                  <h2>Have Any Questions On Minds! Say Hi</h2>
                </div>
                <form
                  onClick={(e) => e.preventDefault()}
                  action="#"
                  className="team-page-form"
                >
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <div className="form-group">
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
                    <div className="col-sm-6">
                      <div className="form-group">
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
                    <div className="col-sm-6">
                      <div className="form-group">
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
                    <div className="col-sm-6 mb-30">
                      <div className="form-group">
                        <select name="services" id="services">
                          <option value="services">Subject</option>
                          <option value="service1">Hair Cutting</option>
                          <option value="service2">Foot Massage</option>
                          <option value="service3">Nail Colors</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea
                          rows={3}
                          id="message"
                          className="form-control"
                          placeholder="Message"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn style-six">
                          Send message{" "}
                          <i className="fas fa-long-arrow-alt-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us End */}
    </Layout>
  );
};
export default Faqs;
