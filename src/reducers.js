import { CREATE_NOTE, SELECT_NOTE, DEL_NOTE, UPDATE_NOTE } from "./actions";

const defaultState = {
    notes: [],
    currentNote: 0,
}

export default function notes(state=defaultState, action) {
    const newState = {...state};

    switch (action.type) {
        case CREATE_NOTE:
            newState.notes.push({
                id: newState.notes.length - 1,
                title: "New Title",
                text: "Type Text Here"
            });
            break;
        case SELECT_NOTE:
            newState.currentNote = action.payload;
            break;
        case DEL_NOTE:
            newState.notes.splice(action.payload, 1);
            break;
        case UPDATE_NOTE:
            newState.notes.splice(action.payload.id, 1, action.payload.noteData);
            break;
        default:
            break;
    }

    return newState;
}