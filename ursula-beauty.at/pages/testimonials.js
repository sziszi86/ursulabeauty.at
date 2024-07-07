import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import { testimonialSliderProps } from "../src/sliderProps";
const Testimonials = () => {
  return (
    <Layout pageName={"Testimonials"}>
      <PageBanner pageName={"Testimonials"} textAlign={"center"} />
      <section className="feedback-section-row-two rel pt-135 rpt-85 pb-135 rpb-85">
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
          <Swiper
            {...testimonialSliderProps}
            className="feedback-active-two-row"
          >
            <SwiperSlide className="feedback-item wow fadeInUp delay-0-2s">
              <div className="quote-rating">
                <i className="fas fa-quote-left" />
                <div className="rating">
                  <i className="fas fa-star" />
                  <span>5.0</span>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptateme
                accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
                abillo inventore veritatis et architecto beatae vitae
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
            <SwiperSlide className="feedback-item wow fadeInUp delay-0-2s">
              <div className="quote-rating">
                <i className="fas fa-quote-left" />
                <div className="rating">
                  <i className="fas fa-star" />
                  <span>5.0</span>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptateme
                accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
                abillo inventore veritatis et architecto beatae vitae
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
            <SwiperSlide className="feedback-item wow fadeInUp delay-0-4s">
              <div className="quote-rating">
                <i className="fas fa-quote-left" />
                <div className="rating">
                  <i className="fas fa-star" />
                  <span>5.0</span>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptateme
                accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
                abillo inventore veritatis et architecto beatae vitae
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
            <SwiperSlide className="feedback-item wow fadeInUp delay-0-4s">
              <div className="quote-rating">
                <i className="fas fa-quote-left" />
                <div className="rating">
                  <i className="fas fa-star" />
                  <span>5.0</span>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptateme
                accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
                abillo inventore veritatis et architecto beatae vitae
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
            <SwiperSlide className="feedback-item wow fadeInUp delay-0-6s">
              <div className="quote-rating">
                <i className="fas fa-quote-left" />
                <div className="rating">
                  <i className="fas fa-star" />
                  <span>5.0</span>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptateme
                accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
                abillo inventore veritatis et architecto beatae vitae
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
                Sed ut perspiciatis unde omnis iste natus error sit voluptateme
                accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
                abillo inventore veritatis et architecto beatae vitae
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
            <SwiperSlide className="feedback-item wow fadeInUp delay-0-2s">
              <div className="quote-rating">
                <i className="fas fa-quote-left" />
                <div className="rating">
                  <i className="fas fa-star" />
                  <span>5.0</span>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptateme
                accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
                abillo inventore veritatis et architecto beatae vitae
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
            <SwiperSlide className="feedback-item wow fadeInUp delay-0-2s">
              <div className="quote-rating">
                <i className="fas fa-quote-left" />
                <div className="rating">
                  <i className="fas fa-star" />
                  <span>5.0</span>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptateme
                accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
                abillo inventore veritatis et architecto beatae vitae
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
            <SwiperSlide className="feedback-item wow fadeInUp delay-0-2s">
              <div className="quote-rating">
                <i className="fas fa-quote-left" />
                <div className="rating">
                  <i className="fas fa-star" />
                  <span>5.0</span>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptateme
                accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
                abillo inventore veritatis et architecto beatae vitae
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
            <SwiperSlide className="feedback-item wow fadeInUp delay-0-2s">
              <div className="quote-rating">
                <i className="fas fa-quote-left" />
                <div className="rating">
                  <i className="fas fa-star" />
                  <span>5.0</span>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptateme
                accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
                abillo inventore veritatis et architecto beatae vitae
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
            <SwiperSlide className="feedback-item wow fadeInUp delay-0-2s">
              <div className="quote-rating">
                <i className="fas fa-quote-left" />
                <div className="rating">
                  <i className="fas fa-star" />
                  <span>5.0</span>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptateme
                accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
                abillo inventore veritatis et architecto beatae vitae
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
            <SwiperSlide className="feedback-item wow fadeInUp delay-0-2s">
              <div className="quote-rating">
                <i className="fas fa-quote-left" />
                <div className="rating">
                  <i className="fas fa-star" />
                  <span>5.0</span>
                </div>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptateme
                accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
                abillo inventore veritatis et architecto beatae vitae
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
          </Swiper>
        </div>
      </section>
      {/* Feedback Section End */}
      {/* Feedback Section Start */}
      <div className="feedback-section rel z-1 bg-butter">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="feedback-left-image bgs-cover h-100 wow fadeInLeft delay-0-2s"
                style={{
                  backgroundImage:
                    "url(assets/images/testimonials/testimonial-left.jpg)",
                }}
              />
            </div>
            <div className="col-xl-6">
              <div className="feedback-wrap rel my-145 rm-100 text-center wow fadeInRight delay-0-2s">
                <span className="bg-text">Feedback</span>
                <div className="feedback-content-item mb-30">
                  Ut enim ad minima veniam,{" "}
                  <span className="font-weight-bold">quis nostrum</span>{" "}
                  exercitationem ullam corporis suscipit{" "}
                  <span className="font-weight-normal">
                    laboriosam nisi ut aliquid ex ea commodi consequatur
                  </span>
                </div>
                <div className="feedback-logos">
                  <img
                    src="assets/images/testimonials/logo-1.png"
                    alt="Feedback"
                  />
                  <img
                    src="assets/images/testimonials/logo-2.png"
                    alt="Feedback"
                  />
                  <img
                    src="assets/images/testimonials/logo-3.png"
                    alt="Feedback"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback-leaf">
          <img
            src="assets/images/shapes/feedback-leaf.png"
            alt="Feedback Leaf"
          />
        </div>
      </div>
      {/* Feedback Section End */}
      {/* Testimonial Three Area Start */}
      <section className="testimonial-three-area rel z-1 pt-140 rpt-90 pb-150 rpb-100">
        <div className="container">
          <div className="section-title text-center mb-65">
            <span className="bg-text">Feedback</span>
            <span className="sub-title">Customer Testimonials</span>
            <h2>Valuable Clients Feedback</h2>
          </div>
          <Tab.Container defaultActiveKey={"testimonial-tab3"}>
            <div className="testimonial-tab wow fadeInUp delay-0-2s">
              <Nav className="nav">
                <Nav.Link
                  className="nav-link"
                  data-toggle="tab"
                  eventKey="testimonial-tab1"
                >
                  <img
                    src="assets/images/testimonials/client1.png"
                    alt="Client"
                  />
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  data-toggle="tab"
                  eventKey="testimonial-tab2"
                >
                  <img
                    src="assets/images/testimonials/client2.png"
                    alt="Client"
                  />
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  data-toggle="tab"
                  eventKey="testimonial-tab3"
                >
                  <img
                    src="assets/images/testimonials/client3.png"
                    alt="Client"
                  />
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  data-toggle="tab"
                  eventKey="testimonial-tab4"
                >
                  <img
                    src="assets/images/testimonials/client4.png"
                    alt="Client"
                  />
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  data-toggle="tab"
                  eventKey="testimonial-tab5"
                >
                  <img
                    src="assets/images/testimonials/client5.png"
                    alt="Client"
                  />
                </Nav.Link>
                <Nav.Link
                  className="nav-link"
                  data-toggle="tab"
                  eventKey="testimonial-tab6"
                >
                  <img
                    src="assets/images/testimonials/client6.png"
                    alt="Client"
                  />
                </Nav.Link>
              </Nav>
              <Tab.Content className="tab-content wow fadeInUp delay-0-4s">
                <Tab.Pane className="tab-pane fade" eventKey="testimonial-tab1">
                  <div className="feedback-content-item">
                    Ut enim ad minima,{" "}
                    <span className="font-weight-bold">quis nostrum</span>{" "}
                    exercitationem ullam corporis veniam suscipit{" "}
                    <span className="font-weight-normal">
                      laboriosam nisi ut aliquid ex ea commodi consequatur
                    </span>
                  </div>
                  <div className="author-description">
                    <img
                      src="assets/images/testimonials/author-3.jpg"
                      alt="Author"
                    />
                    <div className="description">
                      <h5>Michael L. Morre</h5>
                      <span>Joniour Manager</span>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="testimonial-tab2">
                  <div className="feedback-content-item">
                    Ut enim ad minima veniam,{" "}
                    <span className="font-weight-bold">quis nostrum</span>{" "}
                    exercitationem ullam corporis commodi consequatur suscipit{" "}
                    <span className="font-weight-normal">
                      laboriosam nisi ut aliquid ex ea
                    </span>
                  </div>
                  <div className="author-description">
                    <img
                      src="assets/images/testimonials/author-2.jpg"
                      alt="Author"
                    />
                    <div className="description">
                      <h5>Michael L. Morre</h5>
                      <span>Joniour Manager</span>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="testimonial-tab3">
                  <div className="feedback-content-item">
                    Ut enim ad minima veniam,{" "}
                    <span className="font-weight-bold">quis nostrum</span>{" "}
                    exercitationem ullam corporis suscipit{" "}
                    <span className="font-weight-normal">
                      laboriosam nisi ut aliquid ex ea commodi consequatur
                    </span>
                  </div>
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
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="testimonial-tab4">
                  <div className="feedback-content-item">
                    Ut enim ad minima veniam,{" "}
                    <span className="font-weight-bold">
                      quis nostrum exercitationem ullam corporis suscipit{" "}
                    </span>{" "}
                    <span className="font-weight-normal">
                      laboriosam nisi ut aliquid ex ea commodi consequatur
                    </span>
                  </div>
                  <div className="author-description">
                    <img
                      src="assets/images/testimonials/author-2.jpg"
                      alt="Author"
                    />
                    <div className="description">
                      <h5>Michael L. Morre</h5>
                      <span>Joniour Manager</span>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="testimonial-tab5">
                  <div className="feedback-content-item">
                    Ut enim ad{" "}
                    <span className="font-weight-bold">
                      {" "}
                      minima veniam quis nostrum
                    </span>{" "}
                    exercitationem ullam corporis suscipit{" "}
                    <span className="font-weight-normal">
                      laboriosam nisi ut aliquid ex ea commodi consequatur
                    </span>
                  </div>
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
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="testimonial-tab6">
                  <div className="feedback-content-item">
                    Ut enim ad minima veniam, aliquid ex ea commodi consequatur{" "}
                    <span className="font-weight-bold">quis nostrum</span>{" "}
                    exercitationem ullam corporis suscipit{" "}
                    <span className="font-weight-normal">
                      laboriosam nisi ut
                    </span>
                  </div>
                  <div className="author-description">
                    <img
                      src="assets/images/testimonials/author-3.jpg"
                      alt="Author"
                    />
                    <div className="description">
                      <h5>Michael L. Morre</h5>
                      <span>Joniour Manager</span>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
        <img
          src="assets/images/shapes/service-circle.png"
          alt="Shape"
          className="testimonial-circle"
        />
      </section>
    </Layout>
  );
};
export default Testimonials;
