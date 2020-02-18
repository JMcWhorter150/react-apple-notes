import { CREATE_NOTE, SELECT_NOTE, DEL_NOTE, UPDATE_NOTE, FILTER_NOTES } from "./actions";

const defaultState = {
    notes: [{id: 0, title: "New Title", text: "Type Text Here"}],
    currentNote: 0,
    searchText: ""
}

export default function notes(state=defaultState, action) {
    const newState = {...state};

    switch (action.type) {
        case CREATE_NOTE:
            newState.notes.push({
                id: state.notes.length,
                title: "New Title",
                text: "Type Text Here"
            });
            newState.currentNote = newState.notes.length - 1;
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
        case FILTER_NOTES:
            newState.searchText = action.payload;
            break;
        default:
            break;
    }

    return newState;
}