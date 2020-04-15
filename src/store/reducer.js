const initalState = {
  age: 21
};

const reducer = (state = initalState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "Age_UP":
      newState.age++;
      break;
    case "Age_Down":
      newState.age--;
      break;
    default:
      break;
  }

  return newState;
};

export default reducer;
