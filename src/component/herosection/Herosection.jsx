import slider from '../../assets/images/slider-1.png';
import right_arrow from '../../assets/images/icon/right_arrow.svg';
import './hero.scss'

function Herosection(){
    return(
        <section className="herosection m-0">
            <div className="container innerfluid">
                <div className="row h-100 align-items-center justify-content-between">
                    <div className="col-sm-6 h-100 animationpart d-flex align-items-sm-end order-sm-1 order-2">
                    <div className="productPart">
                        <span className="animated circle1" />
                        <span className="animated circle2" />
                        <img src={slider} className="slidesImg" alt="slider-1" />
                    </div>
                    </div>
                    <div className="col-xxl-5 col-sm-6 order-sm-2 order-1">
                    <div className="row">
                        <div className="col-12"><div className="subheading">Best Ear Headphones</div></div>
                        <div className="col-12"><div className="mainheading">Find <span>Best</span> Matley Sound</div></div>
                        <div className="col-12 loremtext">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex id enim veniam quas soluta.</div>
                        <div className="col-12"><a href="javascript:;" className="btn themebtn">Shop Now <span><img src={right_arrow} alt="arrow" /></span></a></div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Herosection;