import React from 'react'
import { useForm } from 'react-hook-form'

const User = () => {
  const {register,handleSubmit,reset} = useForm()
  const submitHandler = (data) => {
    console.log(data)
    reset()
  } 
    return (
    <div className='border-1 px-1 flex flex-col justify-center items-center'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(submitHandler)} >
        <input {...register('fullname')} className='border-1 ps-1' type="text" placeholder='fullname' />
        <br />
        <button>submit</button>
      </form>
    </div>
  )
}

export default User
7067787905
9399646086