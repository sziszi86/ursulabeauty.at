import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import CartCount from "../src/components/CartCount";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const ProductDetails = () => {
  return (
    <Layout pageName={"Product Details"}>
      <PageBanner pageName={"Product Details"} textAlign={"center"} />
      {/* Product Details Start */}
      <section className="product-details-area pt-150 rpt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Tab.Container defaultActiveKey={"previewOne"}>
                <div className="product-image-tab rmb-50 wow fadeInLeft delay-0-2s">
                  <Tab.Content className="preview-images tab-content">
                    <Tab.Pane
                      className="preview-item tab-pane fade "
                      eventKey="previewOne"
                    >
                      <img
                        src="assets/images/products/product-preview-1.jpg"
                        alt="Preview"
                      />
                    </Tab.Pane>
                    <Tab.Pane
                      className="preview-item tab-pane fade"
                      eventKey="previewTwo"
                    >
                      <img
                        src="assets/images/products/product-preview-1.jpg"
                        alt="Preview"
                      />
                    </Tab.Pane>
                    <Tab.Pane
                      className="preview-item tab-pane fade"
                      eventKey="previewThree"
                    >
                      <img
                        src="assets/images/products/product-preview-1.jpg"
                        alt="Preview"
                      />
                    </Tab.Pane>
                  </Tab.Content>
                  <Nav className="thumb-images nav">
                    <Nav.Link
                      className="thumb-item nav-item "
                      eventKey="previewOne"
                      data-toggle="tab"
                    >
                      <img
                        src="assets/images/products/product-thumb-1.jpg"
                        alt="Thumb"
                      />
                    </Nav.Link>
                    <Nav.Link
                      className="thumb-item nav-item"
                      eventKey="previewTwo"
                      data-toggle="tab"
                    >
                      <img
                        src="assets/images/products/product-thumb-2.jpg"
                        alt="Thumb"
                      />
                    </Nav.Link>
                    <Nav.Link
                      className="thumb-item nav-item"
                      eventKey="previewThree"
                      data-toggle="tab"
                    >
                      <img
                        src="assets/images/products/product-thumb-3.jpg"
                        alt="Thumb"
                      />
                    </Nav.Link>
                  </Nav>
                </div>
              </Tab.Container>
            </div>
            <div className="col-lg-6">
              <div className="product-details-content wow fadeInRight delay-0-2s">
                <h2>Organic Winter Soap</h2>
                <div className="rating-text">
                  <span className="price">Price $59</span>
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <a href="#">(5k Reviews)</a>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem.
                </p>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>SKU</b>
                      </td>
                      <td>
                        <span>:</span>
                      </td>
                      <td>123546</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Category</b>
                      </td>
                      <td>
                        <span>:</span>
                      </td>
                      <td>
                        <a href="#">Soap</a> <a href="#">Organic</a>{" "}
                        <a href="#">Cosmetics</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Tags</b>
                      </td>
                      <td>
                        <span>:</span>
                      </td>
                      <td>
                        <a href="#">Beauty</a> <a href="#">Soap</a>{" "}
                        <a href="#">Skin Care</a>
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td>
                        <b>Quantity</b>
                      </td>
                      <td>
                        <span>:</span>
                      </td>
                      <td>
                        <div className="add-to-cart">
                          <CartCount />
                          <a href="#" className="theme-btn style-six">
                            add to cart{" "}
                            <i className="fas fa-long-arrow-alt-right" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className="product-details-information pt-50 pb-60 wow fadeInUp delay-0-2s"
            id="product-details-information"
          >
            <Tab.Container defaultActiveKey={"details"}>
              <Nav
                as={"ui"}
                className="nav nav-tabs product-information-tab mb-30"
              >
                <li>
                  <Nav.Link eventKey="details" data-toggle="tab">
                    Description
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link eventKey="information" data-toggle="tab">
                    Additional Information
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link eventKey="review" data-toggle="tab">
                    Review (02)
                  </Nav.Link>
                </li>
              </Nav>
              <Tab.Content className="tab-content">
                <Tab.Pane className="tab-pane fade" eventKey="details">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem.
                  </p>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="information">
                  <p>
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur magni
                    dolores eos qui ratione voluptatem sequi nesciunt. Neque
                    porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam
                  </p>
                  <ul className="list-style-one mt-25 mb-25">
                    <li>Strong lens for long distance surveillance.</li>
                    <li>WIFI technology can view and view the Internet</li>
                    <li>
                      Auto Night Vision, Clear video can be seen in the dark at
                      night
                    </li>
                    <li>Video recording system on a memory card</li>
                    <li>You can watch back videos from the phone</li>
                    <li>
                      CCTV videos can be viewed live on your Laptop, Desktop,
                      Smartphone or Tablet PC
                    </li>
                    <li>
                      Direct monitoring of your favorite places from all parts
                      of the world.
                    </li>
                    <li>
                      Talking and listening to the two ends. (Same Like Mobile)
                    </li>
                    <li>Wide Angle and Long Length</li>
                    <li>Smart zooming point</li>
                    <li>HD quality video output.</li>
                    <li>Smart Alarming System</li>
                    <li>Power system 12 volts (without adapter)</li>
                  </ul>
                  <p>
                    Now wherever you are, wherever you are, you can easily
                    monitor your CCTV videos through your mobile, tab, laptop or
                    PC. With the wireless camera, you can view the camera from
                    your mobile or computer to the right-left 0 to 360-degree
                    video. Cover the flower room with a camera.
                  </p>
                </Tab.Pane>
                <Tab.Pane className="tab-pane fade" eventKey="review">
                  <div className="review-wrap">
                    <div className="comment-item">
                      <div className="author-image">
                        <img
                          src="assets/images/news/comment-author-1.jpg"
                          alt="Author"
                        />
                      </div>
                      <div className="comment-details">
                        <div className="name-date">
                          <b className="name">Modela D. Silva</b>
                          <span className="date">25 Jan 2022</span>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
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
                    <div className="comment-item child-comment">
                      <div className="author-image">
                        <img
                          src="assets/images/news/comment-author-2.jpg"
                          alt="Author"
                        />
                      </div>
                      <div className="comment-details">
                        <div className="name-date">
                          <b className="name">Modela D. Silva</b>
                          <span className="date">25 Jan 2022</span>
                          <div className="rating">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
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
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </section>
      {/* Product Details End */}
      {/* Review Form Start */}
      <div className="review-form-area wow fadeInUp delay-0-4s">
        <div className="container">
          <div className="review-form-wrap">
            <h3 className="review-form-title mb-0">Leave a Reviews</h3>
            <div className="rating-text">
              Please Leave your valiable rating :
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
            <form
              onClick={(e) => e.preventDefault()}
              action="#"
              className="review-form mt-35"
            >
              <div className="row clearfix">
                <div className="col-md-4">
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
                <div className="col-md-4">
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
                <div className="col-md-4">
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
                <div className="col-lg-5 col-md-6 col-sm-8">
                  <div className="form-group mb-0">
                    <button type="submit" className="theme-btn w-100 style-six">
                      send Review <i className="fas fa-long-arrow-alt-right" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Review Form End */}
      {/* Related Product Start */}
      <section className="related-product pt-135 pb-95 rpt-85 rpb-45">
        <div className="container">
          <div className="section-title text-center mb-65">
            <span className="bg-text">Product</span>
            <span className="sub-title">Our Product</span>
            <h2>Best Related Products</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-6 col-small">
              <div className="product-grid-item wow fadeInUp delay-0-2s">
                <div className="rating-sale">
                  <i className="fas fa-star" />
                  <span>5</span>
                </div>
                <div className="image">
                  <img
                    src="assets/images/products/product1.jpg"
                    alt="Product"
                  />
                  <div className="action-btns">
                    <a href="#">
                      <i className="fas fa-cart-plus" />
                    </a>
                    <a href="#">
                      <i className="fas fa-heart" />
                    </a>
                  </div>
                </div>
                <h6>
                  <Link href="/product-details">Organic Fresh Soap</Link>
                </h6>
                <span className="price">Price $29</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 col-small">
              <div className="product-grid-item wow fadeInUp delay-0-4s">
                <div className="rating-sale">
                  <i className="fas fa-star" />
                  <span>3</span>
                </div>
                <div className="image">
                  <img
                    src="assets/images/products/product2.jpg"
                    alt="Product"
                  />
                  <div className="action-btns">
                    <a href="#">
                      <i className="fas fa-cart-plus" />
                    </a>
                    <a href="#">
                      <i className="fas fa-heart" />
                    </a>
                  </div>
                </div>
                <h6>
                  <Link href="/product-details">Organic Fresh Soap</Link>
                </h6>
                <span className="price">Price $29</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 col-small">
              <div className="product-grid-item wow fadeInUp delay-0-6s">
                <div className="rating-sale">
                  <span>Sale</span>
                </div>
                <div className="image">
                  <img
                    src="assets/images/products/product3.jpg"
                    alt="Product"
                  />
                  <div className="action-btns">
                    <a href="#">
                      <i className="fas fa-cart-plus" />
                    </a>
                    <a href="#">
                      <i className="fas fa-heart" />
                    </a>
                  </div>
                </div>
                <h6>
                  <Link href="/product-details">Organic Fresh Soap</Link>
                </h6>
                <span className="price">Price $29</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 col-small">
              <div className="product-grid-item wow fadeInUp delay-0-8s">
                <div className="rating-sale">
                  <i className="fas fa-star" />
                  <span>5</span>
                </div>
                <div className="image">
                  <img
                    src="assets/images/products/product4.jpg"
                    alt="Product"
                  />
                  <div className="action-btns">
                    <a href="#">
                      <i className="fas fa-cart-plus" />
                    </a>
                    <a href="#">
                      <i className="fas fa-heart" />
                    </a>
                  </div>
                </div>
                <h6>
                  <Link href="/product-details">Organic Fresh Soap</Link>
                </h6>
                <span className="price">Price $29</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ProductDetails;
