import React from "react";


function Teams() {
    return (
        <div className="container">
       
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-md-6">
            <h1 style={{ fontWeight: "bold" }}>
              <span style={{ color: "blue" }}>Power up</span> your <br />
              teams
            </h1>
            <p style={{ fontSize: "20px", marginTop: "20px", marginBottom: "40px" }}>
              Calendly gives you control over team scheduling with a
              standardized, scalable process. It's secure, easy to manage, and integrates with your team's
              favorite tools, so you can get everyone working as efficiently and effectively as possible.
            </p>
            <button style={{
              height: "40px", width: "150px", borderRadius: "20px",
              border: "none", backgroundColor: "blue", color: "white", fontWeight: "bold"
            }}>Start for Free</button>
            <button style={{
              height: "40px", width: "150px", borderRadius: "20px", border: "solid black 1px",
              fontWeight: "bold", marginLeft: "25px", backgroundColor: "white"
            }}>Contact Sales</button>
          </div>
          <div className="col-md-6">
            <img src="image/Teams_Hero_Image_Small.webp" alt="" className="img-responsive"
              style={{ height: "380px" }} />
          </div>
        </div>
        <div className="col-md-12 text-center" style={{ fontWeight: "bolder", color: "#256D85", marginTop: "60px", marginBottom: "60px" }}>
          <h1>Streamline tasks, extend team <br />reach</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src="image/Calendly-IT_Small__3.webp" className="img-responsive" alt="" style={{ height: "390px" }} />
          </div>
          <div className="col-md-6">
            <p style={{ color: "#1363df", fontWeight: "bold" }}>AUTOMATED ASSIGNMENT</p>
            <h3 style={{ fontSize: "30px", color: "#256D85" }}>Control how your team gets booked</h3>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>With Calendly, you can offer sessions that are a few minutes or a few hours, for one invitee or a group. Automated round-robin, first available, or geography-based assignments let you easily divvy up meetings in any way that works for your team members</p>
          </div>
        </div>
        <div className="row" style={{ marginTop: "80px" }}>
          <div className="col-md-12 text-center" style={{ fontWeight: "bolder" }}>
            <p style={{ color: "#1363df" }}>SOLUTIONS</p>
            <h2 style={{ color: "#256D85", marginTop: "10px", marginBottom: "30px" }}>The right Calendly for the work you do</h2>
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-md-3">
            <div className="thumbnail" style={{ height: "380px", border: "0.5px inset rgb(231, 237, 246)" }}>
              <img src="image/Calendly-Collect-Payments.webp" alt="..." style={{ height: "170px" }} />
              <div className="caption">
                <h3 style={{ color: "#256D85" }}>Sales</h3>
                <p style={{ fontSize: "15px" }}>Get to your best leads faster.</p>
                <br /> <br />
                <p style={{ color: "#1363df", fontWeight: "bolder", paddingTop: "21px" }}>Learn more </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail" style={{ height: "380px", border: "0.5px inset rgb(231, 237, 246)" }}>
              <img src="image/Calendly-Improve-Attendance.webp" alt="..." style={{ height: "170px" }} />
              <div className="caption">
                <h3 style={{ color: "#256D85" }}>Sales</h3>
                <p style={{ fontSize: "15px" }}>Less emailing, more closing.</p> <br />
                <br />
                <p style={{ color: "#1363df", fontWeight: "bolder", paddingTop: "21px" }}>Learn more </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail" style={{ height: "380px", border: "0.5px inset rgb(231, 237, 246)" }}>
              <img src="image/Calendly-Graph.webp" alt="..." style={{ height: "170px" }} />
              <div className="caption">
                <h3 style={{ color: "#256D85" }}>Sales</h3>
                <p style={{ fontSize: "15px" }}>Connect with customers when it matters</p> <br /> <br />
                <p style={{ color: "#1363df", fontWeight: "bolder" }}>Learn more </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail" style={{ height: "380px", border: "0.5px inset rgb(231, 237, 246)" }}>
              <img src="image/Calendly-Sales-Small.webp" alt="..." style={{ height: "170px" }} />
              <div className="caption">
                <h3 style={{ color: "#256D85" }}>Education</h3>
                <p style={{ fontSize: "15px" }}>Boost student success</p> <br /> <br />
                <p style={{ color: "#1363df", fontWeight: "bolder", paddingTop: "21px" }}>Learn more </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "60px" }}>
          <div className="col-md-3">
            <h1 style={{ fontWeight: "bold" }}>
              Easy <br /><span style={{ color: "#1363df" }}>ahead</span>
            </h1>
            <p>
              We take the work out of connecting with others
              so you can accomplish more.
            </p>
            <select className="form-control">
              <option>English</option>
              <option>French</option>
              <option>Twi</option>
              <option>Hausa</option>
            </select>
          </div>
          <div className="col-md-3">
            <h3>About</h3>
            <p>About Calendly</p>
            <p>Contact Sales</p>
            <p>Newsroom</p>
            <p>Careers</p>
            <p>Security</p>
          </div>
          <div className="col-md-3">
            <h3>Solutions</h3>
            <p>Customer Success</p>
            <p>Sales</p>
            <p>Recruiting</p>
            <p>Education</p>
            <p>Marketing</p>
          </div>
          <div className="col-md-3">
            <h3>Popular Features</h3>
            <p>Embed Calendly</p>
            <p>Availability</p>
            <p>Sending Notifications</p>
            <p>Using Calendly Mobile</p>
          </div>
        </div>
      </div>
       
        
    );
}

export default Teams;
