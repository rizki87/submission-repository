import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {  
  return (
    <div>      
      <h2>{props.name}</h2>
    </div>
  );
};

// const Part = (props) => { 
//   return (
//     <div>
//       <p>
//         {props.name} {props.exercises}
//       </p>
//     </div>
//   );
// };

const Content = (props) => {  
  return (
      <p>
        {props.name} {props.exercises}
      </p>
  );
};

const Total = ({courses}) => {  
  const total = courses.parts.reduce((s, {exercises}) => s + exercises, 0);
  return (
    <p>
      <b>total of {total} exercises</b> 
    </p>
  );
};

const Course = ({courses}) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course =>         
        <div key={course.id}>
        <Header name={course.name} />
          <div>
            {course.parts.map(part => 
              <Content key={part.id} name={part.name} exercises={part.exercises} />
            )}        
          </div>
          <Total courses={course} /> 
        </div>                 
      )} 
    </div>
  )
}

const App = () => {  
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Course courses={courses} />       
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));