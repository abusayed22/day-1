import axios from 'axios';
import * as types from '../type/type';

const ADD = (data) => {
    return {
        type:types.ADD_DATA,
        payload:data
    }
}
export const PRE_ADD = (allStudents) => {
    return (dispatch) => {
        axios.post("http://127.0.0.1:8000/api/students/",allStudents)
        .then(res => {dispatch(ADD(res.data))})
        .catch(err => console.log(err))
    }
}

const get_data = (data) => {
    return {
        type:types.GET_DATA,
        payload:data
    }
}
export const pre_get_data = () => {
    return (dispatch) => {
        axios.get("http://127.0.0.1:8000/api/students")
        .then(res => {dispatch(get_data(res.data.students))})
        .catch(err => console.log(err))
    }
}


const deleting = () => {
    return {
        type:types.Delete_DATA
    }
}
export const pre_deleting = (id) => {
    return (dispatch) => {
        axios.delete(`http://127.0.0.1:8000/api/students/${id}`)
        .then( res => {
            dispatch(deleting())
            // dispatch(get_data())
        })
        .catch(err => console.log(err))
    }
}


const go_single = (data) => {
    return {
        type:types.GO_SINGLE,
        payload:data
    }
}
export const pre_go_single = (id) => {
    return (dispatch) => {
        axios.get(`http://127.0.0.1:8000/api/students/${id}`)
        .then( res => {
            dispatch(go_single(res.data.student))
        })
        .catch(err => console.log(err))
    }
}

const edit_update = () => {
    return {
        type:types.EDIT_DATA
    }
}
export const pre_edit_update = (id,singleBio) => {
    return (dispatch) => {
        axios.put(`http://127.0.0.1:8000/api/students/${id}`,singleBio)
        .then( res => { 
            dispatch(edit_update())
        })
        .catch( err => console.log(err))
    }
}

// **********this is auth area************

const login = (data) => {
    return{
        type:types.LOGIN_DATA,
        payload:data
    }
}
export const pre_login_data = (user) => {
    return (dispatch) => {
        axios.post("http://127.0.0.1:8000/api/login",user)
        .then(res => {
            dispatch(login(res.data))
            localStorage.setItem(user,JSON.stringify(res.data))
        })
        .catch(err => console.log(err))
    }
}