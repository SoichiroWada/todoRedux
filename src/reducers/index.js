import { combineReducers } from 'redux'
import todos from './todos'
import inputs from './inputs'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  inputs,
  visibilityFilter
})