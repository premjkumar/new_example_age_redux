const initalState = {
  age: 21,
  history: []
};

const reducer = (state = initalState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "Age_UP":
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age + action.value
        })
      };
      break;
    case "Age_Down":
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age - action.value
        })
      };
      break;
    default:
      break;
  }

  return newState;
};

export default reducer;
