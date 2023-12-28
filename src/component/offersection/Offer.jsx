import arrow from '../../assets/images/icon/right_arrow.svg'
import './Offer.scss'
function Offer(){
    return(
        <section className="offerSection m0">
            <div className="container">
                <div className="row row-gap-lg-5 row-gap-sm-4 row-gap-3 mx-0">
                    <div className="col-12 productName">One-colored <br />jackets up to</div>
                    <div className="col-12 discount">-20%</div>
                    <div className="col-12"><a href="javascript:;" className="btn themebtn fill">Shop Now <span><img src={arrow} alt="arrow" /></span></a></div>
                </div>
            </div>
        </section>
    );
}
export default Offer ;