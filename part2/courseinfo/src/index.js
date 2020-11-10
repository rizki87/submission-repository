import React from "react";
import ReactDOM from "react-dom";

const Header = ({course}) => {  
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

const Part = (props) => {  
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
};

const Content = ({course}) => {  
  // const x = course.parts.map(part => part)
  // console.log("x = ", x);
  return (
    <div>
      {course.parts.map(part => 
        <Part 
          key={part.id}
          name={part.name}
          exercises={part.exercises}
        />
      )}
    </div>
  );
};

const Course = ({course}) => {
  return (
    <div>
      <Header course={course}/>    
      <Content course={course} />
    </div>
  )
}

const App = () => {  
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));