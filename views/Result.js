// Result.js
import React from "react";

function Result(props) {
  return (
    <div style={{ backgroundColor: 'seagreen', height: '100vh' }}>
      <h1>Result</h1>
      <p>Total Marks: {props.totalMarks}</p>
    </div>
  );
}

export default Result;
