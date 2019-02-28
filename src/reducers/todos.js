const initState = [
      {id:1, text:'buy some milk', completed:false },
      {id:2, text:'play mario kart', completed:false},
      {id:3, text:'walk along the street', completed:false},
      {id:4, text:'here comes the sun', completed:false},
      {id:5, text:'travel to Mars', completed:false},
      {id:6, text:'climb Mt.Fuji', completed:false},
      {id:7, text:'blowing wind', completed:false},
      {id:8, text:'learn Javascript', completed:false},
      {id:9, text:'washable hair', completed:false},
      {id:10, text:'smooth shark skin', completed:false}
    ]

const todos = (state = initState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(todo => 
          (todo.id === action.id) ? { ...todo, completed:!todo.completed }: todo )
      case 'CLEAR_FILL':
        return state = initState;
      case 'CLEAR_TODO':
        return state = [];
      default:
        return state
    }
}

export default todos