import Link from "next/link";
import { Fragment } from "react";

export const Home = () => {
  return (
    <Fragment>
      <li>
        <Link href="/">Beauty Salon</Link>
      </li>
      <li>
        <Link href="/index2">Spa</Link>
      </li>
      <li>
        <Link href="/index3">Hair Salon</Link>
      </li>
    </Fragment>
  );
};
export const Services = () => {
  return (
    <Fragment>
      <li>
        <Link href="/services">all services</Link>
      </li>
      <li>
        <Link href="/service-details">service details</Link>
      </li>
    </Fragment>
  );
};
export const Pages = () => {
  return (
    <Fragment>
      <li>
        <Link href="/booking">booking</Link>
      </li>
      <li>
        <Link href="/faqs">faqs</Link>
      </li>
      <li>
        <Link href="/team">team member</Link>
      </li>
      <li>
        <Link href="/testimonials">testimonials</Link>
      </li>
      <li>
        <Link href="/coming-soon">coming soon</Link>
      </li>
      <li>
        <Link href="/404">404 error</Link>
      </li>
    </Fragment>
  );
};
export const About = () => {
  return (
    <Fragment>
      <li>
        <Link href="/about">About us</Link>
      </li>
    </Fragment>
  );
};
export const Portfolio = () => {
  return (
    <Fragment>
      <li>
        <Link href="/portfolio">Portfolio grid</Link>
      </li>
      <li>
        <Link href="/portfolio-masonry">Portfolio masonry</Link>
      </li>
      <li>
        <Link href="/portfolio-details">Portfolio details</Link>
      </li>
    </Fragment>
  );
};
export const Blog = () => {
  return (
    <Fragment>
      <li>
        <Link href="/blog">blog list</Link>
      </li>
      <li>
        <Link href="/blog-grid">blog Grid</Link>
      </li>
      <li>
        <Link href="/blog-details">blog details</Link>
      </li>
    </Fragment>
  );
};
export const Shop = () => {
  return (
    <Fragment>
      <li>
        <Link href="/shop">shop page</Link>
      </li>
      <li>
        <Link href="/product-details">Product details</Link>
      </li>
      <li>
        <Link href="/cart">Cart Page</Link>
      </li>
      <li>
        <Link href="/checkout">Checkout</Link>
      </li>
      <li>
        <Link href="/pricing">pricing</Link>
      </li>
    </Fragment>
  );
};
export const Contact = () => {
  return (
    <Fragment>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </Fragment>
  );
};
