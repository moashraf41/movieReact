import React, { Component } from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className={styles.footer + " mt-5"}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h5 className={styles.title}>About Us</h5>
                <p className={styles.description + " text-white"}>
                  We offer high quality products for your daily needs. Explore
                  our wide range and enjoy a seamless shopping experience.
                </p>
              </div>
              <div className="col-md-4">
                <h5 className={styles.title}>Quick Links</h5>
                <ul className={styles.listUnstyled}>
                  <li className={styles.listItem}>
                    <a href="home.html" className={styles.link}>
                      Home
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="about.html" className={styles.link}>
                      About
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="cart.html" className={styles.link}>
                      Cart
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <a href="logout.html" className={styles.link}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5 className={styles.title}>Follow Us</h5>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>
                    <FaFacebookF />
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <FaInstagram />
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <FaTwitter />
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.copyright}>
              <small>© 2025 Kaira. All Rights Reserved.</small>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
