import React from 'react'
import { Button } from '../../../Button'

export const TodoItem = ({todo, onRemove}) => {
    
  return (
    <div className="todo-item">
      <p className="todo-item__text">{todo}</p>
      <Button onClick={onRemove} className="todo-item__remove-btn">X</Button>
    </div>
  )
}

