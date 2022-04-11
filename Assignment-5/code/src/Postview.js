import React ,{useEffect, useState} from 'react';
import './Postview.css';

const Postview=()=> {
  const [Posts,setPosts]=useState([]);
  const setPostsAsync=async () =>{
    const response=await fetch("http://localhost:3004/user");
    const data=await response.json();
    
    setPosts(data);
  }
  useEffect(() => {
    setPostsAsync();
  },[]);
  return (
    <div className='Postview'>
    
    <div className='header'>
      <div className='onec'><img alt='clone img' height='50px'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9eyVAIHFSjhTFfrXXEtloNTNU2ZK6kHdrMw&usqp=CAU"/></div>
      <div className='twoc'><img alt='camera pic icon' height='50px'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYWEVEAKnheTZuq-7XSFnkWAQQIRrjjRHbA&usqp=CAU"/></div>
    </div>
    
    {Posts.map((post,index)=>(
    <div className='site' key={index}>
      <div className='box1'>
        <div className='headerdiv'>
        <div className='honed'>
          <div className='hname'>{post.name}</div>
          <div className='hnam'>{post.location}</div>
        </div>
        <div className='htwod'>
          <div className='hdot'>...</div>
          
        </div>
        </div>
        <div className='image'>
        <img src={post.PostImage} alt=" side div"height='330px' width='675px'/>
        </div>
        <div className='lastbox'>
          <div className='likebox'>
          <div className='like'><img alt='love pic icon' height='31px'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1MN-s5kHL-yeRs5XRFSaTRNaT_dN1BFZdQ&usqp=CAU"/></div>
          <div className='share'><img alt='share pic icon' height='31px'src="https://www.kindpng.com/picc/m/141-1412822_instagram-share-icon-png-png-download-transparent-png.png"/></div>
          <div className='comment'><img alt='comment pic icon' height='31px'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDdlLUjQQYuendDQDCmgnTNxR-ICGsFXWXA&usqp=CAU"/></div>
          
          <div className='dated'>{post.date}</div> 

          </div>
          <div className='sline'>{post.likes}</div>
          <div className='tline'>{post.description}</div>
        </div>
        
        
        
      </div>
    </div>
      ))}
    </div>
    

    
    
    
  );

  
};

export default Postview;