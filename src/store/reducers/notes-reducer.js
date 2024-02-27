const initialState = {
  list: [],
};

const notesReducer = (state = initialState, action) => {
  let notelistCopy = [...state.list];

  switch (action.type) {
    case "ADD_NOTE":
      notelistCopy.push({
        title: action.payload.title,
        body: action.payload.body,
      });
      break;

    case "EDIT_NOTE":
      notelistCopy[action.payload.noteIndex].title = action.payload.title;
      notelistCopy[action.payload.noteIndex].body = action.payload.body;
      break;

    case "DELETE_NOTE":
      notelistCopy = notelistCopy.filter(
        (_, index) => index !== action.payload.noteIndex
      );
      break;
  }

  return {
    list: notelistCopy,
  };
};

export default notesReducer;
