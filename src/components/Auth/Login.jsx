import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex flex-col  h-screen w-screen items-center justify-center'>
        <h1 className='text-green-600 italic font-bold text-2xl mb-6 px-3'>
                    Welcome to (EMS) Employee Management System!
                </h1>
        <p className='text-white text-sm mt-2 max-w-md text-center'>
                    Manage employees efficiently with our intuitive platform. Track records, assign roles, and streamline workflow like never before.
                {showMore && (
                    <span>
                        <br />Admin Dashboard - A powerful space for managing employees, assigning tasks, and tracking progress. 📊  
                        <br />Employee Dashboard - Stay updated with assigned tasks, deadlines, and performance reports. ⏳  
                        <br />Task Management-Assign, update, and keep records of tasks seamlessly. 
                        <br />Secure Login & Role-Based Access- Ensuring data security and proper authorization. 🔒  
                    </span>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'
            >
{/* input k aage required likhne s bina vo field m kuch likhe form hi submit nhi hoga */}
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' 
                />

                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter password'/>

                <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>
                    Log in
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login
