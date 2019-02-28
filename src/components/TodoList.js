import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, disToggleTodo }) => (
  <div style={{ 
    marginTop:'7.0em',
    marginLeft:'35%'
    }}>
      <ul>
        {todos.map(todo =>
          <Todo key={todo.id} {...todo} onClick={() => disToggleTodo(todo.id)} />
        )}
      </ul>
  </div>

)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({

    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
    
    })
    .isRequired).isRequired,
  disToggleTodo: PropTypes.func.isRequired
}

export default TodoList