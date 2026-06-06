import "../styles/Footer.css";

import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>SOFIA</h2>

          <p>
            Luxury jewelry crafted with elegance
            and timeless beauty.
          </p>

          <div className="social-icons">

            <FiInstagram />

            <FiFacebook />

            <FiTwitter />

          </div>

        </div>

        <div className="footer-links">

          <h3>Collection</h3>

          <ul>
            <li>Necklaces</li>
            <li>Rings</li>
            <li>Bracelets</li>
            <li>Earrings</li>
          </ul>

        </div>

        <div className="footer-links">

          <h3>Support</h3>

          <ul>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 SOFIA Jewelry
      </div>

    </footer>
  );
}

export default Footer;