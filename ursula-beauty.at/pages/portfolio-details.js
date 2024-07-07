import Link from "next/link";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const PortfolioDetails = () => {
  return (
    <Layout pageName={"Portfolio Details"}>
      <PageBanner
        pageName={"Portfolio Details"}
        bgText="portfolio"
        textAlign={"center"}
      />
      <section className="portfolio-details pt-150 rpt-100">
        <div className="container">
          <div className="portfolio-details-image mb-30 wow fadeInUp delay-0-2s">
            <img
              src="assets/images/projects/portfolio-details.jpg"
              alt="Portfolio Details"
            />
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="portfolio-details-content table-left wow fadeInLeft delay-0-2s">
                <h3>Beauty Spa &amp; Hair Treatments</h3>
                <p className="first-letter-big">
                  MSed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo Sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  temporaincidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullamcorporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur ways weather systems
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-details-list wow fadeInRight delay-0-2s">
                <ul>
                  <li>
                    <h5>Category</h5> <span className="symbol">:</span>{" "}
                    <span className="text">Beauty Treatments</span>
                  </li>
                  <li>
                    <h5>date</h5> <span className="symbol">:</span>{" "}
                    <span className="text">25 January 2022</span>
                  </li>
                  <li>
                    <h5>clients</h5> <span className="symbol">:</span>{" "}
                    <span className="text">Somalia D. Silva</span>
                  </li>
                  <li>
                    <h5>location</h5> <span className="symbol">:</span>{" "}
                    <span className="text">New York City</span>
                  </li>
                  <li>
                    <h5>service</h5> <span className="symbol">:</span>{" "}
                    <span className="text">Hair Cutting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="portfolio-middle-images mt-40">
            <div className="row">
              <div className="col-lg-4 col-sm-6 wow fadeInUp delay-0-2s">
                <img src="assets/images/projects/middle1.jpg" alt="Portfolio" />
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp delay-0-4s">
                <img src="assets/images/projects/middle2.jpg" alt="Portfolio" />
              </div>
              <div className="col-lg-4 col-sm-6 wow fadeInUp delay-0-6s">
                <img src="assets/images/projects/middle3.jpg" alt="Portfolio" />
              </div>
            </div>
          </div>
          <div className="portfolio-details-content wow fadeInUp delay-0-2s">
            <h3>Project Summery &amp; Results</h3>
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business it will frequently occur that pleasures have to be
              repudiated and annoyances accepted. The wise man therefore always
              holds in these matters to this principle of selection: he rejects
              pleasures to secure other greater pleasures, or else he endures
              pains to avoid worse pains
            </p>
          </div>
          <div className="portfolio-details-testimonial pt-25 pb-75 wow fadeInUp delay-0-4s">
            <div className="feedback-content-item text-center mb-30">
              Ut enim ad minima veniam,{" "}
              <span className="font-weight-bold">quis nostrum</span>{" "}
              exercitationem ullam corporis suscipit{" "}
              <span className="font-weight-normal">
                laboriosam nisi ut aliquid ex ea commodi consequatur
              </span>
            </div>
            <div className="author-description">
              <img src="assets/images/testimonials/author-1.jpg" alt="Author" />
              <div className="description">
                <h5>Michael L. Morre</h5>
                <span>Joniour Manager</span>
              </div>
            </div>
          </div>
          <div className="tag-share portfolio-footer">
            <div className="tags wow fadeInRight delay-0-2s">
              <h5>Popular Tags : </h5>
              <a href="#">Beauty</a>
              <a href="#">Spa</a>
              <a href="#">Salon</a>
            </div>
            <div className="share wow fadeInLeft delay-0-2s">
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
          <div className="next-prev-service my-75">
            <div className="nps-item prev-item wow fadeInLeft delay-0-2s">
              <Link href="/portfolio-details">
                <img src="assets/images/services/prev.jpg" alt="Servce" />
              </Link>
              <div className="nps-content">
                <h6>
                  <Link href="/portfolio-details">Spa &amp; Foot Massage</Link>
                </h6>
                <span>Beauty Treatments</span>
                <Link href="/portfolio-details">
                  <a className="read-more">
                    read more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
            </div>
            <Link href="/portfolio">
              <a className="all-services">
                <i className="fas fa-th-large" />
              </a>
            </Link>
            <div className="nps-item next-item wow fadeInRight delay-0-2s">
              <div className="nps-content">
                <h6>
                  <Link href="/portfolio-details">Hair &amp; Nail Polish</Link>
                </h6>
                <span>Beauty Treatments</span>
                <Link href="/portfolio-details">
                  <a className="read-more">
                    read more <i className="fas fa-long-arrow-alt-right" />
                  </a>
                </Link>
              </div>
              <Link href="/portfolio-details">
                <img src="assets/images/services/next.jpg" alt="Servce" />
              </Link>
            </div>
          </div>
          <hr />
        </div>
      </section>
      {/* Portfolio Details End */}
      {/*Related Project Start */}
      <section className="Related-project pt-125 rpt-75 pb-120 rpb-70">
        <div className="container">
          <div className="section-title text-center mb-70">
            <span className="bg-text">Case Study</span>
            <span className="sub-title">Photo Gallery</span>
            <h2>Related Working Projects</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="portfolio-item wow fadeInUp delay-0-2s">
                <Link href="/portfolio-details">
                  <img
                    src="assets/images/projects/related-project1.jpg"
                    alt="Project"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="portfolio-item wow fadeInUp delay-0-4s">
                <Link href="/portfolio-details">
                  <img
                    src="assets/images/projects/related-project2.jpg"
                    alt="Project"
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="portfolio-item wow fadeInUp delay-0-6s">
                <Link href="/portfolio-details">
                  <img
                    src="assets/images/projects/related-project3.jpg"
                    alt="Project"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default PortfolioDetails;
