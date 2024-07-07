import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import { getPagination, pagination } from "../src/utils";
const Blog = () => {
  let sort = 2;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".blog-list-item", sort, active);
    let list = document.querySelectorAll(".blog-list-item");
    setstate(getPagination(list.length, sort));
  }, [active]);

  return (
    <Layout pageName={"Blog List"}>
      <PageBanner pageName={"Blog List"} textAlign={"center"} />

      {/* Blog List Start */}
      <section className="blog-list-area py-150 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-list-items-wrap">
                <div className="blog-list-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src="assets/images/news/blog-list1.jpg" alt="blog" />
                  </div>
                  <div className="blog-list-content">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 25 Jan 2022
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments" /> Comments (05)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-share-square" /> Share (26)
                        </a>
                      </li>
                    </ul>
                    <h4>
                      <Link href="/blog-details">
                        <a>
                          Meet Touch Design For Mobile Interfaces, A New
                          Smashing Book Steven Hoober
                        </a>
                      </Link>
                    </h4>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                    </p>
                    <Link href="/blog-details">
                      <a className="theme-btn style-seven">
                        Learn more <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-list-item wow fadeInUp delay-0-2s">
                  <div className="image overlay with-video">
                    <img src="assets/images/news/blog-list2.jpg" alt="blog" />
                    <a
                      href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                      className="mfp-iframe video-play"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <div className="blog-list-content">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 25 Jan 2022
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments" /> Comments (05)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-share-square" /> Share (26)
                        </a>
                      </li>
                    </ul>
                    <h4>
                      <Link href="/blog-details">
                        <a>
                          Useful React Hooks That You Can Use Your Projects
                          Smashing Book Steven
                        </a>
                      </Link>
                    </h4>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                    </p>
                    <Link href="/blog-details">
                      <a className="theme-btn style-seven">
                        Learn more <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-list-item wow fadeInUp delay-0-2s">
                  <div className="blog-list-content">
                    <h4>
                      <Link href="/blog-details">
                        <a>
                          Powerful Terminal And Command-Line (CLI) Tools For
                          Modern Web Development
                        </a>
                      </Link>
                    </h4>
                    <div className="author-description">
                      <img
                        src="assets/images/testimonials/author-1.jpg"
                        alt="Author"
                      />
                      <h6>Michael L. Morre</h6>
                    </div>
                  </div>
                </div>
                <div className="blog-list-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src="assets/images/news/blog-list3.jpg" alt="blog" />
                  </div>
                  <div className="blog-list-content">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 25 Jan 2022
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments" /> Comments (05)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-share-square" /> Share (26)
                        </a>
                      </li>
                    </ul>
                    <h4>
                      <Link href="/blog-details">
                        <a>
                          Meet Touch Design For Mobile Interfaces, A New
                          Smashing Book Steven Hoober
                        </a>
                      </Link>
                    </h4>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                    </p>
                    <Link href="/blog-details">
                      <a className="theme-btn style-seven">
                        Learn more <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-list-item wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img src="assets/images/news/blog-list4.jpg" alt="blog" />
                  </div>
                  <div className="blog-list-content">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="far fa-calendar-alt" /> 25 Jan 2022
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-comments" /> Comments (05)
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="far fa-share-square" /> Share (26)
                        </a>
                      </li>
                    </ul>
                    <h4>
                      <Link href="/blog-details">
                        <a>
                          Powerful Terminal And Command-Line (CLI) Tools For
                          Modern Web Development
                        </a>
                      </Link>
                    </h4>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                    </p>
                    <Link href="/blog-details">
                      <a className="theme-btn style-seven">
                        Learn more <i className="fas fa-long-arrow-alt-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <nav aria-label="...">
                  <ul className="pagination flex-wrap pt-25 wow fadeInUp delay-0-4s">
                    <li
                      className={`page-item ${active == 1 ? "disabled" : ""}`}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(active === 1 ? 1 : active - 1);
                        }}
                        className="page-link"
                        style={{ borderRadius: `50%` }}
                      >
                        <i className="fas fa-arrow-left" />
                      </a>
                    </li>
                    {state &&
                      state.map((s, i) => (
                        <li
                          key={i}
                          className={`page-item ${
                            active === s ? "active" : ""
                          }`}
                        >
                          <a
                            className={`page-link ${
                              active === s ? "active" : ""
                            }`}
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setActive(s);
                            }}
                          >
                            {s}
                          </a>
                        </li>
                      ))}
                    <li
                      className={`page-item ${
                        active == state.length ? "disabled" : ""
                      }`}
                    >
                      <a
                        className="page-link"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(
                            active === state.length ? state.length : active + 1
                          );
                        }}
                      >
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar rmt-75">
                <div className="widget about-widget wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/widgets/about-author.jpg"
                    alt="Author"
                  />
                  <div className="about-widget-content">
                    <h5>Somalia D. Silva</h5>
                    <p>
                      {`"On the other hand, we denounce with righteous indignation
                      and dislike men who beguiled"`}
                    </p>
                    <div className="social-style-three">
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
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="widget search-widget wow fadeInUp delay-0-2s">
                  <form onClick={(e) => e.preventDefault()} action="#">
                    <input
                      type="search"
                      placeholder="Search here"
                      required=""
                    />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
                <div className="widget category-widget wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Category</h5>
                  <ul>
                    <li>
                      <a href="#">
                        Beauty &amp; Spa <span>(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Body Treatments <span>(9)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Hair Cutting &amp; Colors <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Spa &amp; Foot Massage <span>(4)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Nail &amp; Brow Polish <span>(3)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Eye Treatments <span>(0)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget blog-widget wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Recent News</h5>
                  <div className="widget-post-wrap">
                    <div className="widget-post-item">
                      <img
                        src="assets/images/widgets/blog1.jpg"
                        alt="Recent Post"
                      />
                      <div className="widget-post-content">
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />{" "}
                          <a href="#">25 march 2022</a>
                        </span>
                        <h6>
                          <Link href="/blog-details">
                            <a>Useful React Hooks That You Can Projects</a>
                          </Link>
                        </h6>
                        <a href="#" className="read-more">
                          read more{" "}
                          <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    <div className="widget-post-item">
                      <img
                        src="assets/images/widgets/blog2.jpg"
                        alt="Recent Post"
                      />
                      <div className="widget-post-content">
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />{" "}
                          <a href="#">25 march 2022</a>
                        </span>
                        <h6>
                          <Link href="/blog-details">
                            <a>Useful React Hooks That You Can Projects</a>
                          </Link>
                        </h6>
                        <a href="#" className="read-more">
                          read more{" "}
                          <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    <div className="widget-post-item">
                      <img
                        src="assets/images/widgets/blog3.jpg"
                        alt="Recent Post"
                      />
                      <div className="widget-post-content">
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />{" "}
                          <a href="#">25 march 2022</a>
                        </span>
                        <h6>
                          <Link href="/blog-details">
                            <a>Useful React Hooks That You Can Projects</a>
                          </Link>
                        </h6>
                        <a href="#" className="read-more">
                          read more{" "}
                          <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget gallery-widget wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Photo Gallery</h5>
                  <div className="gallery-widget-wrap">
                    <div className="widget-gallery-item">
                      <img
                        src="assets/images/widgets/gallery1.jpg"
                        alt="Gallery"
                      />
                      <a href="assets/images/widgets/gallery1.jpg">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="widget-gallery-item">
                      <img
                        src="assets/images/widgets/gallery2.jpg"
                        alt="Gallery"
                      />
                      <a href="assets/images/widgets/gallery2.jpg">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="widget-gallery-item">
                      <img
                        src="assets/images/widgets/gallery3.jpg"
                        alt="Gallery"
                      />
                      <a href="assets/images/widgets/gallery3.jpg">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="widget-gallery-item">
                      <img
                        src="assets/images/widgets/gallery4.jpg"
                        alt="Gallery"
                      />
                      <a href="assets/images/widgets/gallery4.jpg">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="widget-gallery-item">
                      <img
                        src="assets/images/widgets/gallery5.jpg"
                        alt="Gallery"
                      />
                      <a href="assets/images/widgets/gallery5.jpg">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <div className="widget-gallery-item">
                      <img
                        src="assets/images/widgets/gallery6.jpg"
                        alt="Gallery"
                      />
                      <a href="assets/images/widgets/gallery6.jpg">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="widget tag-cloud-widget wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Popular Tags</h5>
                  <div className="tag-clouds">
                    <a href="#">Beauty</a>
                    <a href="#">Spa</a>
                    <a href="#">Treatment</a>
                    <a href="#">Nature</a>
                    <a href="#">Skin Care</a>
                    <a href="#">Cye Care</a>
                    <a href="#">Colors</a>
                  </div>
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
    </Layout>
  );
};
export default Blog;
