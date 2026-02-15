import React, { createContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import auth from '../Config/Firebase';


let dataContext = createContext();

function Datacontext({children}) {

    let[isloggedin,setisloggedin] = useState(false)
    let[Authuser,setAuthuser]= useState({})

    useEffect(()=>{
        
    auth.onAuthStateChanged((user)=>{
      if(user){
        setisloggedin(true)
        setAuthuser(user)
        // console.log("state changed")
      }
      else{
        setisloggedin(false)
        setAuthuser({})
      }
    })
    },[])

    console.log(isloggedin)

  return (
 
        <dataContext.Provider value={{isloggedin,Authuser}}>
            {children}
        </dataContext.Provider>

  )
}

export default Datacontext
export {dataContext}