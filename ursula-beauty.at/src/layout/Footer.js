const Footer = () => {
  return (
    <footer className="main-footer footer-three bg-black text-white pt-85">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget menu-widget">
              <h4 className="footer-title">About</h4>
              <ul>
                <li>
                  <a href="#">Success Story</a>
                </li>
                <li>
                  <a href="#">Latest Services</a>
                </li>
                <li>
                  <a href="#">Team Members</a>
                </li>
                <li>
                  <a href="#">Popular News</a>
                </li>
                <li>
                  <a href="#">Awards Winning</a>
                </li>
                <li>
                  <a href="#">About Company</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget menu-widget">
              <h4 className="footer-title">Services</h4>
              <ul>
                <li>
                  <a href="#">Beauty Salon</a>
                </li>
                <li>
                  <a href="#">Hair Treatments</a>
                </li>
                <li>
                  <a href="#">Autumn vibes</a>
                </li>
                <li>
                  <a href="#">Makeup</a>
                </li>
                <li>
                  <a href="#">Body Treatments</a>
                </li>
                <li>
                  <a href="#">Spa &amp; Foot Massage</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget contact-widget">
              <h4 className="footer-title">Contact</h4>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt" />
                  <div className="info-content">
                    <h5>Location</h5>
                    <p>523 Main Street, New York</p>
                  </div>
                </li>
                <li>
                  <i className="fas fa-phone-alt" />
                  <div className="info-content">
                    <h5>Hotline</h5>
                    <p>Call : +012 (345) 6789</p>
                  </div>
                </li>
                <li>
                  <i className="far fa-comment" />
                  <div className="info-content">
                    <h5>Email</h5>
                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget newsletter-widget">
              <h4 className="footer-title">Newsletter</h4>
              <form
                onClick={(e) => e.preventDefault()}
                action="#"
                method="post"
              >
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Enter Email"
                  required=""
                />
                <button value="submit">
                  <i className="fas fa-long-arrow-alt-right" />
                </button>
              </form>
              <div className="social-style-one pt-40">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area pt-25 pb-15">
          <ul className="footer-menu py-5">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Faqs</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
          <p>© 2022 Lezar, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

export const Footer1 = () => {
  return (
    <footer className="main-footer bg-light-gray footer-two pt-80">
      <div className="container">
        <div className="footer-subscribe mb-55 wow fadeInLeft delay-0-2s">
          <div className="subscribe-title">
            <i className="flaticon-newspaper" />
            <h3>Subscribe Our Newsletter</h3>
          </div>
          <form
            onClick={(e) => e.preventDefault()}
            action="#"
            method="post"
            className="wow fadeInRight delay-0-4s"
          >
            <input
              type="email"
              name="EMAIL"
              placeholder="Enter Email"
              required=""
            />
            <button value="submit" className="theme-btn style-three">
              subscribe <i className="fas fa-long-arrow-alt-right" />
            </button>
          </form>
        </div>
        <div className="copyright-area pt-25 pb-45">
          <ul className="footer-menu py-5">
            <li>
              <a href="#">Beauty Salon</a>
            </li>
            <li>
              <a href="#">Hair Treatments</a>
            </li>
            <li>
              <a href="#">Autumn vibes</a>
            </li>
            <li>
              <a href="#">Makeup</a>
            </li>
            <li>
              <a href="#">Body Treatments</a>
            </li>
            <li>
              <a href="#">Spa &amp; Foot Massage</a>
            </li>
          </ul>
          <div className="copyright-social">
            <p>© 2022 Lezar, All Rights Reserved</p>
            <div className="social-style-two">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
