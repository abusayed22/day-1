import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { pre_go_single ,pre_edit_update} from '../../redux/action/action';

function Single_edit() {
    const navigate = useNavigate()
    const {id} = useParams()
    const dispatch = useDispatch()
    const [singleBio,setSingleBio] = useState({
        name:'',
        roll:'',
        brith:'',
        phone:'',
        address:''
    })

    const singleStudent = useSelector(state => state.studentsReducers.user);

    useEffect( () => {
        dispatch(pre_go_single(id))
    },[])
    useEffect(() => {
        if(singleStudent) {
          setSingleBio({...singleBio && singleStudent});
        }
    },[singleStudent])

    const saveHandle = () => {
        dispatch(pre_edit_update(id,singleBio))
        navigate('/all_students')
    }
    return (
    <div>
        <center><b>Add your Student</b></center>
        <div style={{marginTop:20,width:350,margin:'0 auto'}}>
          <form action="">
            <input 
              style={{width:350,margin:'10px 0'}} 
              value={singleBio.name ||""} 
              onChange={(e) => setSingleBio({...singleBio,name:e.target.value})} 
              type="text" 
              placeholder='Enter full Name..'
            />
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <input style={{width:120,margin:'10px 0'}} value={singleBio.roll ||""}  onChange={(e) => setSingleBio({...singleBio,roll:e.target.value})} type="number" placeholder='Roll:' />
            <input 
              style={{width:200,margin:'10px 0'}} 
              value={singleBio.brith ||""} 
              onChange={(e) => setSingleBio({...singleBio,brith:e.target.value})}
              type="date" 
              placeholder='Brith Day:' />
            </div>
            <input 
              style={{width:350,margin:'10px 0'}} 
              value={singleBio.phone ||""}  
              onChange={(e) => setSingleBio({...singleBio,phone:e.target.value})} 
              type="number" 
              placeholder='Phone Number' 
            />
           
            <textarea 
              value={singleBio.address ||""} 
              style={{width:350}}  
              onChange={(e) => setSingleBio({...singleBio,address:e.target.value})} 
              id="w3review" 
              name="w3review" rows="4" cols="50" 
              placeholder='Address'/>

            <button onClick={() => saveHandle()} style={{width:80,margin:'10px 0'}} type="button" className="btn btn-info">Update</button>
          </form>
        </div>
    </div>
  )
} //  

export default Single_edit