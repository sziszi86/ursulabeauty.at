import Link from 'next/link'
import { Fragment } from 'react'

export const Home = () => {}
export const Services = () => {
  return (
    <Fragment>
      <li>
        <Link legacyBehavior href='/services'>
          all services
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='/service-details'>
          service details
        </Link>
      </li>
    </Fragment>
  )
}
export const Pages = () => {
  return (
    <Fragment>
      <li>
        <Link legacyBehavior href='/booking'>
          booking
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='/faqs'>
          faqs
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='/team'>
          team member
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='/testimonials'>
          testimonials
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='/coming-soon'>
          coming soon
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='/404'>
          404 error
        </Link>
      </li>
    </Fragment>
  )
}
export const About = () => {
  return (
    <Fragment>
      <li>
        <Link legacyBehavior href='/about'>
          About us
        </Link>
      </li>
    </Fragment>
  )
}
export const Portfolio = () => {
  return (
    <Fragment>
      <li>
        <Link legacyBehavior href='/portfolio'>
          Portfolio grid
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='/portfolio-masonry'>
          Portfolio masonry
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='/portfolio-details'>
          Portfolio details
        </Link>
      </li>
    </Fragment>
  )
}
export const Blog = () => {
  return (
    <Fragment>
      <li>
        <Link legacyBehavior href='/blog'>
          blog list
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='/blog-grid'>
          blog Grid
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='/blog-details'>
          blog details
        </Link>
      </li>
    </Fragment>
  )
}
export const Shop = () => {
  return (
    <Fragment>
      <li>
        <Link legacyBehavior href='/shop'>
          shop page
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='/product-details'>
          Product details
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='/cart'>
          Cart Page
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='/checkout'>
          Checkout
        </Link>
      </li>
      <li>
        <Link legacyBehavior href='/pricing'>
          pricing
        </Link>
      </li>
    </Fragment>
  )
}
export const Contact = () => {
  return (
    <Fragment>
      <li>
        <Link legacyBehavior href='/contact'>
          Contact
        </Link>
      </li>
    </Fragment>
  )
}
