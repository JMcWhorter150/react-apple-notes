import {connect} from 'react-redux';
import { actionCreateNote } from '../actions';
import NewNote from '../components/NewNote';

function mapDispatchToProps(dispatch) {
    return {
        handleClick: () => {dispatch(actionCreateNote())}
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(NewNote);