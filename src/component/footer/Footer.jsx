
import visa from '../../assets/images/visa.png';
import maestro from '../../assets/images/maestro.png';
import americanexpress from '../../assets/images/american-express.png';
import mastercard from '../../assets/images/mastercard.png';

import './footer.scss'
function Footer(){
    return(
        <section className="footer m-0">
            <div className="container">
            <div className="innerfluid">
                <div className="row row-gap-4">
                <div className="col-lg-3 col-sm-6">
                    <div className="link_Heading">Main Links</div>
                    <ul className="linkGroup list-unstyled">
                    <li><a href="javascript:;" className="footer_Links"><span>About Us</span></a></li>
                    <li><a href="javascript:;" className="footer_Links"><span>Products</span></a></li>
                    <li><a href="javascript:;" className="footer_Links"><span>Blog</span></a></li>
                    <li><a href="javascript:;" className="footer_Links"><span>contact Us</span></a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="link_Heading">Useful Links</div>
                    <ul className="linkGroup list-unstyled">
                    <li><a href="javascript:;" className="footer_Links"><span>New Products</span></a></li>
                    <li><a href="javascript:;" className="footer_Links"><span>Privacy Policy</span></a></li>
                    <li><a href="javascript:;" className="footer_Links"><span>Terms &amp; Conditions</span></a></li>
                    <li><a href="javascript:;" className="footer_Links"><span>Shipping FAQ</span></a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="link_Heading">Follow Us</div>
                    <ul className="linkGroup list-unstyled">
                    <li><a href="javascript:;" className="footer_Links"><span>Instagram</span></a></li>
                    <li><a href="javascript:;" className="footer_Links"><span>Facebook</span></a></li>
                    <li><a href="javascript:;" className="footer_Links"><span>Youtube</span></a></li>
                    <li><a href="javascript:;" className="footer_Links"><span>Twitter</span></a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="link_Heading">Infomations</div>
                    <ul className="linkGroup list-unstyled">
                    <li><a href="javascript:;" className="footer_Links">29 SE 2nd Ave, Miami, Florida 33131, United States</a></li><a href="javascript:;" className="footer_Links">
                    </a><li><a href="javascript:;" className="footer_Links" /><a href="javascript:;" className="footer_Links">1200-425-1900</a></li>
                    <li><a href="javascript:;" className="footer_Links">contact@example.com</a></li>
                    <li><a href="javascript:;" className="footer_Links">1200-1800-1500</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="paymentsource">
                <div className="row align-items-center row-gap-3">
                <div className="col order-md-1 order-2"><p className="copyright text-md-start text-center">©Copyright 2023 Eccommerce | Design By <a href="https://www.helpfulinsightsolution.com/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top">HIPL</a></p></div>
                <div className="col-md-auto col-12 order-md-12 order-1">
                    <div className="row justify-content-center">
                    <div className="col-auto"><div className="paymentcard"><img src={visa} alt="visa card" /></div></div>
                    <div className="col-auto"><div className="paymentcard"><img src={maestro} alt="maestro card" /></div></div>
                    <div className="col-auto"><div className="paymentcard"><img src={americanexpress} alt="american-express card" /></div></div>
                    <div className="col-auto"><div className="paymentcard"><img src={mastercard} alt="master card" /></div></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}
export default Footer;