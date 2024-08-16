import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




const Login = () => {
    const navigate = useNavigate()

    const handleForm = (e) =>{
        e.preventDefault()
        navigate("/admin")
    }


    return (
        <>
            <h2 className='text-center  font-[700] mt-4'>Личный кабинет</h2>
            <form className='flex flex-col items-center  w-full gap-3 mt-8' onSubmit={handleForm}>
                <input  required placeholder='Email' className='w-[30%] py-1 px-3 border outline-none' type="text" />
                <input required placeholder='Password' className='w-[30%] border py-1 px-3 outline-none' type="password" />
                <button className='py-2 px-[185px] rounded-[40px] text-white bg-[rgb(255,138,30)]' type='submit'>Сохранить</button>
            </form>

        </>
    )
}

export default Login