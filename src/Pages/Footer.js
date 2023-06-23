import { Link } from "react-router-dom";
import { IoLogoInstagram, IoLogoTwitter, IoLogoFacebook } from "react-icons/io5";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-links">
                <ul className="socials-icons">
                    <li><IoLogoInstagram /></li>
                    <li><IoLogoFacebook /></li>
                    <li><IoLogoTwitter /></li>
                </ul>
                <ul className="links">
                    <li><h3>Quick Links</h3></li>
                    <li>Menu</li>
                    <li>Posts</li>
                    <li>About</li>
                </ul>
                <ul className="links">
                    <li><h3>Partnership</h3></li>
                    <li>Partner with us</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="copyright">
                <p>All Rights Reserved 2023, Made with ❤ by Chop&Grill</p>
            </div>
        </footer>
    )
}

export default Footer;