import React from 'react'

const TodoComponent = async() => {
   const response = await fetch("httpss://jsonplaceholder.typicode.com/todos/1");
   const data = await response.json();
   console.log(data)

  return (
    <div>
        <h1>{data.title}</h1>
      <p>{data.completed ? "Completed" : "Not Completed"}</p>
    </div>
  )
}

export default TodoComponent