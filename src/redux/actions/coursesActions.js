import firebase from '../../api/firebase';

const db = firebase.database().ref("dev");

//get each course from firebase

export const GET_COURSE_SUCCESS = "GET_COURSE_SUCCESS";

function getCourseSuccess(course){
    return {
        type:GET_COURSE_SUCCESS,
        course
    }
}

export const getCourse = () => (dispatch) => {
    db.child("courses")
        .on("child_added", s=>{
            let course = s.val();
            course["id"] = s.key;
           dispatch(getCourseSuccess(course));
        });
};
//get each course from firebase
