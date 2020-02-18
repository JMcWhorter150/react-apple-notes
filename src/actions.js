export const CREATE_NOTE = 'CREATE_NOTE';
export const SELECT_NOTE = 'SELECT_NOTE';
export const DEL_NOTE = 'DEL_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export function actionCreateNote() {
    return {
        type: CREATE_NOTE
    }
}

export function actionSelectNote(id) {
    return {
        type: SELECT_NOTE,
        payload: id
    }
}

export function actionDelNote(id) {
    return {
        type: DEL_NOTE,
        payload: id
    }
}

export function actionUpdateNote(id, noteData) {
    return {
        type: UPDATE_NOTE,
        payload: {
            id,
            noteData
        }
    }
}