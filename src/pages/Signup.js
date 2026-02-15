import React from 'react'
import blogbg from "../Assests/blog.png"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import auth from '../Config/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useContext } from "react";
import { dataContext } from "../Context/Datacontext";
import { useEffect } from 'react'


function Signup() {
  let {isloggedin} = useContext(dataContext) 
  let navigate = useNavigate()

   let[user, setUser] = useState({})
   let[error,setError] = useState("")

     useEffect(() => {
       if(isloggedin){
         navigate("/blogs", { replace: true })
       }
     }, [isloggedin, navigate])
    
      function handleInput(e){
        let value = e.target.value
        let key = e.target.id
        setUser({...user,[key]:value})
      }

     async function handleSubmit(e){
      e.preventDefault()
      let{email,password,confirmpassword} = user

      if(!email){
       return setError("Email is required")
      }

      if(!password){
         return setError("Password is required")
      }

      if(password!==confirmpassword){
        return setError("Password doesn't match")
      }

      try{
        let userdetail = await createUserWithEmailAndPassword(auth,email,password)
        console.log(userdetail)
        navigate("/")
      }catch(err){
        setError("Email already in use")
        console.log(err.message)
      }

    }

  return (

    <div
      className="min-h-screen  px-6 relative"
      style={{
        backgroundImage: `url(${blogbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/50 to-black/70 backdrop-blur-sm"></div>

      {/* signup card */}
      <div className="relative w-full m-auto py-20 max-w-md">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8">

          {/* heading */}
          <h1 className="text-3xl font-bold text-center text-white mb-2">
            Create Account
          </h1>

          <p className="text-center text-gray-300 mb-6">
            Join and start building something amazing
          </p>

          {/* form */}
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
          >

            <input
              placeholder="Email"
              onChange={handleInput}
              id="email"
              type="email"
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />

            <input
              placeholder="Password"
              onChange={handleInput}
              id="password"
              type="password"
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />

            <input
              placeholder="Confirm Password"
              onChange={handleInput}
              id="confirmpassword"
              type="password"
              className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />

            <button
              type="submit"
              className="mt-3 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold text-lg shadow-lg hover:scale-105 active:scale-95 transition"
            >
              Register
            </button>

          </form>

          {/* error */}
          {error && (
            <p className="text-red-400 font-semibold text-center mt-4">
              {error}
            </p>
          )}

          {/* login link */}
          <h2 className="text-center mt-6 text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-400 font-semibold hover:text-orange-300 transition"
            >
              Login
            </Link>
          </h2>

        </div>

      </div>

    </div>
  )
}

export default Signup
