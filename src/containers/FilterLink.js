import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  // console.log('state in FL:',state)//this is from Store of Redux
  // console.log('ownProps in FL:',ownProps)//props is property from parent component
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchActionToProps = (dispatch, ownProps) => {
  // console.log('ownProps:',ownProps);
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  }
}

export default connect(mapStateToProps, mapDispatchActionToProps)(Link)