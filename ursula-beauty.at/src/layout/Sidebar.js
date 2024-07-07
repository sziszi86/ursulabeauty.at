import { Fragment } from "react";
import { sidebarOnclick } from "../utils";

const Sidebar = () => {
  return (
    <Fragment>
      <div className="form-back-drop" onClick={() => sidebarOnclick()} />
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={() => sidebarOnclick()}>
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form onClick={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" name="text" placeholder="Name" required="" />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-pinterest-p" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Sidebar;

export const SideBar2 = () => {
  return (
    <Fragment>
      <div className="form-back-drop" onClick={() => sidebarOnclick()} />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-right">
          {/* menu sidbar */}
          <div className="menu-sidebar">
            <button onClick={() => sidebarOnclick()}>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className="sidebar-form">
            <h5 className="title text-center text-white mb-30">
              Get Appointment
            </h5>
            {/*Appointment Form*/}
            <div className="appointment-form">
              <form
                onClick={(e) => e.preventDefault()}
                method="post"
                action="#"
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="text"
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <textarea placeholder="Message" rows={5} defaultValue={""} />
                </div>
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn mb-0">
                    Submit now
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/*Social Icons*/}
          <div className="follow-us-wrap">
            <div className="follow-btns">
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p" />
              </a>
            </div>
            <b>Follow Us</b>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
