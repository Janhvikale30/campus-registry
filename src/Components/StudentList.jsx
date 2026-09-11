import React from "react";
import { useNavigate } from "react-router-dom";

function StudentList() {
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
          Student List
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
                <th style={{ padding: "15px" }}>Roll No</th>
                <th style={{ padding: "15px" }}>Student Name</th>
                <th style={{ padding: "15px" }}>View Details</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>101</td>
                <td>Aarav Sharma</td>
                <td>
                  <button style={goldButton} onClick={() => nav("/student1")}>
                    View Details
                  </button>
                </td>
              </tr>

              <tr>
                <td>102</td>
                <td>Priya Verma</td>
                <td>
                  <button style={goldButton} onClick={() => nav("/student2")}>
                    View Details
                  </button>
                </td>
              </tr>

              <tr>
                <td>103</td>
                <td>Rahul Patel</td>
                <td>
                  <button style={goldButton} onClick={() => nav("/student3")}>
                    View Details
                  </button>
                </td>
              </tr>

              <tr>
                <td>104</td>
                <td>Sneha Singh</td>
                <td>
                  <button style={goldButton} onClick={() => nav("/student4")}>
                    View Details
                  </button>
                </td>
              </tr>

              <tr>
                <td>105</td>
                <td>Aditya Joshi</td>
                <td>
                  <button style={goldButton} onClick={() => nav("/student5")}>
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

export default StudentList;
