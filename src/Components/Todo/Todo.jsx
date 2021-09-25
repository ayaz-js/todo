import React, { useRef, useState } from 'react'
import { Button } from '../Button'
import { TodoItem }  from './parts'
import './Todo.scss'


export const Todo = () => {
  const [todos, setTodos] = useState([])
  const isNoTodos = todos.length === 0
 
  const onRemove = () => {
    
    const todosSlieced = [...todos]
    todosSlieced.pop()
    
    setTodos(todosSlieced)
  }

  const TodoList = () => (
    <>
      {isNoTodos
        ? <p className='todo-not-found'>There is no todos</p>
        : todos.map((todo, index) => {
          return (
            <TodoItem key={index} todo={todo} onRemove={onRemove} />
          )
        })}
    </>
  )

  const inputElement = useRef(null)

  const onClearHandler = () => {
    setTodos([])
  }
  const onAddHandler = () => {
    const { value } = inputElement.current
    setTodos([...todos, value])
  }

  return (
    <div className="todo">
      <div className="todo__header">
        <div className="header__title-button">
          <div className="header__title">To Do List</div>
          <div className="header__btns">
            <div className="header__btn">
              <Button className='header__btn-item' onClick={onClearHandler}>Clear</Button>
            </div>
            <div className="header__btn">
              <Button className='header__btn-item' onClick={onAddHandler}>Add</Button>
            </div>
          </div>
        </div>
        <div className="header__input">
          <input ref={inputElement} placeholder='Todo text' type="text" />
        </div>
      </div>
      <div className="todo__list">
        <TodoList />
      </div>
    </div>)
} 
