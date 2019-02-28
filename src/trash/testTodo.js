const Todo = ({ onClick, completed, text }) => (
  
    <li
     onClick={onClick} 
     style={{ 
      textDecoration: completed ? 'line-through' : 'none',
      marginLeft:'30%', 
      fontSize:'1.5em'}}>
      {text}
    </li>

  )



  const Todo = ({ onClick, completed, text }) => (
  
    <div>
      <label>
          <input type="checkbox" defaultChecked={completed} />
          <span onClick={onClick}>{text}</span>
      </label>
    </div>
  )