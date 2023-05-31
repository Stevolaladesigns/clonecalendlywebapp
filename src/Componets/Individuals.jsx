

function Individuals() {
    return (
        <div className="container">
    
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-md-6">
            <h1 style={{ fontSize: "60px" }}>
              The genius way <br />
              to work <span style={{ color: "blue" }}>better</span>
            </h1>
            <p style={{ fontSize: "20px" }}>
              Calendly makes it easy to work smarter when you're
              <br />
              working solo. Meetings, sessions, and appointments
              <br />
              become more efficient ways to achieve success and
              <br />
              accomplish goals.
            </p>
            <button
              style={{
                height: "50px",
                borderRadius: "50px",
                width: "170px",
                backgroundColor: "black",
                color: "white",
                border: "none"
              }}
            >
              Sign up for free
            </button>
          </div>
          <div className="col-md-6">
            <img src="image/Calendly-Individuals-Hero.webp" className="img-responsive" alt="" style={{ height: "400px" }} />
          </div>
        </div>
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-md-6">
            <img src="image/Calendly-Recruiting-Small.webp" className="img-responsive" alt="" style={{ height: "350px" }} />
          </div>
          <div className="col-md-6" style={{ marginTop: "80px" }}>
            <p style={{ color: "grey" }}>A CURATED CALENDAR</p>
            <h1 style={{ fontWeight: "bold" }}>Book up efficiently</h1>
            <p style={{ fontSize: "20px" }}>
              When invitees select a meeting slot from your
              schedule, they
              <br />
              only see the times you're available, and only the length
              and
              <br />
              type of meeting you want to have. Your schedule fills
              up
              <br />
              efficiently, and everyone avoids excess email
              exchanges.
            </p>
          </div>
        </div>
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-md-6" style={{ marginTop: "80px" }}>
            <p style={{ color: "grey" }}>AUTOMATED NOTIFICATIONS & FOLLOW-UPS</p>
            <h1 style={{ fontWeight: "bold" }}>Work like you have a <br /> personal assistant</h1>
            <p style={{ fontSize: "20px" }}>
              Because Calendly automates administrative tasks like
              sending reminder emails and follow-ups, you can focus
              on
              <br />
              the work that builds your business and brings
              customers
              <br />
              back for more
            </p>
          </div>
          <div className="col-md-6">
            <img src="image/Calendly-IT_Small__3.webp" className="img-responsive" alt="" style={{ height: "350px" }} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" style={{ marginTop: "50px" }}>
            <img src="image/banner.jpg" className="img-responsive banner" alt="" style={{ height: "250px", width: "100%" }} />
            <div className="body3">
              <h1 style={{ color: "white", fontWeight: "bolder", wordSpacing: "10px" }}>
                Find just-right plans <br />
                for individuals and <br />
                small teams
              </h1>
              <button
                style={{
                  height: "50px",
                  borderRadius: "20px",
                  width: "150px",
                  fontWeight: "bold",
                  border: "none"
                }}
              >
                See our plans
              </button>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-md-3">
            <h1 style={{ fontWeight: "bold" }}>
              Easy <br /><span style={{ color: "blue" }}>ahead</span>
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

     export default Individuals;
