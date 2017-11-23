import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {CourseListDisplay} from './CourseListDisplay';

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses.list
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export const CourseList = connect(mapStateToProps, mapDispatchToProps)(CourseListDisplay);