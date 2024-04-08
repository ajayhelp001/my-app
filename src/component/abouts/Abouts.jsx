import React from 'react'
import Signature from '../../assets/images/signature.png'
import Ceo1 from '../../assets/images/ceo1.jpg'
import Ceo from '../../assets/images/ceo.jpg'
import Brow_mackup from '../../assets/images/brow_mackup.jpg'
import Make_up from '../../assets/images/make-up.jpg'
import right_arrow from '../../assets/images/icon/right_arrow.svg'
import './abouts.scss'

const Abouts = () => {
  return (
    <>
    <section className="ourstorysection">
        <div className="container innerfluid">
            <div className="row row-gap-4">
                <div className="col-xl-6">
                    <div className="row">
                        <div className="col-12"><div className="heading">About Us<span>About Our Story</span></div></div>
                        <div className="col-12">
                            <div className="text">
                                <p>Welcome to  E-commerce, your number one source for all things [product type]. We're dedicated to providing you the very best of [product category], with an emphasis on quality, customer service, and uniqueness.</p>
                                <p>Founded in 2023 by <span>Alina</span>, E-commerce has come a long way from its beginnings in [initial location]. When [Founder's Name] first started out, their passion for [specific passion related to the product] drove them to start their own business.</p>
                                <p>We now serve customers all over the world and are thrilled that we're able to turn our passion into our own website. We hope you enjoy our products as much as we enjoy offering them to you.</p>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="row authoreInfo">
                                <div className="col-auto beforeGroup">
                                    <div className="signature"><img src={Signature} alt="signature"/></div>
                                </div>
                                <div className="col-auto">
                                    <div className="authore">
                                        <ul>
                                            <li><a href="tel:1200-425-1900">1200-425-1900</a></li>
                                            <li><a href="mailto:contact@example.com">contact@example.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 imgSide">
                    <div className="row">
                        <div className="col-7">
                            <div className="lhs_img">
                                <div className="leftImg"><img src={Ceo1}  alt="img"/></div>
                            </div>
                        </div>
                        <div className="col-5 d-flex align-items-end">
                            <div className="rhs_img">
                                <div className="leftImg"><img src={Ceo}  alt="img"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="mackupsectin m0">
        <div className="container innerfluid">
            <div className="row innerbody row-gap-lg-0 row-gap-5">
                <div className="col-12">
                    <div className="row align-items-center mx-0 gx-0 row-gap-3">
                        <div className="col-lg-6 col-12">
                            <div className="mackupimg"><img src={Brow_mackup} alt="online_shopping"/></div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="row contentSide">
                                <div className="col-12"><div className="heading">They’re Kinda Our Best Thing!<span>BROW BESTSELLERS</span></div></div>
                                <div className="col-12 loremText">Whatever Your Summer Looks Like, Bring Your Own Heat With Up To 25% Off Lumin Brand.Pellentesque Ipsum Dui, Laoreet Vitae Ex In, Pellentesque Aliquam Leo.</div>
                                <div className="col-12"><a href="javascript:;" className="btn themebtn">Shop Now <span><img src={right_arrow} alt="arrow"/></span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row align-items-center mx-0 gx-0 row-gap-3">
                        <div className="col-lg-6 col-12 order-lg-2">
                            <div className="mackupimg"><img src={Make_up} alt="online_shopping"/></div>
                        </div>
                        <div className="col-lg-6 col-12 order-lg-1">
                            <div className="row contentSide">
                                <div className="col-12"><div className="heading">Try On Your Perfect Best Makeup!<span>BESTSELLERS</span></div></div>
                                <div className="col-12 loremText">Whatever Your Summer Looks Like, Bring Your Own Heat With Up To 25% Off Lumin Brand.Pellentesque Ipsum Dui, Laoreet Vitae Ex In, Pellentesque Aliquam Leo.</div>
                                <div className="col-12"><a href="javascript:;" className="btn themebtn">Shop Now <span><img src={right_arrow} alt="arrow"/></span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  );
}

export default Abouts;