import React from 'react'

const Header = (props) => {  
  return (
    <div>      
      <h2>{props.name}</h2>
    </div>
  );
};

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

export default Course