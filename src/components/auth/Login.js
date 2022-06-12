import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { pre_login_data } from '../redux/action/action'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const selector = useSelector(state => state.loginState.login)

    const [user,setUser] = useState({
        email:'',
        password:''
    })
    
    useEffect(() => {
        if(selector) {
            navigate("/")
        }
    },[selector])

    const loginhandle = (e) => {
        
        dispatch(pre_login_data(user))
    }
    console.log(selector);
  return (
    <div style={{
                marginTop:90
                }}>
                    <center><h4>Login</h4></center>
        <div style={{ display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:'10px',border:'1px solid black',width:'300px',height:250,margin:'0 auto'}}>
            <div className='input-group mb-3'>
                <input type="email" 
                    value={user.email}
                    onChange={(e) => setUser({...user,email:e.target.value})}
                    className="form-control" 
                    placeholder="Gmail here" 
                    aria-label="Username" 
                />
            </div>
            <div className='input-group mb-3'>
                <input 
                    value={user.password}
                    onChange={(e) => setUser({...user,password:e.target.value})}
                    type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    aria-label="Username" 
                />
            </div>
            <button onClick={() => loginhandle()} type="button" className="btn btn-primary">Login</button>
        </div>
    </div>
  )
}

export default Login