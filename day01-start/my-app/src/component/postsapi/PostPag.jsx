import React, { useEffect, useState } from 'react'

const getData=async (uri)=>{
   const res = await fetch(uri);
   const totalCount = +(res.headers.get('X-Total-Count'));
   const data = await res.json();
   return {data, totalCount};
}
const PostPag = () => {
  const [load,setLoad]=useState(false);
  const [err,setErr]=useState(false);
  const [posts,setPosts]=useState([]);
  const [page,setPage]=useState(1);
  const [totalPage,setTotalPage]=useState(0);


  useEffect(
    ()=>{fetchData(page)}
  ,[page])

  const fetchData= async (p)=>{
    try{
      setLoad(true);
      getData(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${p}`)
      .then(res=>{
      const {data, totalCount}=res;
      setPosts(data);
      setTotalPage(totalCount/10);
      setLoad(false);
      })
    }catch(e){
      setErr(true);
      setLoad(false);
    }
  
  }

  if(load){
    return <h1>Loading.....</h1>
  }

  if(err){
    return <h1>Something Went Wrong.....</h1>
  }
  


  return (
    <>
    <h1>Posts</h1>
    <h3>
      <button disabled={page===1} onClick={()=>setPage(page-1)}>-</button>
      {page}
      <button disabled={page===totalPage} onClick={()=>setPage(page+1)}>+</button>
    </h3>
    <ul>
      {posts.map(p=><li key={p.id}>{p.id}-{p.title}</li>)}
    </ul>

    </>
  )
}

export default PostPag