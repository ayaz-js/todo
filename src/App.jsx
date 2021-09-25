import React from 'react'
import './App.scss'
import { Todo } from './Components/Todo'


const App = () => {
  return  (
    <div className="app">
      <div className="todos">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  )
}
 

export default App