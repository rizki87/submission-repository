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

const Total = ({course}) => {  
  const total = course.parts.reduce((s, {exercises}) => s + exercises, 0);
  return (
    <p>
      <b>total of {total} exercises</b> 
    </p>
  );
};

const Course = ({course}) => {
  return (
    <div>
      <Header course={course}/>    
      <Content course={course} />
      <Total course={course} />
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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
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