// import Home1ProjectIsotop from "../src/components/isotop/Home1ProjectIsotop";
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FeedBackSliderWithLogo } from '../src/components/slider/FeedBackSlider'
import Layout from '../src/layout/Layout'

const Home1ProjectIsotop = dynamic(
  () => import('../src/components/isotop/Home1ProjectIsotop'),
  {
    ssr: false
  }
)

const Index = () => {
  return (
    <Layout pageName={'Home One'} header={1}>
      {/* Hero Section Start */}
      <section className='hero-section rel z-1 bg-butter'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-8 col-sm-10'>
              <div className='hero-content mt-200 mb-220'>
                <span className='bg-text'>Beauty</span>
                <h1 className='wow fadeInUp delay-0-2s'>
                  Natural Beaulty spa salon
                </h1>
                <div className='hero-btn mt-30 wow fadeInUp delay-0-4s'>
                  <Link href='/about'>
                    <a className='theme-btn'>
                      Learn more <i className='fas fa-long-arrow-alt-right' />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='hero-right-image'
          style={{
            backgroundImage: 'url(assets/images/hero/hero-right.jpg)'
          }}
        />
      </section>
      {/* Hero Section End */}
      {/* About Section Start */}
      <section className='about-section pt-150 rpt-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <div className='about-left rmb-55 wow fadeInLeft delay-0-2s'>
                <img src='assets/images/about/about-left.jpg' alt='About' />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='about-content wow fadeInRight delay-0-2s'>
                <div className='section-title mb-30'>
                  <span className='bg-text'>about</span>
                  <span className='sub-title'>Who We Are</span>
                  <h2>Quality &amp; Natural Beauty Salon</h2>
                </div>
                <p>
                  Sed ut persiciatis unde omnis iste natus error sit voluptate
                  maccusantium doloremque laudantium, totam rem aperiam eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explic aboemo enim ipsa
                </p>
                <ul className='list-style-one pt-20 pb-25'>
                  <li>Natural Beauty Salon</li>
                  <li>Professional Women Spa Service</li>
                  <li>Experience Hair Treatments</li>
                </ul>
                <Link href='/about'>
                  <a className='theme-btn style-two'>
                    read more <i className='fas fa-long-arrow-alt-right' />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
      {/* Features Section Start */}
      <section className='features-section rel z-1 pt-150 rpt-100'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-3 align-self-end'>
              <div className='features-image left-image wow fadeInDown delay-0-2s'>
                <img
                  src='assets/images/services/feature-left.jpg'
                  alt='Feature'
                />
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='features-section-content'>
                <div className='section-title text-center mb-15'>
                  <span className='bg-text'>Features</span>
                  <span className='sub-title'>What We Do</span>
                  <h2>We provide Natural Treatments</h2>
                </div>
                <div className='features-item-wrap pb-150'>
                  <div className='feature-item wow fadeInUp delay-0-2s'>
                    <div className='icon'>
                      <i className='flaticon-laser' />
                    </div>
                    <div className='feature-content'>
                      <h4>
                        <Link href='/service-details'>Clinical Treatments</Link>
                      </h4>
                      <span>Organic Modern Treatments</span>
                    </div>
                  </div>
                  <div className='feature-item wow fadeInUp delay-0-4s'>
                    <div className='icon'>
                      <i className='flaticon-relax' />
                    </div>
                    <div className='feature-content'>
                      <h4>
                        <Link href='/service-details'>Toxins Free</Link>
                      </h4>
                      <span>Organic Modern Treatments</span>
                    </div>
                  </div>
                  <div className='feature-item wow fadeInUp delay-0-6s'>
                    <div className='icon'>
                      <i className='flaticon-spa' />
                    </div>
                    <div className='feature-content'>
                      <h4>
                        <Link href='/service-details'>Organic Products</Link>
                      </h4>
                      <span>Organic Modern Treatments</span>
                    </div>
                  </div>
                  <div className='feature-item wow fadeInUp delay-0-8s'>
                    <div className='icon'>
                      <i className='flaticon-hand-cream' />
                    </div>
                    <div className='feature-content'>
                      <h4>
                        <Link href='/service-details'>No Side Affects</Link>
                      </h4>
                      <span>Organic Modern Treatments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3'>
              <div className='features-image right-image wow fadeInUp delay-0-2s'>
                <img
                  src='assets/images/services/feature-right.jpg'
                  alt='Feature'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='reatures-leaf'>
          <img src='assets/images/shapes/feature-leaf.png' alt='Leaf' />
        </div>
      </section>
      {/* Features Section End */}
      {/* Project Section Start */}
      <Home1ProjectIsotop />
      {/* Project Section End */}
      {/* Feedback Section Start */}
      <div className='feedback-section rel z-1 bg-butter'>
        <div className='container-fluid p-0'>
          <div className='row'>
            <div className='col-xl-6'>
              <div
                className='feedback-left-image bgs-cover h-100 wow fadeInLeft delay-0-2s'
                style={{
                  backgroundImage:
                    'url(assets/images/testimonials/testimonial-left.jpg)'
                }}
              />
            </div>
            <div className='col-xl-6'>
              <div className='feedback-wrap rel my-145 rm-100 text-center wow fadeInRight delay-0-2s'>
                <span className='bg-text'>Feedback</span>
                <FeedBackSliderWithLogo />
              </div>
            </div>
          </div>
        </div>
        <div className='feedback-leaf'>
          <img
            src='assets/images/shapes/feedback-leaf.png'
            alt='Feedback Leaf'
          />
        </div>
      </div>
      {/* Feedback Section End */}
      {/* Products Section Start */}
      <section className='products-section text-center pt-140 rpt-90 pb-115 rpb-65'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-8 col-lg-9 col-md-10'>
              <div className='section-title mb-65'>
                <span className='bg-text'>products</span>
                <span className='sub-title'>popular product</span>
                <h2>Visit Our Shop to collect beauty products</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='product-item wow fadeInUp delay-0-2s'>
                <div className='image'>
                  <Link href='/product-details'>
                    <a>
                      <img
                        src='assets/images/products/product-1.jpg'
                        alt='Product'
                      />
                    </a>
                  </Link>
                  <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                  </div>
                </div>
                <h5>
                  <Link href='/product-details'>Face Cream Winter</Link>
                </h5>
                <span className='price'>Price $253.59</span>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='product-item wow fadeInUp delay-0-4s'>
                <div className='image'>
                  <Link href='/product-details'>
                    <img
                      src='assets/images/products/product-2.jpg'
                      alt='Product'
                    />
                  </Link>
                  <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                  </div>
                </div>
                <h5>
                  <Link href='/product-details'>Organic Hair Oil</Link>
                </h5>
                <span className='price'>Price $253.59</span>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='product-item wow fadeInUp delay-0-6s'>
                <div className='image'>
                  <Link href='/product-details'>
                    <img
                      src='assets/images/products/product-3.jpg'
                      alt='Product'
                    />
                  </Link>
                  <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                  </div>
                </div>
                <h5>
                  <Link href='/product-details'>Natural Hair Colors</Link>
                </h5>
                <span className='price'>Price $253.59</span>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className='product-item wow fadeInUp delay-0-8s'>
                <div className='image'>
                  <Link href='/product-details'>
                    <img
                      src='assets/images/products/product-4.jpg'
                      alt='Product'
                    />
                  </Link>
                  <div className='rating'>
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                    <i className='fas fa-star' />
                  </div>
                </div>
                <h5>
                  <Link href='/product-details'>Summer Face Cream</Link>
                </h5>
                <span className='price'>Price $253.59</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section End */}
      {/* Booking Section Start */}
      <section className='booking-section pb-20'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-6'>
              <div className='booking-item'>
                <div
                  className='booking-image wow fadeInUp delay-0-2s'
                  style={{
                    backgroundImage:
                      'url(assets/images/booking/booking-left.jpg)'
                  }}
                />
                <div className='booking-content wow fadeInUp delay-0-4s'>
                  <span className='bg-text'>Booking</span>
                  <h3>Working Hours</h3>
                  <p>
                    Quis autem vel eum repreh enderit voluptate velit esse quame
                    molestiae consequatur veillum
                  </p>
                  <ul>
                    <li>
                      <i className='far fa-clock' />
                      <div className='booking-info'>
                        <p>
                          Mon to Fri: 7:30 am — 1:00 am <br />
                          Sat: 9:00 am — 1:00 am <br />
                          Sun: 9:00 am — 11:30 pm
                        </p>
                        <Link href='/booking'>
                          <a className='theme-btn'>
                            appointment{' '}
                            <i className='fas fa-long-arrow-alt-right' />
                          </a>
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='booking-item'>
                <div
                  className='booking-image wow fadeInUp delay-0-6s'
                  style={{
                    backgroundImage:
                      'url(assets/images/booking/booking-right.jpg)'
                  }}
                />
                <div className='booking-content wow fadeInUp delay-0-8s'>
                  <span className='bg-text'>address</span>
                  <h3>Contact us</h3>
                  <p>
                    Quis autem vel eum repreh enderit voluptate velit esse quame
                    molestiae consequatur veillum
                  </p>
                  <ul>
                    <li>
                      <i className='far fa-clock' />
                      <div className='booking-info'>
                        <h5>Location</h5>
                        <p>523 Main Street, 2nd Floor, New York City</p>
                      </div>
                    </li>
                    <li>
                      <i className='far fa-clock' />
                      <div className='booking-info'>
                        <h5>Hotline</h5>
                        <p>Call : +012 (345) 6789</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Booking Section End */}
      {/* Category Section Start */}
      <section className='category-section'>
        <div className='category-item bg-butter wow fadeInUp delay-0-2s'>
          <i className='flaticon-nail' />
          <div className='category-title'>
            <span className='bg-text'>Category</span>
            <h4>
              <Link href='/service-details'>Nail Polish</Link>
            </h4>
          </div>
          <p>Quis autem velum reprender eoluptate velit esse</p>
          <Link href='/service-details'>
            <a className='read-more'>
              read more <i className='fas fa-long-arrow-alt-right' />
            </a>
          </Link>
          <div className='for-border' />
        </div>
        <div className='category-item bg-light-gray wow fadeInUp delay-0-4s'>
          <i className='flaticon-eyebrow' />
          <div className='category-title'>
            <span className='bg-text'>Category</span>
            <h4>
              <Link href='/service-details'>Brow Polish</Link>
            </h4>
          </div>
          <p>Quis autem velum reprender eoluptate velit esse</p>
          <Link href='/service-details'>
            <a className='read-more'>
              read more <i className='fas fa-long-arrow-alt-right' />
            </a>
          </Link>
          <div className='for-border' />
        </div>
        <div className='category-item bg-butter wow fadeInUp delay-0-6s'>
          <i className='flaticon-hairdresser' />
          <div className='category-title'>
            <span className='bg-text'>Category</span>
            <h4>
              <Link href='/service-details'>Hair Dresser</Link>
            </h4>
          </div>
          <p>Quis autem velum reprender eoluptate velit esse</p>
          <Link href='/service-details'>
            <a className='read-more'>
              read more <i className='fas fa-long-arrow-alt-right' />
            </a>
          </Link>
          <div className='for-border' />
        </div>
        <div className='category-item bg-light-gray wow fadeInUp delay-0-8s'>
          <i className='flaticon-pedicure' />
          <div className='category-title'>
            <span className='bg-text'>Category</span>
            <h4>
              <Link href='/service-details'>Foot Massage</Link>
            </h4>
          </div>
          <p>Quis autem velum reprender eoluptate velit esse</p>
          <Link href='/service-details'>
            <a className='read-more'>
              read more <i className='fas fa-long-arrow-alt-right' />
            </a>
          </Link>
          <div className='for-border' />
        </div>
        <div className='category-item bg-butter wow fadeInUp delay-1-0s'>
          <i className='flaticon-cosmetics' />
          <div className='category-title'>
            <span className='bg-text'>Category</span>
            <h4>
              <Link href='/service-details'>Cosmetics</Link>
            </h4>
          </div>
          <p>Quis autem velum reprender eoluptate velit esse</p>
          <Link href='/service-details'>
            <a className='read-more'>
              read more <i className='fas fa-long-arrow-alt-right' />
            </a>
          </Link>
          <div className='for-border' />
        </div>
      </section>
      {/* Category Section End */}
      {/* Blog Section Start */}
      <section className='blog-section rel z-1 pt-110 rpt-60 mb-105 rmb-55'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-8 col-lg-9 col-md-10'>
              <div className='section-title text-center mb-65'>
                <span className='bg-text'>Blog</span>
                <span className='sub-title'>News &amp; Blog</span>
                <h2>Latest News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-4 col-md-6'>
              <div className='news-item wow fadeInUp delay-0-2s'>
                <div className='image'>
                  <Link href='/blog-details'>
                    <img src='assets/images/news/news-1.jpg' alt='News' />
                  </Link>
                </div>
                <div className='news-header'>
                  <div className='title-meta'>
                    <ul>
                      <li>
                        <i className='far fa-user-circle' />{' '}
                        <a href='#'>Robert Doe</a>
                      </li>
                      <li>
                        <i className='far fa-comment-dots' />{' '}
                        <a href='#'>Comments (05)</a>
                      </li>
                    </ul>
                    <h4>
                      <Link href='/blog-details'>
                        Smase Podcast Episode Chris Ferdinande
                      </Link>
                    </h4>
                    <p>
                      Temporibus laboriosam veritatis expedita tenetur sequi
                      molestiae
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='news-item wow fadeInUp delay-0-4s'>
                <div className='image'>
                  <Link href='/blog-details'>
                    <img src='assets/images/news/news-2.jpg' alt='News' />
                  </Link>
                </div>
                <div className='news-header'>
                  <div className='title-meta'>
                    <ul>
                      <li>
                        <i className='far fa-user-circle' />{' '}
                        <a href='#'>Robert Doe</a>
                      </li>
                      <li>
                        <i className='far fa-comment-dots' />{' '}
                        <a href='#'>Comments (05)</a>
                      </li>
                    </ul>
                    <h4>
                      <Link href='/blog-details'>
                        Useful React Hooks That You Can Projects
                      </Link>
                    </h4>
                    <p>
                      Penetur sequi molestiae dicta hic omnis eligendi deserunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='news-item wow fadeInUp delay-0-6s'>
                <div className='image'>
                  <Link href='/blog-details'>
                    <img src='assets/images/news/news-3.jpg' alt='News' />
                  </Link>
                </div>
                <div className='news-header'>
                  <div className='title-meta'>
                    <ul>
                      <li>
                        <i className='far fa-user-circle' />{' '}
                        <a href='#'>Robert Doe</a>
                      </li>
                      <li>
                        <i className='far fa-comment-dots' />{' '}
                        <a href='#'>Comments (05)</a>
                      </li>
                    </ul>
                    <h4>
                      <Link href='/blog-details'>
                        Smase Podcast Episode Chris Ferdinande
                      </Link>
                    </h4>
                    <p>
                      Architecto cumque porro, veniam suscipit consequatur
                      harum,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End */}
    </Layout>
  )
}
export default Index
