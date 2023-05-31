import React from "react";


function Home() {
    return (
             
<div className="container">
                <div className="row" style={{marginTop: "80px"}}>
                    <div className="col-md-6">
                        <h1 style={{fontWeight: "bold", lineHeight: "45px"}}>
                            Easy <br/> scheduling <br/><span style={{color: "blue"}}>ahead</span>
                            </h1>
                                <p style={{fontSize: "20px", marginTop: "30px"}}>
                                    Calendly is your hub for scheduling meetings
                                    professionally and efficiently,eliminating the hassle of
                                    back-and-forth emails so you can get back to work
                                </p>
                                <div className="input-group" style={{marginTop: "30px"}}>
                                    <input type="text" className="form-control input1" placeholder="Enter  your email"/>
                                        <span className="input-group-btn">
                                            <button className="btn btn-default signup" type="button">Sign
                                                Up</button>
                                        </span>
                                </div>
                                <p style={{fontSize: "16px", paddingLeft: "40px" , paddingTop: "10px" , color: "grey"}}>Create your free account. No credit card required.</p>
                            </div>
                            <div className="col-md-6">
                                <img src="image/Calendly-Customer-Success.webp" alt="" className="img-responsive" style={{ height: "400px" , width: "500px" }}/>
                            </div>
                    </div>
                    <div className="row" style={{ marginTop: "50px"}}>
                        <div className="col-md-12" style={{backgroundColor: "#f6f3f3" }}>
                            <h1 className="text-center">
                                Simplified scheduling for more than <br/>
                                    <span style={{color: "blue" , fontWeight: "bolder"}}>10,000,000</span> users worldwide.
                            </h1>
                        </div>
                    </div>
                    <div className="row" style={{backgroundColor: "#f6f3f3" , height: "110px" , marginBottom: "70px"}} >
                        <div className="col-md-2"> <img src="image/Twilio-logo-red.svg" className="img-responsive imgg" alt=""/></div>
                        <div className="col-md-2"> <img src="image/Vector.svg" className="img-responsive imgg" alt=""/></div>
                        <div className="col-md-2"> <img src="image/VonageLogo.svg" className="img-responsive imgg" alt=""/></div>
                        <div className="col-md-2"> <img src="image/Compass__2_.svg" className="img-responsive imgg" alt=""/></div>
                        <div className="col-md-2"> <img src="image/Dropbox_logo_2017__1_.svg" className="img-responsive imgg" alt=""/></div>
                        <div className="col-md-2"> <img src="image/EBay_logo.svg" className="img-responsive imgg" alt=""/></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <p className="text-center" style={{position: "relative" , top: "0", left: "-9px" , backgroundColor: "blue", color: "white" , height: "20px" , width: "20px" ,borderRadius: "50%"}}>
                                1.
                            </p>
                            <p className="body1">
                                Create <br/> simple rules
                            </p>
                            <div className="body2" >
                                <p style={{paddingTop: "45px" , fontSize: "17px",  paddingLeft: "15px" }}>
                                    Let Calendly know your <br/>
                                        availability preferences and <br/>
                                            it'll do the work for you.
                                        </p>
                                    </div>
                            </div>
                            <div className="col-md-4">
                                <p className="text-center" style={{position: "relative" , top: "0" , left: "-9px" , backgroundColor: "blue" , color: "white" , height: "20px" , width: "20px" ,  borderRadius: "50%"}}>
                                    1.
                                </p>
                                <p className="body1">
                                    Share your <br/> link
                                </p>
                                <div className="body2" >
                                    <p style={{paddingTop: "45px" , fontSize: "17px" , paddingLeft: "15px"}}>
                                        Share guests your Calendly <br/>
                                            link or embed it on your <br/>
                                                website.
                                            </p>
                                        </div>
                                </div>
                                <div className="col-md-4">
                                    <p className="text-center" style={{position: "relative", top: "0" , left: "-9px" , backgroundColor: "blue" , color: "white" , height: "20px" , width: "20px" ,borderRadius: "50%"}}>
                                        1.
                                    </p>
                                    <p className="body1">
                                        Get booked
                                        </p>
                                        <div className="body2" >
                                            <p style={{paddingTop: "45px" ,  fontSize: "17px", paddingLeft: "15px" }}>
                                                They pick a time and the <br/>
                                                    event is added to your <br/> 
                                                        calender.
                                                    </p>
                                                </div>
                                        </div>
                                </div>
                            </div>
     );
}

export default Home;
