const initState = {
    input:''
}

const inputs = (state = initState, action) => {
    // console.log(action.input)
    if (action.type === 'INPUT_TODO') {
        return {
            ...state,
            input:action.input
        }
    } else {
        return state
    }
}

export default inputs