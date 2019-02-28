export const addTodo = (text) => {
    // var random = Math.random().toString().slice(4,11);
    // var time = new Date().getTime().toString().slice(4,13);
    var time2 = Date.now().toString()
    var id = Number(time2);
    console.log(id)
      return {
          type: 'ADD_TODO',
          id: id,
          text:text
      }
  }

export const inputTodo = (input) => {
    return {
        type: 'INPUT_TODO',
        input:input
    }
}

export const clearTodo = (index) => {
  if (index === 1) {
      return {
        type: 'CLEAR_FILL',
        index:index
    }
  } else if (index === 0) {
      return {
        type: 'CLEAR_TODO',
        index:index
    }
  }
}

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id:id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter:filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
