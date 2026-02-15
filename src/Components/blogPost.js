import React from 'react'
import like from "../Assests/like.png"

function BlogPost({title,content,date,likes,handleLike,id}) {
  
return(
  <div className="group mt-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg  md:flex justify-between items-center transition-transform duration-150 ease-out hover:-translate-y-1 hover:shadow-xl">

  <div className="flex-1">
    <h1 className="text-xl md:text-2xl font-semibold text-white group-hover:text-orange-400 transition-colors duration-150">
      {title}
      <span className="block md:inline md:ml-3 text-sm font-normal text-gray-300">
        {date}
      </span>
    </h1>

    <p className="text-gray-200 mt-2 leading-relaxed">
      {content}
    </p>
  </div>

  <div className="flex items-center gap-3 mt-4  md:ml-6 md:mt-0">

    <img
      src={like}
      alt="like"
      onClick={() => handleLike(id)}
      className="w-8 h-8 cursor-pointer transition-transform duration-150 ease-out hover:scale-110 active:scale-90"
    />

    <p className="text-white font-medium">
      {likes}
      <span className="text-gray-300 ml-1">likes</span>
    </p>

  </div>

</div>

)
}

export default BlogPost