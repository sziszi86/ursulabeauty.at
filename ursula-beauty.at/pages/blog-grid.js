import Link from "next/link";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const BlogGrid = () => {
  return (
    <Layout pageName={"Blog Grid"}>
      <PageBanner pageName={"Blog Grid"} textAlign={"center"} />

      {/* Blog Grid Section Start */}
      <section className="blog-grid-section py-150 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <Link href="/blog-details">
                    <a>
                      <img src="assets/images/news/blog-1.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>
                <div className="blog-grid-content">
                  <ul>
                    <li>
                      <a href="#">25 january 2022</a>
                    </li>
                    <li>
                      <a href="#">Beauty</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="/blog-details">
                      <a>Smashing Podcast Episode Chris Ferdinande Web</a>
                    </Link>
                  </h5>
                  <Link href="/blog-details">
                    <a className="theme-btn style-seven">
                      Learn more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <Link href="/blog-details">
                    <a>
                      <img src="assets/images/news/blog-2.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>
                <div className="blog-grid-content">
                  <ul>
                    <li>
                      <a href="#">25 january 2022</a>
                    </li>
                    <li>
                      <a href="#">Beauty</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="/blog-details">
                      <a>Smashing Podcast Episode Chris Ferdinande Web</a>
                    </Link>
                  </h5>
                  <Link href="/blog-details">
                    <a className="theme-btn style-seven">
                      Learn more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <Link href="/blog-details">
                    <a>
                      <img src="assets/images/news/blog-3.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>
                <div className="blog-grid-content">
                  <ul>
                    <li>
                      <a href="#">25 january 2022</a>
                    </li>
                    <li>
                      <a href="#">Beauty</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="/blog-details">
                      <a>Smashing Podcast Episode Chris Ferdinande Web</a>
                    </Link>
                  </h5>
                  <Link href="/blog-details">
                    <a className="theme-btn style-seven">
                      Learn more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <Link href="/blog-details">
                    <a>
                      <img src="assets/images/news/blog-4.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>
                <div className="blog-grid-content">
                  <ul>
                    <li>
                      <a href="#">25 january 2022</a>
                    </li>
                    <li>
                      <a href="#">Beauty</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="/blog-details">
                      <a>Smashing Podcast Episode Chris Ferdinande Web</a>
                    </Link>
                  </h5>
                  <Link href="/blog-details">
                    <a className="theme-btn style-seven">
                      Learn more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <Link href="/blog-details">
                    <a>
                      <img src="assets/images/news/blog-5.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>
                <div className="blog-grid-content">
                  <ul>
                    <li>
                      <a href="#">25 january 2022</a>
                    </li>
                    <li>
                      <a href="#">Beauty</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="/blog-details">
                      <a>Smashing Podcast Episode Chris Ferdinande Web</a>
                    </Link>
                  </h5>
                  <Link href="/blog-details">
                    <a className="theme-btn style-seven">
                      Learn more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <Link href="/blog-details">
                    <a>
                      <img src="assets/images/news/blog-6.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>
                <div className="blog-grid-content">
                  <ul>
                    <li>
                      <a href="#">25 january 2022</a>
                    </li>
                    <li>
                      <a href="#">Beauty</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="/blog-details">
                      <a>Smashing Podcast Episode Chris Ferdinande Web</a>
                    </Link>
                  </h5>
                  <Link href="/blog-details">
                    <a className="theme-btn style-seven">
                      Learn more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <Link href="/blog-details">
                    <a>
                      <img src="assets/images/news/blog-7.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>
                <div className="blog-grid-content">
                  <ul>
                    <li>
                      <a href="#">25 january 2022</a>
                    </li>
                    <li>
                      <a href="#">Beauty</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="/blog-details">
                      <a>Smashing Podcast Episode Chris Ferdinande Web</a>
                    </Link>
                  </h5>
                  <Link href="/blog-details">
                    <a className="theme-btn style-seven">
                      Learn more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <Link href="/blog-details">
                    <a>
                      <img src="assets/images/news/blog-8.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>
                <div className="blog-grid-content">
                  <ul>
                    <li>
                      <a href="#">25 january 2022</a>
                    </li>
                    <li>
                      <a href="#">Beauty</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="/blog-details">
                      <a>Smashing Podcast Episode Chris Ferdinande Web</a>
                    </Link>
                  </h5>
                  <Link href="/blog-details">
                    <a className="theme-btn style-seven">
                      Learn more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-grid-item wow fadeInUp delay-0-6s">
                <div className="image">
                  <Link href="/blog-details">
                    <a>
                      <img src="assets/images/news/blog-9.jpg" alt="blog" />
                    </a>
                  </Link>
                </div>
                <div className="blog-grid-content">
                  <ul>
                    <li>
                      <a href="#">25 january 2022</a>
                    </li>
                    <li>
                      <a href="#">Beauty</a>
                    </li>
                  </ul>
                  <h5>
                    <Link href="/blog-details">
                      <a>Smashing Podcast Episode Chris Ferdinande Web</a>
                    </Link>
                  </h5>
                  <Link href="/blog-details">
                    <a className="theme-btn style-seven">
                      Learn more <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <nav aria-label="...">
            <ul className="pagination flex-wrap justify-content-center wow fadeInUp delay-0-8s">
              <li className="page-item disabled">
                <span className="page-link">
                  <i className="fas fa-arrow-left" />
                </span>
              </li>
              <li className="page-item active">
                <span className="page-link">
                  01
                  <span className="sr-only">(current)</span>
                </span>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  02
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  03
                </a>
              </li>
              <li className="page-item dot">04</li>
              <li className="page-item dot">05</li>
              <li className="page-item dot">06</li>
              <li className="page-item dot">07</li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="fas fa-arrow-right" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </Layout>
  );
};
export default BlogGrid;
