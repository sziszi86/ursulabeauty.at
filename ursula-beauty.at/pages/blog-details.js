import Link from "next/link";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const BlogDetails = () => {
  return (
    <Layout pageName={"Blog Details"}>
      <PageBanner pageName={"Blog Details"} textAlign={"center"} />

      {/* Blog Details Start */}
      <section className="blog-details-area py-150 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-list-item blog-details-content">
                <div className="image wow fadeInUp delay-0-2s">
                  <img src="assets/images/news/blog-list1.jpg" alt="blog" />
                </div>
                <div className="blog-list-content wow fadeInUp delay-0-4s">
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
                    Meet Touch Design For Mobile Interfaces, A New Smashing Book
                    Steven Hoober
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasies architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem voluptas sit aspernatur aut odit aut fugit, sed
                    quia consequuntur magni dolores eos qui ratione voluptatem
                    amet sequi nesciunt. Neque porro quisquam estoqui dolorem
                    ipsum quia dolor sit, consectetur adipisci velit sed quia
                    non numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
                    quis nostrum exercitationem ullam corporis suscipit
                    laboriosam, nisi ut aliquid exea commodi consequatur Quis
                    autem vel eum iure reprehenderit qui in ea voluptate velit
                    esse quam nihil molestiae consequatur vel illum qui dolorem
                  </p>
                  <img
                    src="assets/images/news/blog-details-middle.jpg"
                    alt="Blog"
                  />
                  <h5>Why Need Beauty {`&amp;`} Spa Treatments ? </h5>
                  <p>
                    Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit
                    aut fugit sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam
                    estoqui dolorem ipsum quia dolor sit amet, consectetur
                    adipisci velit sed quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam aliquam quaerat
                    voluptatem. Ut enim ad minima veniam nostrum exercitationem
                  </p>
                  <blockquote>
                    {`"On the other hand denounce righteous indignation and
                    dislike men who are so beguiled and demoralized by the
                    charms of pleasure the momen blinded"`}
                    <span className="name">Somalia D. Silva</span>
                  </blockquote>
                  <hr className="mt-40" />
                  <div className="tag-share py-20 wow fadeInUp delay-0-2s">
                    <div className="tags mb-5">
                      <h5>Popular Tags : </h5>
                      <a href="#">Beauty</a>
                      <a href="#">Spa</a>
                      <a href="#">Salon</a>
                    </div>
                    <div className="share">
                      <h5>Share Now : </h5>
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
                  <hr />
                  <div className="comment-item admin-comment mt-50 wow fadeInUp delay-0-4s">
                    <div className="author-image">
                      <img
                        src="assets/images/news/admin-comment.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="comment-details">
                      <h6 className="name">Somalia D. Silva</h6>
                      <p>
                        At voeos accusamus iusto odiodignissimos ducim uiblande
                        praesentium volutatum deleniti atque corrute quos
                      </p>
                      <div className="social-style-two">
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fab fa-behance" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <h5 className="next-prev-title mt-55">Related Post</h5>
                  <div className="next-prev-service mt-30 mb-55">
                    <div className="nps-item prev-item wow fadeInLeft delay-0-2s">
                      <Link href="/blog-details">
                        <a>
                          <img
                            src="assets/images/services/prev.jpg"
                            alt="Servce"
                          />
                        </a>
                      </Link>
                      <div className="nps-content">
                        <h6>
                          <Link href="/blog-details">
                            <a>Spa {`&amp;`} Foot Massage</a>
                          </Link>
                        </h6>
                        <span>Beauty Treatments</span>
                        <Link href="/blog-details">
                          <a className="read-more">
                            read more{" "}
                            <i className="fas fa-long-arrow-alt-right" />
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="nps-item next-item wow fadeInRight delay-0-2s">
                      <div className="nps-content">
                        <h6>
                          <Link href="/blog-details">
                            <a>Hair {`&amp;`} Nail Polish</a>
                          </Link>
                        </h6>
                        <span>Beauty Treatments</span>
                        <Link href="/blog-details">
                          <a className="read-more">
                            read more{" "}
                            <i className="fas fa-long-arrow-alt-right" />
                          </a>
                        </Link>
                      </div>
                      <Link href="/blog-details">
                        <a>
                          <img
                            src="assets/images/services/next.jpg"
                            alt="Servce"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <hr />
                  <h3 className="comments-title mt-40">Comments</h3>
                  <div className="comments-wrap mb-30">
                    <div className="comment-item wow fadeInUp delay-0-2s">
                      <div className="author-image">
                        <img
                          src="assets/images/news/comment-author-1.jpg"
                          alt="Author"
                        />
                      </div>
                      <div className="comment-details">
                        <div className="name-date">
                          <b className="name">Modela D. Silva</b> /
                          <span className="date">25 Jan 2022</span>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium totam rem
                        </p>
                        <a href="#" className="read-more">
                          Reply <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    <div className="comment-item child-comment wow fadeInUp delay-0-4s">
                      <div className="author-image">
                        <img
                          src="assets/images/news/comment-author-2.jpg"
                          alt="Author"
                        />
                      </div>
                      <div className="comment-details">
                        <div className="name-date">
                          <b className="name">Modela D. Silva</b> /
                          <span className="date">25 Jan 2022</span>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium totam rem
                        </p>
                        <a href="#" className="read-more">
                          Reply <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-form mt-80 wow fadeInUp delay-0-2s">
                <h3 className="comment-form-title mb-0">Send Us Comments</h3>
                <p>Leave your valuable replay about our projects</p>
                <form
                  onClick={(e) => e.preventDefault()}
                  action="#"
                  className="comment-from mt-35"
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
                          placeholder="Email Us"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="website"
                          name="website"
                          className="form-control"
                          placeholder="Website"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <textarea
                          rows={5}
                          className="form-control"
                          placeholder="Write Comments"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="theme-btn w-100 style-six"
                        >
                          send comments{" "}
                          <i className="fas fa-long-arrow-alt-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
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
                        Beauty {`&amp;`} Spa <span>(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Body Treatments <span>(9)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Hair Cutting {`&amp;`} Colors <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Spa {`&amp;`} Foot Massage <span>(4)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Nail {`&amp;`} Brow Polish <span>(3)</span>
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
                    <h3>Need Beauty {`&amp;`} Spa Products</h3>
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
      {/* Blog Details End */}
    </Layout>
  );
};
export default BlogDetails;
