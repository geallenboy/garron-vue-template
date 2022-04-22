import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">Home One</Link>
    </li>
    <li>
      <Link href="/index-2">Home Two</Link>
    </li>
    <li>
      <Link href="/index-3">Home Three</Link>
    </li>
  </Fragment>
);
export const Room = () => (
  <Fragment>
    <li>
      <Link href="/room-grid">Room Grid Style</Link>
    </li>
    <li>
      <Link href="/room-list">Room List Style</Link>
    </li>
    <li>
      <Link href="/room-details">Room Details</Link>
    </li>
  </Fragment>
);
export const Pages = () => (
  <Fragment>
    <li>
      <Link href="/services">Services</Link>
    </li>
    <li>
      <Link href="/restaurant">Restaurant</Link>
    </li>
    <li>
      <Link href="/gallery">Gallery</Link>
    </li>
    <li>
      <Link href="/offers">Offers</Link>
    </li>
    <li>
      <Link href="/menu">Menu</Link>
    </li>
    <li>
      <Link href="/places">Places</Link>
    </li>
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li>
      <Link href="/blog">Blog</Link>
    </li>
    <li>
      <Link href="/blog-details">Blog Details</Link>
    </li>
  </Fragment>
);
