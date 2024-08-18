import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Ayth = () => {
    let user = true
    return user ? <Outlet/> : <Navigate replace to="/login"/>
}

export default Ayth 