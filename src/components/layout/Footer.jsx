import React from "react";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Desi Burger Wala</h2>

        <p>Serving the Best Burger as best as we can.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @Desiburgerwala</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

       
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
     
      </aside>
    </footer>
  );
};

export default Footer;