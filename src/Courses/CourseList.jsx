import React from "react";
import { useNavigate } from "react-router-dom";

function CourseList() {
  const nav = useNavigate();

  return (
    <div
      style={{
        minHeight: "calc(100vh - 85px)",
        background: "#fffdf8",
        padding: "60px 80px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <h1
          style={{
            color: "#192B4D",
            fontFamily: "Georgia, serif",
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "12px",
          }}
        >
          Course List
        </h1>

        <div
          style={{
            width: "60px",
            height: "3px",
            background: "#C49327",
            margin: "0 auto 40px",
          }}
        ></div>

        <div
          style={{
            background: "#fffdf8",
            border: "1px solid #ddd5c5",
            borderTop: "4px solid #192B4D",
            padding: "25px",
          }}
        >
          <table
            className="table text-center align-middle"
            style={{ marginBottom: 0 }}
          >
            <thead>
              <tr style={{ background: "#192B4D", color: "white" }}>
                <th style={{ padding: "15px" }}>Course ID</th>
                <th style={{ padding: "15px" }}>Course Name</th>
                <th style={{ padding: "15px" }}>Duration</th>
                <th style={{ padding: "15px" }}>View Details</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>101</td>
                <td>Java Full Stack Development</td>
                <td>6 Months</td>
                <td>
                  <button style={goldButton} onClick={() => nav("/course1")}>
                    View Details
                  </button>
                </td>
              </tr>

              <tr>
                <td>102</td>
                <td>Web Development</td>
                <td>4 Months</td>
                <td>
                  <button style={goldButton} onClick={() => nav("/course2")}>
                    View Details
                  </button>
                </td>
              </tr>

              <tr>
                <td>103</td>
                <td>Data Science</td>
                <td>6 Months</td>
                <td>
                  <button style={goldButton} onClick={() => nav("/course3")}>
                    View Details
                  </button>
                </td>
              </tr>

              <tr>
                <td>104</td>
                <td>Cloud Computing</td>
                <td>5 Months</td>
                <td>
                  <button style={goldButton} onClick={() => nav("/course4")}>
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const goldButton = {
  background: "#C49327",
  color: "#192B4D",
  border: "none",
  padding: "8px 18px",
  fontWeight: "600",
};

export default CourseList;
