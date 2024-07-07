import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);

export const FeedBackSliderWithLogo = () => {
  const [logo, setLogo] = useState(null);
  const [content, setContent] = useState(null);
  //nav
  const [logoNav, setLogoNav] = useState(null);
  const [contentNav, setContentNav] = useState(null);

  useEffect(() => {
    setContentNav(content);
    setLogoNav(logo);
  });

  return (
    <Fragment>
      <Slider
        asNavFor={logoNav}
        ref={(slider) => setContent(slider)}
        dots={false}
        infinite={true}
        autoplay={false}
        fade={true}
        autoplaySpeed={5000}
        arrows={false}
        centerMode={true}
        speed={1000}
        slidesToShow={1}
        slidesToScroll={1}
        className="feedback-item-wrap mb-35"
      >
        <div className="feedback-content-item">
          Ut enim ad minima veniam,{" "}
          <span className="font-weight-bold">quis nostrum</span> exercitationem
          ullam corporis suscipit{" "}
          <span className="font-weight-normal">
            laboriosam nisi ut aliquid exea commodi consequatur
          </span>
        </div>
        <div className="feedback-content-item">
          Ut enim ad minima veniam,{" "}
          <span className="font-weight-bold">quis nostrum</span> exercitationem
          ullam{" "}
          <span className="font-weight-normal">
            laboriosam nisi ut aliquid exea commodi consequatur corporis
            suscipit
          </span>
        </div>
        <div className="feedback-content-item">
          Ut enim ad minima veniam,{" "}
          <span className="font-weight-bold">quis nostrum</span> exercitationem
          ullam corporis suscipit{" "}
          <span className="font-weight-normal">
            laboriosam nisi ut aliquid exea commodi consequatur
          </span>
        </div>
        <div className="feedback-content-item">
          Ut enim ad minima veniam,{" "}
          <span className="font-weight-bold">quis nostrum</span> exercitationem
          ullam{" "}
          <span className="font-weight-normal">
            laboriosam nisi ut aliquid exea commodi consequatur corporis
            suscipit
          </span>
        </div>
      </Slider>
      <Slider
        asNavFor={contentNav}
        ref={(slider) => setLogo(slider)}
        dots={true}
        infinite={true}
        autoplay={false}
        autoplaySpeed={5000}
        arrows={false}
        speed={1000}
        centerMode={false}
        slidesToShow={3}
        slidesToScroll={1}
        focusOnSelect={true}
        className="feedback-logo-wrap"
      >
        <img src="assets/images/testimonials/logo-1.png" alt="Feedback" />
        <img src="assets/images/testimonials/logo-2.png" alt="Feedback" />
        <img src="assets/images/testimonials/logo-3.png" alt="Feedback" />
        <img src="assets/images/testimonials/logo-1.png" alt="Feedback" />
      </Slider>
    </Fragment>
  );
};

export const FeedBackSliderWithArrow = () => {
  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".feedback-next",
      prevEl: ".feedback-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 25 },
      1200: { slidesPerView: 3, spaceBetween: 25 },
    },
  };
  return (
    <Fragment>
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
      <Swiper {...props} className="feedback-wraper">
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
              Sed ut perspiciatis unde omnis iste natus error sit voluptateme
              accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
              abillo inventore veritatis et architecto beatae vitae
            </p>
            <div className="author-description">
              <img src="assets/images/testimonials/author-1.jpg" alt="Author" />
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
              Sed ut perspiciatis unde omnis iste natus error sit voluptateme
              accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
              abillo inventore veritatis et architecto beatae vitae
            </p>
            <div className="author-description">
              <img src="assets/images/testimonials/author-2.jpg" alt="Author" />
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
              <img src="assets/images/testimonials/author-3.jpg" alt="Author" />
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
              Sed ut perspiciatis unde omnis iste natus error sit voluptateme
              accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
              abillo inventore veritatis et architecto beatae vitae
            </p>
            <div className="author-description">
              <img src="assets/images/testimonials/author-1.jpg" alt="Author" />
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
              Sed ut perspiciatis unde omnis iste natus error sit voluptateme
              accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
              abillo inventore veritatis et architecto beatae vitae
            </p>
            <div className="author-description">
              <img src="assets/images/testimonials/author-2.jpg" alt="Author" />
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
              Sed ut perspiciatis unde omnis iste natus error sit voluptateme
              accusantium dolore laudantium, totam rem aperiam eaque ipsa quae
              abillo inventore veritatis et architecto beatae vitae
            </p>
            <div className="author-description">
              <img src="assets/images/testimonials/author-3.jpg" alt="Author" />
              <div className="description">
                <h5>John C. Brookse</h5>
                <span>Joniour Manager</span>
              </div>
            </div>
            <div className="for-border" />
          </SwiperSlide>
        </div>
      </Swiper>
    </Fragment>
  );
};

export const FeedBackItemThree = () => {
  const props = {
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".feedback-next-arrow",
      prevEl: ".feedback-prev-arrow",
    },
  };
  return (
    <Fragment>
      <div className="feedback-wrap style-three rel mt-145 mb-90 rm-100 rmb-90">
        <span className="bg-text">Feedback</span>
        <div className="icon">
          <i className="flaticon-quotation-mark" />
        </div>
        <Swiper {...props} className="feedback-wrap-three">
          <SwiperSlide className="feedback-item-three">
            <span className="feedback-text">
              Sedut persiciatis unde omnis iste natus error sit voluptateme
              accusantium dolore laudantium totam rem aperiam eaque ipsa quae
              abillo inventore veritatis et arcitect beatae vitae
            </span>
            <div className="author-description">
              <img src="assets/images/testimonials/author-1.jpg" alt="Author" />
              <div className="description">
                <h5>Michael L. Morre</h5>
                <span>Joniour Manager</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="feedback-item-three">
            <span className="feedback-text">
              Aaperiam eaque ipsa quae abillo inventore veritatis et arcitect
              beatae vitae Sedut persiciatis unde omnis iste natus error sit
              voluptateme accusantium dolore laudantium totam rem
            </span>
            <div className="author-description">
              <img src="assets/images/testimonials/author-3.jpg" alt="Author" />
              <div className="description">
                <h5>John C. Brookse</h5>
                <span>Joniour Manager</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="feedback-three-arrows">
        <button className="feedback-prev-arrow slick-arrow">
          <i className="fas fa-long-arrow-alt-left" />
        </button>
        <button className="feedback-next-arrow slick-arrow">
          <i className="fas fa-long-arrow-alt-right" />
        </button>
      </div>
    </Fragment>
  );
};
