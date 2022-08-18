import React from "react";
import './styles/FooterStyles.css'

function Footer(){
    return(
        <footer className="footer-distributed">

            <div className="footer-left">

                <h3>Celeste  <span>Ceramics</span></h3>

                <p className="footer-links">
                    <a href="/" className="link-1">Home</a>

                    <a href="/blog">Blogul</a>

                    <a href="/newsletter">Newsletter</a>

                    <a href="/about">About</a>

                    <a href="/terms-and-conditions">Terms and conditions</a>

                    <a href="/contact">Contact</a>
                </p>

                <p className="footer-company-name">CelesteCeramic © 2019</p>
            </div>

            <div className="footer-center">

                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>41-23, Herăstrău Street</span>Bucharest, Sect.1</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>0771 452 617</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:celeste.ceramicasrl@gmail.com">celeste.ceramicasrl@gmail.com</a></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>About the company</span>
                    Authentic porcelain products, shaped out of passion for beauty! Made 100% by hand!
                    Choose differently, adding an artistic touch to your home and life!
                </p>

                <div className="footer-icons">

                    <a href="https://www.facebook.com/celesteceramicasrl/" className="fa fa-facebook"></a>
                    <a href="https://www.instagram.com/celesteceramica/" className="fa fa-instagram"></a>
                    <a href="#" className="fa fa-linkedin"></a>
                    <a href="#" className="fa fa-github"></a>

                </div>

            </div>

        </footer>
    )
}
export default Footer;