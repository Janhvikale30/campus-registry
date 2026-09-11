import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Admindashboard from "./Components/Admindashboard";
import StudentList from "./Components/StudentList";

import Student1 from "./Components/Student1";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Student2 from "./Components/Student2";
import Student3 from "./Components/Student3";
import Student4 from "./Components/Student4";
import Student5 from "./Components/Student5";
import CourseList from "./Courses/CourseList";
import Course1 from "./Courses/Course1";
import Course2 from "./Courses/Course2";
import Course3 from "./Courses/Course3";
import Course4 from "./Courses/Course4";
import FacultyList from "./Faculty/FacultyList";
import Faculty1 from "./Faculty/Faculty1";
import Faculty2 from "./Faculty/Faculty2";
import Faculty4 from "./Faculty/Faculty3";

import Facultyl from "./Faculty/Facultyl";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/Contact";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />

        <Route path="/admin-dashboard/*" element={<Admindashboard />} />
        <Route
          path="/admin-dashboard/studentlist"
          element={<StudentList />}
        ></Route>
        <Route path="/student1" element={<Student1 />}></Route>
        <Route path="/student2" element={<Student2 />}></Route>
        <Route path="/student3" element={<Student3 />}></Route>
        <Route path="/student4" element={<Student4 />}></Route>
        <Route path="/student5" element={<Student5 />}></Route>
        <Route
          path="/admin-dashboard/courselist"
          element={<CourseList />}
        ></Route>
        <Route path="/course1" element={<Course1 />}></Route>
        <Route path="/course2" element={<Course2 />}></Route>
        <Route path="/course3" element={<Course3 />}></Route>
        <Route path="/course4" element={<Course4 />}></Route>
        <Route
          path="/admin-dashboard/facultylist"
          element={<FacultyList />}
        ></Route>
        <Route path="/faculty1" element={<Faculty1 />}></Route>
        <Route path="/faculty2" element={<Faculty2 />}></Route>
        <Route path="/faculty4" element={<Faculty4 />}></Route>
        <Route path="/facultyl" element={<Facultyl />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
