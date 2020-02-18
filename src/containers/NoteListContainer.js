import {connect} from 'react-redux';
import { actionSelectNote } from '../actions';
import NoteList from '../components/NoteList';

function mapStateToProps(state) {
    return {
        notes: state.notes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        selectNote: (id) => dispatch(actionSelectNote(id))
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(NoteList);