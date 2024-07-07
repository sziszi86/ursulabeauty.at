import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
import { getPagination, pagination } from "../src/utils";
const Shop = () => {
  let sort = 6;
  const [active, setActive] = useState(1);
  const [state, setstate] = useState([]);
  useEffect(() => {
    pagination(".product-grid-item", sort, active);
    let list = document.querySelectorAll(".product-grid-item");
    setstate(getPagination(list.length, sort));
  }, [active]);

  return (
    <Layout pageName={"Shop Grid"}>
      <PageBanner pageName={"Shop Grid"} textAlign={"center"} />
      <section className="shop-grid-area py-150 rpy-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="shop-sidebar rmb-75">
                <div className="widget search-widget wow fadeInUp delay-0-2s">
                  <form onClick={(e) => e.preventDefault()} action="#">
                    <input type="search" placeholder="Search" required="" />
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
                <div className="widget filter-price-widget wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Filter by price</h5>
                  <div className="price-filter-details">
                    <span className="price">
                      Price <b> $5 - $100</b>
                    </span>
                    <a href="#">Filter</a>
                  </div>
                </div>
                <div className="widget products-widget wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Popular Products</h5>
                  <div className="product-item-wrap">
                    <div className="widget-product-item">
                      <div className="widget-product-image">
                        <img
                          src="assets/images/widgets/product1.png"
                          alt="Popular Product"
                        />
                      </div>
                      <div className="widget-product-content">
                        <h6>
                          <Link href="/product-details">
                            Man Winter Body Lotions
                          </Link>
                        </h6>
                        <span className="price">Price $49</span>
                      </div>
                    </div>
                    <div className="widget-product-item">
                      <div className="widget-product-image">
                        <img
                          src="assets/images/widgets/product2.png"
                          alt="Popular Product"
                        />
                      </div>
                      <div className="widget-product-content">
                        <h6>
                          <Link href="/product-details">Summer Hair Cream</Link>
                        </h6>
                        <span className="price">Price $49</span>
                      </div>
                    </div>
                    <div className="widget-product-item">
                      <div className="widget-product-image">
                        <img
                          src="assets/images/widgets/product3.png"
                          alt="Popular Product"
                        />
                      </div>
                      <div className="widget-product-content">
                        <h6>
                          <Link href="/product-details">
                            Hair Color &amp; Oil
                          </Link>
                        </h6>
                        <span className="price">Price $49</span>
                      </div>
                    </div>
                    <div className="widget-product-item">
                      <div className="widget-product-image">
                        <img
                          src="assets/images/widgets/product4.png"
                          alt="Popular Product"
                        />
                      </div>
                      <div className="widget-product-content">
                        <h6>
                          <Link href="/product-details">
                            Organic Fresh Soap
                          </Link>
                        </h6>
                        <span className="price">Price $49</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget tag-cloud-widget wow fadeInUp delay-0-2s">
                  <h5 className="widget-title">Popular Tags</h5>
                  <div className="tag-clouds">
                    <a href="#">Beauty</a>
                    <a href="#">Spa</a>
                    <a href="#">Organic</a>
                    <a href="#">Skin Care</a>
                    <a href="#">Cye Care</a>
                    <a href="#">Nature</a>
                    <a href="#">Colors</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="shop-grid-wrap">
                <div className="shop-shorter mb-35 wow fadeInUp delay-0-2s">
                  <div className="sort-text mb-15">
                    <span>Showing 1-09 oh 16 Result</span>
                  </div>
                  <div className="sorting-dropdown mb-15">
                    <select>
                      <option value="default" selected="">
                        Default Sorting
                      </option>
                      <option value="new">Short by Latest</option>
                      <option value="old">Oldest Product</option>
                      <option value="hight-to-low">High To Low</option>
                      <option value="low-to-high">Low To High</option>
                    </select>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-md-4 col-6 col-small">
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
                  <div className="col-md-4 col-6 col-small">
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
                  <div className="col-md-4 col-6 col-small">
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
                  <div className="col-md-4 col-6 col-small">
                    <div className="product-grid-item wow fadeInUp delay-0-2s">
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
                  <div className="col-md-4 col-6 col-small">
                    <div className="product-grid-item wow fadeInUp delay-0-4s">
                      <div className="rating-sale">
                        <span>Sale</span>
                      </div>
                      <div className="image">
                        <img
                          src="assets/images/products/product5.jpg"
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
                  <div className="col-md-4 col-6 col-small">
                    <div className="product-grid-item wow fadeInUp delay-0-6s">
                      <div className="rating-sale">
                        <span>Sale</span>
                      </div>
                      <div className="image">
                        <img
                          src="assets/images/products/product6.jpg"
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
                  <div className="col-md-4 col-6 col-small">
                    <div className="product-grid-item wow fadeInUp delay-0-2s">
                      <div className="rating-sale">
                        <i className="fas fa-star" />
                        <span>5</span>
                      </div>
                      <div className="image">
                        <img
                          src="assets/images/products/product7.jpg"
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
                  <div className="col-md-4 col-6 col-small">
                    <div className="product-grid-item wow fadeInUp delay-0-4s">
                      <div className="rating-sale">
                        <span>Sale</span>
                      </div>
                      <div className="image">
                        <img
                          src="assets/images/products/product8.jpg"
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
                  <div className="col-md-4 col-6 col-small">
                    <div className="product-grid-item wow fadeInUp delay-0-6s">
                      <div className="rating-sale">
                        <span>Sale</span>
                      </div>
                      <div className="image">
                        <img
                          src="assets/images/products/product9.jpg"
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
                <nav aria-label="...">
                  <ul className="pagination flex-wrap justify-content-center pt-10 wow fadeInUp delay-0-8s">
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
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Shop;
