import axios from 'axios';
import{USER_CREATE_SUCCESS,USER_CREATE_FAIL,USER_CREATE_SUCCESS_CLEAR,
    USER_CREATE_FAIL_CLEAR,USER_GET_SUCCESS,USER_GET_FAIL,
    USER_GET_SUCCESS_CLEAR,USER_GET_FAIL_CLEAR} from '../types/userType';


export const userCreate = (data)=>{
    return async(dispatch)=>{
        try{
            let response = await axios.post('https://bookstore-backend-u02r.onrender.com/user/register',data)
            console.log(response.data.message)
            dispatch({
                type: USER_CREATE_SUCCESS,
                payload: {
                    successMessage: response.data.message,
                }
            })
        }catch(error){
            let data = error.response.data.message
        
            dispatch({
                type: USER_CREATE_FAIL,
                payload:{
                    errorMessage:data
                }
            })
        
        }
    }
}

export const userGet = (data)=>{
    return async(dispatch)=>{
        try{
            let response = await axios.post('https://bookstore-backend-u02r.onrender.com/user/login',data)
            console.log(response.data.message)
            dispatch({
                type: USER_GET_SUCCESS,
                payload: {
                    successMessage: response.data.message,
                    token:response.data.data,
                    nameData:response.data.name
                }
            })
        }catch(error){
            let data = error.response.data.message
            dispatch({
                type: USER_GET_FAIL,
                payload:{
                    errorMessage:data
                }
            })
        }
    }
}