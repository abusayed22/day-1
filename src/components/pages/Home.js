import React from 'react'
import { useSelector } from 'react-redux/es/exports'

function Home() {
  const auth = useSelector(state => state.loginState.name)
  
  console.log(auth);
  return (
    <div>
      <center>wellcome {auth}</center>
    </div>
  )
}

export default Home