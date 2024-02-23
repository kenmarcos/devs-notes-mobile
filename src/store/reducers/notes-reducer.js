const initialState = {
  list: [{ title: "Primeira nota", body: "Testando 1, 2, 3..." }],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      break;
  }

  return state;
};

export default notesReducer;
