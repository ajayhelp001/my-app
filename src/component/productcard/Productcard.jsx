import './productcard.scss'
import productimg1 from '../../assets/images/product/product-img-1.png'
import productimg2 from '../../assets/images/product/product-img-2.png'
import productimg3 from '../../assets/images/product/product-img-3.png'
import productimg4 from '../../assets/images/product/product-img-4.png'
import productimg5 from '../../assets/images/product/product-img-5.png'
import productimg6 from '../../assets/images/product/product-img-6.png'
import productimg7 from '../../assets/images/product/product-img-7.png'
import wishlist from '../../assets/images/icon/wishlist.svg'
import view from '../../assets/images/icon/view.svg'
import start from '../../assets/images/icon/start.svg'
import right_arrow from '../../assets/images/icon/right_arrow.svg'
function Productcard(){
    return(
        <section className="trendingProduct">
            <div className="container">
                <div className="row">
                <div className="col-12"><div className="heading">Trending Products <span>Best Selling Product</span></div></div>
                </div>
                <div className="row g-sm-3 g-2">
                <div className="col-xl-3 col-md-4 col-6">
                    <div className="card pr_Card">
                    <div className="card-body">
                        <div className="productBody">
                        <div className="productImg">
                            <img src={productimg1} className="img1" alt="product img 1" />
                            <img src={productimg2} className="img2" alt="product img 2" />
                        </div>
                        <div className="offers">
                            <span className="new">new</span>
                            <span>-15%</span>
                        </div>
                        <div className="viewicon">
                            <ul className="list-unstyled seeIcon">
                            <li><a href="javascript:;"><img src={wishlist} alt="like" /></a></li>
                            <li><a href="javascript:;"><img src={view} alt="view" /></a></li>
                            </ul>
                        </div>
                        <div className="overlay">
                            <a href="javascript:;" className="btn themebtn fill cart">Add To Cart<span><img src={right_arrow} alt="arrow" /></span></a>
                        </div>
                        </div>
                        <div className="contant-body">
                        <div className="row row-gap-sm-3 row-gap-2">
                            <div className="col-12"><div className="productName"><a href="javascript:;" className="pName">Poutsicle Hydrating Lip Stain.</a> <span className="bName">REVLON</span></div></div>
                            <div className="col-12">
                            <div className="values">
                                <div className="prich">$150.00 <span>$200.00</span></div>
                                <div className="rating">
                                <ul className="starts list-unstyled">
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><div className="totalRating">(50)</div></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <span className="forborder" />
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-6">
                    <div className="card pr_Card">
                    <div className="card-body">
                        <div className="productBody">
                        <div className="productImg">
                            <img src={productimg3} className="img1" alt="product img 1" />
                            <img src={productimg4} className="img2" alt="product img 2" />
                        </div>
                        <div className="offers">
                            {/* <span class="new">new</span> */}
                            <span>-25%</span>
                        </div>
                        <div className="viewicon">
                            <ul className="list-unstyled seeIcon">
                            <li><a href="javascript:;"><img src={wishlist} alt="like" /></a></li>
                            <li><a href="javascript:;"><img src={view} alt="view" /></a></li>
                            </ul>
                        </div>
                        <div className="overlay">
                            <a href="javascript:;" className="btn themebtn fill cart">Add To Cart<span><img src={right_arrow} alt="arrow" /></span></a>
                        </div>
                        </div>
                        <div className="contant-body">
                        <div className="row row-gap-sm-3 row-gap-2">
                            <div className="col-12"><div className="productName"><a href="javascript:;" className="pName">Velvet Red Charm</a> <span className="bName">AQUA KISS</span></div></div>
                            <div className="col-12">
                            <div className="values">
                                <div className="prich">$150.00 <span>$200.00</span></div>
                                <div className="rating">
                                <ul className="starts list-unstyled">
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><div className="totalRating">(50)</div></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <span className="forborder" />
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-6">
                    <div className="card pr_Card">
                    <div className="card-body">
                        <div className="productBody">
                        <div className="productImg selected">
                            <img src={productimg2} className="img1" alt="product img 1" />
                            <img src={productimg2} className="img2" alt="product img 2" />
                        </div>
                        <div className="offers">
                            {/* <span class="new">new</span> */}
                            <span>-15%</span>
                        </div>
                        <div className="viewicon">
                            <ul className="list-unstyled seeIcon">
                            <li><a href="javascript:;"><img src={wishlist} alt="like" /></a></li>
                            <li><a href="javascript:;"><img src={view} alt="view" /></a></li>
                            </ul>
                        </div>
                        <div className="overlay">
                            <a href="javascript:;" className="btn themebtn fill cart">Add To Cart<span><img src={right_arrow} alt="arrow" /></span></a>
                        </div>
                        </div>
                        <div className="contant-body">
                        <div className="row row-gap-sm-3 row-gap-2">
                            <div className="col-12"><div className="productName"><a href="javascript:;" className="pName">Hydrating Waves</a> <span className="bName">SEA BREEZE</span></div></div>
                            <div className="col-12">
                            <div className="values">
                                <div className="prich">$150.00 <span>$200.00</span></div>
                                <div className="rating">
                                <ul className="starts list-unstyled">
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><div className="totalRating">(50)</div></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <span className="forborder" />
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-6">
                    <div className="card pr_Card">
                    <div className="card-body">
                        <div className="productBody">
                        <div className="productImg selected">
                            <img src={productimg5} className="img1" alt="product img 1" />
                            <img src={productimg2} className="img2" alt="product img 2" />
                        </div>
                        <div className="offers">
                            {/* <span class="new">new</span> */}
                            <span>-15%</span>
                        </div>
                        <div className="viewicon">
                            <ul className="list-unstyled seeIcon">
                            <li><a href="javascript:;"><img src={wishlist} alt="like" /></a></li>
                            <li><a href="javascript:;"><img src={view} alt="view" /></a></li>
                            </ul>
                        </div>
                        {/* <div class="out_off_stock">Out Of Stock</div> */}
                        <div className="overlay ">
                            <a href="javascript:;" className="btn themebtn fill cart outoffstock">Out Of Stock</a>
                        </div>
                        </div>
                        <div className="contant-body">
                        <div className="row row-gap-sm-3 row-gap-2">
                            <div className="col-12"><div className="productName"><a href="javascript:;" className="pName">Organic Jojoba Blend</a> <span className="bName">LASH LUXE</span></div></div>
                            <div className="col-12">
                            <div className="values">
                                <div className="prich">$150.00 <span>$200.00</span></div>
                                <div className="rating">
                                <ul className="starts list-unstyled">
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><div className="totalRating">(50)</div></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <span className="forborder" />
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-6">
                    <div className="card pr_Card">
                    <div className="card-body">
                        <div className="productBody">
                        <div className="productImg">
                            <img src={productimg6} className="img1" alt="product img 1" />
                            <img src={productimg7} className="img2" alt="product img 2" />
                        </div>
                        <div className="offers">
                            <span className="new">new</span>
                            <span>-15%</span>
                        </div>
                        <div className="viewicon">
                            <ul className="list-unstyled seeIcon">
                            <li><a href="javascript:;"><img src={wishlist} alt="like" /></a></li>
                            <li><a href="javascript:;"><img src={view} alt="view" /></a></li>
                            </ul>
                        </div>
                        <div className="overlay">
                            <a href="javascript:;" className="btn themebtn fill cart">Add To Cart<span><img src={right_arrow} alt="arrow" /></span></a>
                        </div>
                        </div>
                        <div className="contant-body">
                        <div className="row row-gap-sm-3 row-gap-2">
                            <div className="col-12"><div className="productName"><a href="javascript:;" className="pName">Nourishing Herbal Cleanse</a> <span className="bName">RADIANCE</span></div></div>
                            <div className="col-12">
                            <div className="values">
                                <div className="prich">$150.00 <span>$200.00</span></div>
                                <div className="rating">
                                <ul className="starts list-unstyled">
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><div className="totalRating">(50)</div></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <span className="forborder" />
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-6">
                    <div className="card pr_Card">
                    <div className="card-body">
                        <div className="productBody">
                        <div className="productImg">
                            <img src={productimg1} className="img1" alt="product img 1" />
                            <img src={productimg2} className="img2" alt="product img 2" />
                        </div>
                        <div className="offers">
                            {/* <span class="new">new</span> */}
                            <span>-25%</span>
                        </div>
                        <div className="viewicon">
                            <ul className="list-unstyled seeIcon">
                            <li><a href="javascript:;"><img src={wishlist} alt="like" /></a></li>
                            <li><a href="javascript:;"><img src={view} alt="view" /></a></li>
                            </ul>
                        </div>
                        <div className="overlay">
                            <a href="javascript:;" className="btn themebtn fill cart">Add To Cart<span><img src={right_arrow} alt="arrow" /></span></a>
                        </div>
                        </div>
                        <div className="contant-body">
                        <div className="row row-gap-sm-3 row-gap-2">
                            <div className="col-12"><div className="productName"><a href="javascript:;" className="pName">Velvet Red Charm</a> <span className="bName">AQUA KISS</span></div></div>
                            <div className="col-12">
                            <div className="values">
                                <div className="prich">$150.00 <span>$200.00</span></div>
                                <div className="rating">
                                <ul className="starts list-unstyled">
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><div className="totalRating">(50)</div></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <span className="forborder" />
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-6">
                    <div className="card pr_Card">
                    <div className="card-body">
                        <div className="productBody">
                        <div className="productImg">
                            <img src={productimg3} className="img1" alt="product img 1" />
                            <img src={productimg4} className="img2" alt="product img 2" />
                        </div>
                        <div className="offers">
                            {/* <span class="new">new</span> */}
                            <span>-25%</span>
                        </div>
                        <div className="viewicon">
                            <ul className="list-unstyled seeIcon">
                            <li><a href="javascript:;"><img src={wishlist} alt="like" /></a></li>
                            <li><a href="javascript:;"><img src={view} alt="view" /></a></li>
                            </ul>
                        </div>
                        <div className="overlay">
                            <a href="javascript:;" className="btn themebtn fill cart">Add To Cart<span><img src={right_arrow} alt="arrow" /></span></a>
                        </div>
                        </div>
                        <div className="contant-body">
                        <div className="row row-gap-sm-3 row-gap-2">
                            <div className="col-12"><div className="productName"><a href="javascript:;" className="pName">Velvet Red Charm</a> <span className="bName">AQUA KISS</span></div></div>
                            <div className="col-12">
                            <div className="values">
                                <div className="prich">$150.00 <span>$200.00</span></div>
                                <div className="rating">
                                <ul className="starts list-unstyled">
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><div className="totalRating">(50)</div></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <span className="forborder" />
                    </div>
                </div>
                <div className="col-xl-3 col-md-4 col-6">
                    <div className="card pr_Card">
                    <div className="card-body">
                        <div className="productBody">
                        <div className="productImg selected">
                            <img src={productimg2} className="img1" alt="product img 1" />
                            <img src={productimg2} className="img2" alt="product img 2" />
                        </div>
                        <div className="offers">
                            {/* <span class="new">new</span> */}
                            <span>-15%</span>
                        </div>
                        <div className="viewicon">
                            <ul className="list-unstyled seeIcon">
                            <li><a href="javascript:;"><img src={wishlist} alt="like" /></a></li>
                            <li><a href="javascript:;"><img src={view} alt="view" /></a></li>
                            </ul>
                        </div>
                        <div className="overlay">
                            <a href="javascript:;" className="btn themebtn fill cart">Add To Cart<span><img src={right_arrow} alt="arrow" /></span></a>
                        </div>
                        </div>
                        <div className="contant-body">
                        <div className="row row-gap-sm-3 row-gap-2">
                            <div className="col-12"><div className="productName"><a href="javascript:;" className="pName">Hydrating Waves</a> <span className="bName">SEA BREEZE</span></div></div>
                            <div className="col-12">
                            <div className="values">
                                <div className="prich">$150.00 <span>$200.00</span></div>
                                <div className="rating">
                                <ul className="starts list-unstyled">
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><span><img src={start} alt="star" /></span></li>
                                    <li><div className="totalRating">(50)</div></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <span className="forborder" />
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Productcard;