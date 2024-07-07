import { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";
const Checkout = () => {
  const [cartData, setCartData] = useState([]);
  const [vat, setVat] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let localStorageData = JSON.parse(localStorage.getItem("lezar"));
    setTotalPrice(localStorageData.totalPrice);
    setShipping(localStorageData.shipping);
    setVat(localStorageData.vat);
    setCartData(localStorageData.cartData);
  }, []);

  // accordion
  const [accordion, setAccordion] = useState(1);

  const accordionFuntion = (value) =>
    setAccordion(accordion == value ? null : value);

  return (
    <Layout pageName={"Checkout Page"}>
      <PageBanner pageName={"Checkout"} textAlign={"center"} />
      <div className="checkout-form-area pt-145 pb-150 rpt-95 rpb-100">
        <div className="container">
          <h4 className="form-title mb-25">Billing Details</h4>
          <form
            onClick={(e) => e.preventDefault()}
            id="checkout-form"
            className="checkout-form wow fadeInUp delay-0-2s"
            name="checkout-form"
            action="#"
            method="post"
          >
            <div className="row">
              <div className="col-lg-12">
                <h6>Personal Information</h6>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    className="form-control"
                    placeholder="First Name"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    className="form-control"
                    placeholder="Last Name"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="number"
                    name="number"
                    className="form-control"
                    placeholder="Phone Number"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="company-name"
                    name="company-name"
                    className="form-control"
                    placeholder="Company name (optional)"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="company-address"
                    name="company-address"
                    className="form-control"
                    placeholder="Company Address (optional)"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <h6>Your Address</h6>
              </div>
              <div className="col-md-6 mb-30">
                <div className="form-group">
                  <select name="country" id="country">
                    <option value="value1">Select Country</option>
                    <option value="value2">Australia</option>
                    <option value="value3">Canada</option>
                    <option value="value4">China</option>
                    <option value="value5">Morocco</option>
                    <option value="value6">Saudi Arabia</option>
                    <option value="value7">United Kingdom (UK)</option>
                    <option value="value8">United States (US)</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="form-control"
                    placeholder="City"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="form-control"
                    placeholder="State"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    className="form-control"
                    placeholder="Zip"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="street-name"
                    name="street-name"
                    className="form-control"
                    placeholder="House, street name"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="apartment-name"
                    name="apartment-name"
                    className="form-control"
                    placeholder="Apartment, suite, unit etc. (optional)"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <h6>Order Notes (optional)</h6>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <textarea
                    name="order-note"
                    id="order-note"
                    className="form-control"
                    rows={5}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="payment-cart-total pt-25">
            <div className="row justify-content-between">
              <div className="col-lg-6">
                <div className="payment-method mt-45 wow fadeInUp delay-0-2s">
                  <h4 className="form-title my-25">Payment Method</h4>
                  <ul id="paymentMethod" className="mb-30">
                    {/* Default unchecked */}
                    <li className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="methodone"
                        name="defaultExampleRadios"
                        defaultChecked
                        checked={accordion == 1 ? true : false}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="methodone"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-controls="collapseOne"
                        onClick={() => accordionFuntion(1)}
                      >
                        Direct Bank Transfer
                      </label>
                      <div
                        id="collapseOne"
                        className={`collapse ${accordion == 1 ? "show" : ""}`}
                      >
                        <p>
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped our account.
                        </p>
                      </div>
                    </li>
                    {/* Default unchecked */}
                    <li className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="methodtwo"
                        name="defaultExampleRadios"
                        checked={accordion == 2 ? true : false}
                      />
                      <label
                        className="custom-control-label collapsed"
                        htmlFor="methodtwo"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-controls="collapseTwo"
                        onClick={() => accordionFuntion(2)}
                      >
                        Cash On Delivery
                      </label>
                      <div
                        id="collapseTwo"
                        className={`collapse ${accordion == 2 ? "show" : ""}`}
                      >
                        <p>Pay with cash upon delivery.</p>
                      </div>
                    </li>
                  </ul>
                  <p>
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </p>
                  <button type="button" className="theme-btn style-two mt-15">
                    Place order
                  </button>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="shoping-cart-total mt-45 wow fadeInUp delay-0-4s">
                  <h4 className="form-title m-25">Cart Totals</h4>
                  <table>
                    <tbody>
                      {cartData.map((card) => (
                        <tr key={card.id}>
                          <td>
                            {card.title} <strong>× {card.quantity}</strong>
                          </td>
                          <td>${(card.quantity * card.price).toFixed(2)}</td>
                        </tr>
                      ))}

                      <tr>
                        <td>Shipping Fee</td>
                        <td>${shipping.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>Vat</td>
                        <td>${Number(vat).toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Order Total</strong>
                        </td>
                        <td>
                          <strong>${Number(totalPrice).toFixed(2)}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Checkout;
