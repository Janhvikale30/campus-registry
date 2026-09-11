import React from "react";

function ContactUs() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 85px)",
        background: "#fffdf8",
        padding: "70px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            color: "#192B4D",
            fontFamily: "Georgia, serif",
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "15px",
          }}
        >
          Contact Us
        </h1>

        <div
          style={{
            width: "70px",
            height: "3px",
            background: "#C49327",
            margin: "0 auto 45px",
          }}
        ></div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-md-5 mb-4">
            <div
              style={{
                border: "1px solid #ddd5c5",
                borderTop: "4px solid #192B4D",
                padding: "35px",
                height: "100%",
              }}
            >
              <h2
                style={{
                  color: "#192B4D",
                  fontFamily: "Georgia, serif",
                  marginBottom: "30px",
                }}
              >
                Get in Touch
              </h2>

              <p style={{ color: "#4d5d75", fontSize: "17px" }}>
                <strong style={{ color: "#192B4D" }}>Institute</strong>
                <br />
                Campus Registry
              </p>

              <p style={{ color: "#4d5d75", fontSize: "17px" }}>
                <strong style={{ color: "#192B4D" }}>Address</strong>
                <br />
                Jabalpur, Madhya Pradesh, India
              </p>

              <p style={{ color: "#4d5d75", fontSize: "17px" }}>
                <strong style={{ color: "#192B4D" }}>Email</strong>
                <br />
                info@campusregistry.com
              </p>

              <p style={{ color: "#4d5d75", fontSize: "17px" }}>
                <strong style={{ color: "#192B4D" }}>Phone</strong>
                <br />
                +91 98765 43210
              </p>

              <p style={{ color: "#4d5d75", fontSize: "17px" }}>
                <strong style={{ color: "#192B4D" }}>Office Hours</strong>
                <br />
                Monday - Saturday
                <br />
                9:00 AM - 5:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div
              style={{
                border: "1px solid #ddd5c5",
                borderTop: "4px solid #C49327",
                padding: "35px",
              }}
            >
              <h2
                style={{
                  color: "#192B4D",
                  fontFamily: "Georgia, serif",
                  marginBottom: "30px",
                }}
              >
                Send Us a Message
              </h2>

              <form>
                <div className="mb-3">
                  <label className="form-label" style={{ color: "#192B4D" }}>
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" style={{ color: "#192B4D" }}>
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" style={{ color: "#192B4D" }}>
                    Subject
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter subject"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" style={{ color: "#192B4D" }}>
                    Message
                  </label>

                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{
                    background: "#C49327",
                    color: "#192B4D",
                    border: "none",
                    padding: "12px 30px",
                    fontWeight: "600",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
