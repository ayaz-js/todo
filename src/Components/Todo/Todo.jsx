import React from 'react'
import Button from '../Button'
import './Todo.scss'

export const Todo = () => {

  return (
    <div className="todo">
      <div className="todo-title">To Do List</div>
      <div className="todo-btns">
        <div className="todo-btn">
          <Button>adsasd</Button>   
        </div>
        <div className="todo-btn">
          <Button>adsasd</Button>   
        </div>
      </div>
      <div className="todo-list">
        <p>побриться</p>
        <p>побриться</p>
        <p>побриться</p>
        <p>побриться</p>
        <p>побриться</p>
        <p>побриться</p>
      </div>
    </div>)
} 
