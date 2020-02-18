import {connect} from 'react-redux';
import { actionFilterNotes } from '../actions';
import SearchBar from '../components/SearchBar';

function mapStateToProps(state) {
    return {
        text: state.searchText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleText: (text) => dispatch(actionFilterNotes(text))
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(SearchBar);