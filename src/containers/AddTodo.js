import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import { addTodo, inputTodo, clearTodo } from '../actions'

const AddTodo = (props) => {

  let handleChange = (e) => {
    e.preventDefault();
    const { disInputTodo } = props;
    disInputTodo(e.target.value);
  }

  let handleSubmit = (e) => {
    const { disAddTodo, disInputTodo } = props;
    e.preventDefault()
    const inputChecker = props.inputs.input.trim();
    if (inputChecker === "") { return };
    disAddTodo(props.inputs.input);
    disInputTodo('');
  }

  let clearTodo = (e) => {
    const { disClearTodo, setVFilterAll } = props;
    if (e === 1 ){ setVFilterAll() };
    disClearTodo(e);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
              <input placeholder='Add Todo' className="input-field col s3" type="text" onChange={handleChange}
              value={props.inputs.input}
              style={{
                color:'#3d3e47',
                fontSize:'1.2em',
                marginTop:'3.0em', 
                marginBottom:'1.0em',
                marginLeft:'35%',
                marginRight:'35%'
              }} />
          </div>
        <div className="row" style={{
          marginLeft:'35%',
          marginBottom:'10px'
          }}>
          <button type="submit" className="waves-effect waves-light btn">Add Todo</button>
          <button type="submit" className="waves-effect waves-light btn"
          onClick={()=>clearTodo(0)}
          style={{
            marginLeft:'0.5em',
            backgroundColor:'#8d8e8d'
          }}
          >Clear</button>
          </div>
          <div>
          <button type="submit" className="waves-effect waves-light btn blue"
          onClick={()=>clearTodo(1)}
          style={{
            marginLeft:'35%'
          }}
          >CLEAR & Load Sample</button>
        </div>
      </form>
    </div>
  )
}
// <input ref={node => input = node}/>

const mapStateToProps = (state, ownProps) => {
  // console.log('mapStateToProps:',state)
  return {
      todos: state.todos,
      inputs: state.inputs
  }
}
//dispatch action to props to utilize action to change the state in store;
const mapDispatchActionToProps = (dispatch, ownProps) => {
  return {
      // addNewTodo: (text) => { dispatch({type:'ADD_TODO', text}) }
      disAddTodo: (text) => { dispatch(addTodo(text)) },
      disInputTodo: (text) => { dispatch(inputTodo(text)) },
      disClearTodo: (text) => { dispatch(clearTodo(text)) },
      setVFilterAll: () => { dispatch(setVisibilityFilter("SHOW_ALL"))}
  }
}

export default connect(mapStateToProps,mapDispatchActionToProps)(AddTodo)
