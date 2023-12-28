import Heading from './../heading/Heading'
import product1 from '../../assets/images/choose-product-card-img1.png'
import product2 from '../../assets/images/choose-product-card-img2.png'
import product3 from '../../assets/images/choose-product-card-img3.png'
import './choosecard.scss'
function Choosecard(){
    return(
        <section className="chooseSecton">
            <div className="container innerfluid">
                <div className="row">
                    <div className="col-12"><div className="heading">Choose Us <span>Choose What You Want</span></div></div>
                    <div className="col-12">
                    <div className="row row-gap-3 gx-3">
                        <div className="col-sm-4">
                        <div className="card productCard">
                            <div className="card-body">
                            <div className="card-img"><img src={product1} className="w-100" alt="" /></div>
                            <a href="javascript:;" className="productdetails">
                                <div className="productName">Face</div>
                                <div className="p_category">care</div>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="card productCard">
                            <div className="card-body">
                            <div className="card-img"><img src={product3} className="w-100" alt="" /></div>
                            <a href="javascript:;" className="productdetails darkmode">
                                <div className="productName">Hair</div>
                                <div className="p_category">care</div>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-4">
                        <div className="card productCard">
                            <div className="card-body">
                            <div className="card-img"><img src={product2} className="w-100" alt="" /></div>
                            <a href="javascript:;" className="productdetails">
                                <div className="productName">Body</div>
                                <div className="p_category">Health</div>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Choosecard;