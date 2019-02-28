import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => {
  return ( 
      <div>
        <li>
        <label>
            <input type="checkbox" onChange={onClick} checked={completed} />
            <span style={{
              textDecoration: completed ? 'line-through' : 'none',
              color: completed ? '#b2b2b2':'#3f3f44',
              marginTop:'0.1em',
              fontSize:'1.5em'}} >
              {text}
              </span>
        </label>
        </li>
      </div>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo