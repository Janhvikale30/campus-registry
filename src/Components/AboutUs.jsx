import React from "react";

function AboutUs() {
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
          About Campus Registry
        </h1>

        <div
          style={{
            width: "70px",
            height: "3px",
            background: "#C49327",
            margin: "0 auto 45px",
          }}
        ></div>

        <div
          style={{
            border: "1px solid #ddd5c5",
            borderTop: "4px solid #192B4D",
            padding: "45px",
            background: "#fffdf8",
          }}
        >
          <h2
            style={{
              color: "#192B4D",
              fontFamily: "Georgia, serif",
              marginBottom: "20px",
            }}
          >
            About Us
          </h2>

          <p
            style={{
              color: "#4d5d75",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Campus Registry is an institute management portal designed to make
            academic administration simple, organized and efficient.
          </p>

          <p
            style={{
              color: "#4d5d75",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Our platform provides administrators with a single place to manage
            student records, courses and faculty information. It helps keep
            important academic information clear and easily accessible.
          </p>

          <h3
            style={{
              color: "#192B4D",
              fontFamily: "Georgia, serif",
              marginTop: "35px",
              marginBottom: "20px",
            }}
          >
            What We Manage
          </h3>

          <div className="row">
            <div className="col-md-4 mb-3">
              <div
                style={{
                  border: "1px solid #ddd5c5",
                  padding: "25px",
                  height: "100%",
                }}
              >
                <h4 style={{ color: "#192B4D" }}>Students</h4>
                <p style={{ color: "#4d5d75" }}>
                  Manage student records and academic information.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div
                style={{
                  border: "1px solid #ddd5c5",
                  padding: "25px",
                  height: "100%",
                }}
              >
                <h4 style={{ color: "#192B4D" }}>Courses</h4>
                <p style={{ color: "#4d5d75" }}>
                  Organize available courses and course details.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div
                style={{
                  border: "1px solid #ddd5c5",
                  padding: "25px",
                  height: "100%",
                }}
              >
                <h4 style={{ color: "#192B4D" }}>Faculty</h4>
                <p style={{ color: "#4d5d75" }}>
                  Maintain faculty information and assigned courses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
