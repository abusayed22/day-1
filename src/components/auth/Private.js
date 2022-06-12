import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import Header from '../pages/partials/Header'
import { Outlet, Navigate } from 'react-router-dom'

function Private() {
    const auth = useSelector(state => state.loginState.login)

    return auth ? <> <Header /> <Outlet /></> : <Navigate to="/login" />
    
  
}

export default Private