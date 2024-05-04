import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "Louis Vuitton",
    "status": true,
    "type": "Bravo",
    "quantity": 9117,
    "brand": "Evan Flores",
    "price": 452.85,
    "createdAt": 1710141660
  },
  {
    id: 2,
    name: "Johnson & Johnson",
    "status": false,
    "type": "Alfa",
    "quantity": 3064,
    "brand": "Arlene Wilson",
    "price": 901.31,
    "createdAt": 1710141660
  },
  {
    id: 4,
    name: "The Walt Disney",
    "status": false,
    "type": "Alfa",
    "quantity": 3128,
    "brand": "Philip Steward",
    "price": 510.3,
    "createdAt": 1710141660
  },
  {
    id: 5,
    name: "Mitsubishi",
    "status": true,
    "type": "Bravo",
    "quantity": 9892,
    "brand": "Jorge Black",
    "price": 828.9,
    "createdAt": 1710141660
  },
  {
    name: "Mitsubishi",
    "status": true,
    "type": "Bravo",
    "quantity": 9892,
    "brand": "Jorge Black",
    "price": 828.9,
    "createdAt": 1710747085,
    id: 38
  }, {
    name: "Mitsubishi",
    "status": false,
    "type": "Bravo",
    "quantity": "9892",
    "brand": "Jorge Black",
    "price": "828.9",
    "createdAt": 1710811028,
    id: 40
  }]
function CourseItem({ course, onClick }) {
  return (
    <div>
      <p>{course.type}</p>
      <p onClick={() => onClick(course)}>{course.name}</p>
      <p>{course.quantity}</p>
    </div>
  )
}

function Button({ title, href, onClick }) {
  let Component = 'button'
  const props = {};
  if (href) {
    Component = 'a'
    props.href = href
  }
  if (onClick) {
    props.onClick = onClick
  }
  return (
    <Component className="btnOnclick" {...props}>{title}</Component>
  )
}


export default function TodoList() {
  const handleClick = (course) => {
    console.log(course.name);
  }

  const [checked, setChecked] = useState([])

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter(item => item !== id)
      }
      else {
        return [...prev, id]
      }
    })
  }
  const handleSubmit = () => {
    console.log({ id: checked });
  }
  
  
  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    console.log(storageJobs);
    return storageJobs
  });

  const handleSubmitAdd = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]

      const jsonJobs = JSON.stringify(newJobs)

      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
    setJob('')
  }
  return (
    <>
      <h3 className="titleName">Hedy Lamarr's Todos</h3>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />

      {courses.map(course => (
        <CourseItem
          key={course.id}
          course={course}
          onClick={handleClick}
        />
      ))}
      <Button
        title="Click me now!"
        href="https://www.youtube.com/watch?v=5SU6P-cqoJw&list=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&index=19"
        onClick={() => console.log(Math.random())}
      />
      <div className="wrap-form">
        {courses.map(course => (
          <div key={course.id}>
            <input type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            />
            {course.name}
          </div>
        ))}
        <button onClick={handleSubmit}>Register</button>
        <input value={job}
          onChange={e => setJob(e.target.value)} />
        <button onClick={handleSubmitAdd}>Add</button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>{job}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

