import { Link } from "react-router-dom";

import "./css/Footer.css"


function Footer() {
    return (
        <footer className="page-footer">
            <div className="footer-logo">
                <Link to="https://ignacioalbiol.tech/" target="_blank"
                    rel="noopener noreferrer" aria-label="Go to IAP Dev Web Page">
                    <img src="IAP-Dev512.png" className="logo-img" alt="IAP Dev Logo" />
                </Link>
                <p className="logo-text">2024</p>
            </div>
        </footer>
    );
}

export default Footer;