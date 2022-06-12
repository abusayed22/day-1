import * as types from '../type/type'

const initialState = {
    users:[],
    user : {}
}
const allReducers = (state = initialState , action) => {
    switch (action.type) {
        case types.ADD_DATA:
            return {
                ...state
            }
            break;

        case types.GET_DATA:
            return {
                ...state,
                users:action.payload
            }
            break;

        case types.Delete_DATA:
            return {
                ...state
            }
            break;

        case types.GO_SINGLE:
            return {
                ...state,
                user:action.payload
            }
            break;

        // case types.EDIT_DATA:
        //     return {
        //         ...state
        //     }
        //     break;
    
        default:
            return state
            break;
    }
}
export default allReducers;