import React from "react";


function CourseCard({ title, description, students }) {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
      <p>{students} students enrolled</p>
    </div>
  );
}

export default CourseCard