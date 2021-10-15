const data = []

const apiReducer = (state = data, action) => {
    switch (action.type) {
      case "SET_POST":
        return state = action.payload;
      default:
        return state;
    }
  };

  export default apiReducer;
  