import React from "react";
import { useNavigate } from "react-router-dom";

function FacultyList() {
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
          Faculty List
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
                <th style={{ padding: "15px" }}>Faculty ID</th>
                <th style={{ padding: "15px" }}>Faculty Name</th>
                <th style={{ padding: "15px" }}>Course</th>
                <th style={{ padding: "15px" }}>View Details</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>201</td>
                <td>Rajesh Sharma</td>
                <td>Java Full Stack Development</td>
                <td>
                  <button style={goldButton} onClick={() => nav("/faculty1")}>
                    View Details
                  </button>
                </td>
              </tr>

              <tr>
                <td>202</td>
                <td>Neha Verma</td>
                <td>Web Development</td>
                <td>
                  <button style={goldButton} onClick={() => nav("/faculty2")}>
                    View Details
                  </button>
                </td>
              </tr>

              <tr>
                <td>203</td>
                <td>Amit Patel</td>
                <td>Data Science</td>
                <td>
                  <button style={goldButton} onClick={() => nav("/faculty3")}>
                    View Details
                  </button>
                </td>
              </tr>

              <tr>
                <td>204</td>
                <td>Pooja Singh</td>
                <td>Cloud Computing</td>
                <td>
                  <button style={goldButton} onClick={() => nav("/faculty4")}>
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

export default FacultyList;
