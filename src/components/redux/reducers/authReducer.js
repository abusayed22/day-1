import * as types from '../type/type';


const initialState = {
    token:'',
    email:'',
    name:'',
    login:false
}

const authReducer = (state = initialState,action) => {
    switch (action.type) {
        
        case types.LOGIN_DATA:
            return {
                ...state, 
                name: action.payload.user,
                email: action.payload.email,
                token: action.payload.token,
                login:true
            }
            break;

            
        default:
            return state
            break;
    }
}
export default authReducer;