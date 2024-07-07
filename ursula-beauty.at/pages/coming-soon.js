import Link from "next/link";
import { useEffect } from "react";
import Layout from "../src/layout/Layout";
import Sidebar from "../src/layout/Sidebar";
import { sidebarOnclick, stickyNav } from "../src/utils";
const CommingSoon = () => {
  useEffect(() => {
    stickyNav();
  }, []);
  // Counter
  useEffect(() => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
    let countDown = new Date("Dec 30, 2023 00:00:00").getTime(),
      x = setInterval(function () {
        let now = new Date().getTime(),
          distance = countDown - now;
        (document.getElementById("days").innerText = Math.floor(
          distance / day
        )),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));
      }, second);
  }, []);

  return (
    <Layout noFooter noHeader noSidebar>
      <header className="main-header header-four py-15">
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner d-flex align-items-center justify-content-between py-15">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img
                        src="assets/images/logos/color-logo.png"
                        alt="Logo"
                        title="Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              {/* Menu Button */}
              <div className="menu-icons" onClick={() => sidebarOnclick()}>
                {/* menu sidbar */}
                <div className="menu-sidebar">
                  <button>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
      </header>
      <Sidebar />
      {/* Coming Soon Start */}
      <section className="coming-soon-area rel z-1 pt-55 pb-200 rpb-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="coming-soon-wrap rmb-65">
                <span className="sub-title wow fadeInUp delay-0-2s">
                  We are coming soon
                </span>
                <h2 className="wow fadeInUp delay-0-4s">
                  Get Notified When We Started
                </h2>
                <form
                  action="#"
                  method="post"
                  className="mt-40 mb-30 wow fadeInUp delay-0-6s"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="Enter Email Address"
                    required=""
                  />
                  <button value="submit" className="theme-btn style-six">
                    subscribe <i className="fas fa-long-arrow-alt-right" />
                  </button>
                </form>
                <div className="coming-soon-inner wow fadeInUp delay-0-8s">
                  <ul>
                    <li>
                      <span className="time" id="days">
                        0
                      </span>
                      <span className="label">days</span>
                    </li>
                    <li>
                      <span className="time" id="hours">
                        0
                      </span>
                      <span className="label">Hour</span>
                    </li>
                    <li>
                      <span className="time" id="minutes">
                        0
                      </span>
                      <span className="label">Mint</span>
                    </li>
                    <li>
                      <span className="time" id="seconds">
                        0
                      </span>
                      <span className="label">Seco</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="coming-soon-right wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/background/coming-soon.png"
                  alt="Coming Soon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="circle-image">
          <img src="assets/images/shapes/coming-circle.png" alt="Circle" />
        </div>
      </section>
    </Layout>
  );
};
export default CommingSoon;
