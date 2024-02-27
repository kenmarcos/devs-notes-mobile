import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "./notes-action-types";

export const addNote = (payload) => {
  return {
    type: ADD_NOTE,
    payload,
  };
};

export const editNote = (payload) => {
  return {
    type: EDIT_NOTE,
    payload,
  };
};

export const deleteNote = (payload) => {
  return {
    type: DELETE_NOTE,
    payload,
  };
};
