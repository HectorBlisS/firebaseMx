import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AdminUploadPageDisplay} from './AdminUploadPageDisplay';
import {AdminCoursesList} from "./AdminCoursesList";
import {Route} from 'react-router-dom';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class AdminUploadPage extends Component {

    state = {};

    componentWillMount(){
        if(!localStorage.getItem("isStaff")) {
            toastr.error("no tienes permiso de estar aqui, lo siento ;)")
            this.props.history.push("/");
        }
    }

    render() {
        const {courses, fetched, authors} = this.props;
        return (
            <div>
                <AdminUploadPageDisplay

                />
                <AdminCoursesList
                    courses={courses}
                    fetched={fetched}
                    authors={authors}
                />


                <Route path="/admin/:id" component={CourseForm}/>


            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses.list,
        authors: state.authors.object,
        fetched: Object.keys(state.authors.object).length > 1 && state.courses.list.length > 1
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

export default AdminUploadPage = connect(mapStateToProps, mapDispatchToProps)(AdminUploadPage);