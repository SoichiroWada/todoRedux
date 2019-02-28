import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  // console.log('todos in getVT:',todos);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

// insert part of the data from the store into props;
const mapStateToProps = state => {
  console.log('state in visibleTodoList:', state)
  // console.log(state.todos, state.visibilityFilter)
  var newTodos = getVisibleTodos(state.todos, state.visibilityFilter);
  return {
    todos: newTodos
  }
}

// dispatch action to props
const mapDispatchActionToProps = dispatch => {
  return {
    disToggleTodo: id => dispatch(toggleTodo(id))
  }
}

export default connect(mapStateToProps,mapDispatchActionToProps)(TodoList)
