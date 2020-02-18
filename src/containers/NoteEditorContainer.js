import {connect} from 'react-redux';
import { actionUpdateNote } from '../actions';
import NoteEditor from '../components/NoteEditor';

function mapStateToProps(state) {
    return {
        note: state.notes[state.currentNote]
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateNote: (id, changedNote) => dispatch(actionUpdateNote(id, changedNote))
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(NoteEditor);