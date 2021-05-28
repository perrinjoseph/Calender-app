const AllAction = {
  addTask: (payload) => {
    return {
      type: "ADD_TASK",
      payload,
    };
  },
  toggleModal: () => {
    return {
      type: "TOGGLE_MODAL",
    };
  },
};

export default AllAction;
