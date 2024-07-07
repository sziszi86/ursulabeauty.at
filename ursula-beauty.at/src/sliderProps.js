import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);

const PrvArrow = ({ className, style, onClick, extraClass, icon }) => {
  return (
    <button className="slider-prev slick-arrow" onClick={() => onClick()}>
      <i className="fas fa-long-arrow-alt-left"></i>
    </button>
  );
};
const NextArrow = ({ className, style, onClick, extraClass, icon }) => {
  return (
    <button className="slider-next slick-arrow" onClick={() => onClick()}>
      <i className="fas fa-long-arrow-alt-right"></i>
    </button>
  );
};
export const hero3Slider = {
  infinite: true,
  arrows: true,
  dots: true,
  autoplay: false,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  prevArrow: (
    <PrvArrow extraClass={"prev-arrow"} icon={"fas fa-long-arrow-left"} />
  ),
  nextArrow: (
    <NextArrow extraClass={"next-arrow"} icon={"fas fa-long-arrow-right"} />
  ),
};
export const logoSliderProps = {
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  speed: 1000,
  focusOnSelect: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

// swiper slider props
export const testimonialSliderProps = {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  grid: {
    rows: 2,
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".feedback-next",
    prevEl: ".feedback-prev",
  },
};

// swiper slider index2 feedback slider

export const index2Feedback = {
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
