
import './form.scss'
function Form(){
    return(
        <section className="signUpsection m-0">
            <div className="container innerfluid h-100">
            <div className="row h-100 align-items-center justify-content-center">
                <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-10 col-12">
                <div className="card formcard">
                    <div className="card-body">
                    <div className="innerformbody" id="loginGroup">
                        <ul className="nav nav-pills row mb-4" id="pills-tab" role="tablist">
                        <li className="nav-item col-6" role="presentation"><button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Sign In</button></li>
                        <li className="nav-item col-6" role="presentation"><button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Sign Up</button></li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                            <form action>
                            <div className="row row-gap-4">
                                <div className="col-12">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email Address</label>
                                </div>
                                </div>
                                <div className="col-12">
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="password" placeholder="******" />
                                    <label htmlFor="password">Your Password</label>
                                </div>
                                </div>
                                <div className="col-12">
                                <div className="row align-items-center">
                                    <div className="col checkbox">
                                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                                    </div>
                                    <div className="col-auto"><a href="javascript:;" className="lostPassword" id="forgot_password">Lost Password?</a></div>
                                </div>
                                </div>
                                <div className="col-12"><button type="button" className="btn themebtn fill w-100">LOG IN<span><img src="assets/images/icon/right_arrow.svg" alt="arrow" /></span></button></div>
                            </div>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                            <form action>
                            <div className="row row-gap-4">
                                <div className="col-12">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="user" placeholder="Username" />
                                    <label htmlFor="user">Username</label>
                                </div>
                                </div>
                                <div className="col-12">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email Address</label>
                                </div>
                                </div>
                                <div className="col-12">
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="password" placeholder="******" />
                                    <label htmlFor="password">Your Password</label>
                                </div>
                                </div>
                                <div className="col-12 checkbox d-flex align-items-start">
                                <input className="form-check-input" type="checkbox" defaultValue id="t&c" />
                                <label className="form-check-label" htmlFor="t&c">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</label>
                                </div>
                                <div className="col-12"><button type="button" className="btn themebtn fill w-100">REGISTER<span><img src="assets/images/icon/right_arrow.svg" alt="arrow" /></span></button></div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div className="forgotPasswordBody" id="forgotBody">
                        <form action>
                        <div className="row row-gap-4">
                            <div className="col-12 createaccount">We will send you an email to reset your password</div>
                            <div className="col-12">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email Address</label>
                            </div>
                            </div>
                            <div className="col-12"><button type="button" className="btn themebtn fill w-100" id="p_submit">SUBMIT<span><img src="assets/images/icon/right_arrow.svg" alt="arrow" /></span></button></div>
                            <div className="col-12 text-end"><a href="javascript:;" className="lostPassword" id="backToLogin">Back To Login</a></div>
                        </div>
                        </form>
                    </div>
                    <div className="forgotPasswordBody otpFeild" id="otpFeild">
                        <form action>
                        <div className="row row-gap-4">
                            <div className="col-12 createaccount">Please Enter OTP</div>
                            <div className="col-12 verification-code">
                            <ul className="otpbox verification-code--inputs otpbox">
                                <input type="text" maxLength={1} className="form-control box" />
                                <input type="text" maxLength={1} className="form-control box" />
                                <input type="text" maxLength={1} className="form-control box" />
                                <input type="text" maxLength={1} className="form-control box" />
                                <input type="text" maxLength={1} className="form-control box" />
                                <input type="text" maxLength={1} className="form-control box" />
                            </ul>
                            </div>
                            <div className="col-12"><button type="button" className="btn themebtn fill w-100">SUBMIT<span><img src="assets/images/icon/right_arrow.svg" alt="arrow" /></span></button></div>
                            <div className="col-12 text-end"><a href="javascript:;" className="lostPassword" id="backToPassword">Change Email Address</a></div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Form;