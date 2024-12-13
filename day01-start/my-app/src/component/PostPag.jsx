import React, { useState } from 'react'

const getData=(uri)=>{
  return fetch(uri).then(res=>res.json());
}
const PostPag = () => {
  const [load,setLoad]=useState(false);
  const [err,setErr]=useState(false);
  const [posts,setPosts]=useState([]);

  const fetchData=()=>{
    setLoad(true);
    getData('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      setPosts(res);
      setLoad(false);
    }).catch(err=>{
      setErr(true);
      setLoad(false);
    })

    if(load){
      return <h1>Loading.....</h1>
    }

    if(err){
      return <h1>Something Went Wrong.....</h1>
    }

  }
  


  return (
    <>
    <button onClick={fetchData}>Add Posts</button>
    <ul>
      {posts.map(p=><li key={p.id}>{p.id}-{p.title}</li>)}
    </ul>

    </>
  )
}

export default PostPag