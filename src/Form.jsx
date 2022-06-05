import React, { useState } from "react";

const Form = () => {
  const courseTemplate = { course: "", creditHours: "", grade: "" };
  const [courses, setCourses] = useState([
    courseTemplate,
    courseTemplate,
    courseTemplate,
  ]);
  const [grade, setgrade] = useState([]);
  const addCourse = () => {
    courses.length <= 4
      ? setCourses([...courses, courseTemplate])
      : setCourses(courses);
  };
  const onChange = (e, index) => {
    const unpdatedCourse = courses.map((course, i) =>
      index === i
        ? Object.assign(course, { [e.target.name]: e.target.value })
        : course
    );
    setCourses(unpdatedCourse);
  };
  const submitHandler = () => {
    courses.map((course) =>
      course.grade.toLowerCase() === "a+"
        ? setgrade([...grade, 4])
        : course.grade.toLowerCase() === "a"
        ? setgrade([...grade, 4])
        : course.grade.toLowerCase() === "a-"
        ? setgrade([...grade, 3.7])
        : course.grade.toLowerCase() === "b+"
        ? setgrade([...grade, 3.3])
        : course.grade.toLowerCase() === "b"
        ? setgrade([...grade, 3])
        : course.grade.toLowerCase() === "b-"
        ? setgrade([...grade, 2.7])
        : course.grade.toLowerCase() === "c+"
        ? setgrade([...grade, 2.3])
        : course.grade.toLowerCase() === "c"
        ? setgrade([...grade, 2])
        : course.grade.toLowerCase() === "c-"
        ? setgrade([...grade, 1.7])
        : course.grade.toLowerCase() === "d+"
        ? setgrade([...grade, 1.3])
        : course.grade.toLowerCase() === "d"
        ? setgrade([...grade, 1])
        : setgrade([...grade, 0])
    );
    console.log(grade);
  };
  return (
    <div>
      {courses.map((course, index) => (
        <div className="" key={index}>
          <input
            type="text"
            name="course"
            placeholder="Course Name"
            value={course.course}
            onChange={(e) => onChange(e, index)}
          />
          <input
            type="text"
            name="creditHours"
            placeholder="Credit Hours"
            value={course.creditHours}
            onChange={(e) => onChange(e, index)}
          />
          <input
            type="text"
            name="grade"
            placeholder="Grade"
            value={course.grade}
            onChange={(e) => onChange(e, index)}
          />
        </div>
      ))}
      <button className="btn btn-danger" onClick={addCourse}>
        Add More
      </button>
      <button className="btn btn-success" onClick={submitHandler}>
        Submit
      </button>
    </div>
  );
};

export default Form;
