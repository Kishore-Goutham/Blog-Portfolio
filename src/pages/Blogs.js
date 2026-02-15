import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import BlogPost from '../Components/blogPost';
import blogbg from "../Assests/blog.png"
import { toast } from "react-toastify";
import { useContext } from 'react';
import { dataContext } from '../Context/Datacontext';




function Blogs() {
  let[blogs, setBlogs] = useState([]);
  let[newPost, setnewPost] = useState({title:"",content:""})

  let{Authuser} = useContext(dataContext)
 

  useEffect(()=>{
    axios.get('https://blog-backend-uepu.onrender.com/blog').then((response)=>setBlogs(response.data)).catch((err)=>console.log(err))
  },[])
  

  function handleChange(e){
    let value = e.target.value;
    let key = e.target.id;
    setnewPost({...newPost,[key]:value})
  }
 
 async function handleSubmit(e){
     e.preventDefault();
     if(Authuser.uid === "AFIiS7sOcYRErFYNwdvETQAV7w43"){
     let{title,content} = newPost;
     let likes=0;

     const date = new Date().toLocaleDateString("en-US",{
      month:"long",
      day:"2-digit",
      year:"numeric"
     })

     if(title && content){
     let response = await axios.post("https://blog-backend-uepu.onrender.com/blog",{...newPost,likes,date});
     if(response.data.success===true){
       let res = await axios.get('https://blog-backend-uepu.onrender.com/blog')
        setBlogs(res.data);
        setnewPost({title:"",content:""})
        toast.success("Blog added successfully!");
     }
     }
    }else{
      toast.error("You are not allowed to edit or add a blog")
    }
  }

 async function handleLike(id){
    try{
      let response = await axios.patch(`https://blog-backend-uepu.onrender.com/blog/${id}`)
      if(response.status===200){
         let res = await axios.get('https://blog-backend-uepu.onrender.com/blog')
        setBlogs(res.data)
      }
    }catch(err){
      console.log(err)
    }
  }
  
  let posts = blogs.map((data,key)=>{
     return <BlogPost key={key} title={data.title} id={data._id} content={data.content} date={data.date} likes={data.likes} handleLike={handleLike}/>
  })

   return (
  <div
    className="min-h-screen relative flex items-center justify-center px-6 py-16"
    style={{
      backgroundImage: `url(${blogbg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
  >
    {/* Soft Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/50 to-black/70 backdrop-blur-sm"></div>

    <div className="relative w-full max-w-5xl">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl text-center font-bold text-white mb-12">
        Latest <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Blogs</span>
      </h1>

      {/* Blog Form */}
      <form
        className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-white text-2xl font-semibold mb-2">
          Post a New Blog
        </h2>

        <input
          placeholder="Blog Title"
          value={newPost.title}
          id="title"
          onChange={handleChange}
          className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <textarea
          placeholder="Blog Content"
          id="content"
          value={newPost.content}
          onChange={handleChange}
          rows="4"
          className="p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        ></textarea>

        <button
          type="submit"
          className="mt-4 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Add Blog
        </button>
      </form>

      {/* Blog List */}
      <div className="mt-12 bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-white text-2xl font-semibold mb-6">
          Recent Blogs
        </h2>

        <div className="space-y-6">
          {posts}
        </div>
      </div>

    </div>
  </div>
);

    
}

export default Blogs