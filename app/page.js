"use client"
import React, { useState } from 'react'

const Page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }])
    settitle("")
    setdesc("")
  }

  // Delete function
  const deleteHandler = (index) => {
    const updatedTasks = mainTask.filter((task, i) => i !== index)
    setmainTask(updatedTasks)
  }

  let renderTask = <h2 className="text-center text-xl text-gray-400">No Task available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li 
          key={i} 
          className="flex items-center justify-between p-4 m-3 bg-gray-900 border border-gray-800 rounded-lg shadow-md"
        >
          <div>
            <h5 className="font-bold text-white">{t.title}</h5>
            <h6 className="text-gray-400">{t.desc}</h6>
          </div>
          <button 
            onClick={() => deleteHandler(i)} 
            className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-900 transition"
          >
            Remove
          </button>
        </li>
      )
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white">
      {/* Glassy Header */}
      <h1 className="backdrop-blur-lg bg-white/10 text-white p-5 text-5xl font-bold text-center shadow-lg rounded-lg">
        Todo List
      </h1>

      {/* Form */}
      <form onSubmit={submitHandler} className="flex flex-col items-center mt-5">
        <input 
          type="text" 
          className="w-80 text-xl border-2 px-3 py-2 mb-3 bg-gray-900 border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-700"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input 
          type="text" 
          className="w-80 text-xl border-2 px-3 py-2 mb-3 bg-gray-900 border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-700"
          placeholder="Enter description here" 
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <button 
          type="submit" 
          className="bg-purple-800 text-xl text-white px-6 py-3 font-bold rounded-lg hover:bg-purple-900 transition shadow-md"
        >
          Add Task
        </button>
      </form>

      <hr className="my-6 border-gray-800" />

      {/* Task List */}
      <div className="p-6">
        <ul>
          {renderTask}
        </ul>
      </div>
    </div>
  )
}

export default Page
