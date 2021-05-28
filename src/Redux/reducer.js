let initialValue = {
  days: {},
  modal: false,
};
[...Array(31)].forEach((el, index) => {
  initialValue.days[index + 1] = [];
});

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        days: {
          ...state.days,
          [action.payload.date]: [
            ...state.days[action.payload.date],
            action.payload.data,
          ],
        },
      };
    default:
      return state;
  }
};

export default reducer;

//.payload.date:[...state.days[action.payload.date]]
