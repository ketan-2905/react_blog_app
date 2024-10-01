// import './index.css'
// import api from './api/Posts'
// import Header from "./Header";
// import Nav from "./Nav";
// import Footer from "./Footer";
// import Home from "./pages/Home";
// import NewPost from "./pages/NewPost";
// import PostPage from "./pages/PostPage";
// import About from "./pages/About";
// import Missing from "./pages/Missing";
// import { Route, useNavigate, Routes, useFetcher } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { format } from 'date-fns';
// import { useLocation } from 'react-router-dom';
// import EditPost from './pages/EditPost';

// // import useWindoSize from './hooks/usewindoSize';
// // import useAxiosApi from './hooks/useAxiosApi';

// function App() {

//   const windoSize = useWindoSize()
  

//   const [posts , setPosts] = useState([])
//   const [searchPost, setSearchPost] = useState('')
//   const [searchPostResult, setSearchPostResult] = useState([])

//   const location = useLocation();

//   useEffect(async () => {
//       try{
//         const response = await api['get']('/posts')
//         setPosts(response.data)
//         // const {data , ispending , error}  = useAxiosApi('/posts' , 'get' , null)
//         // setPosts(data)
//         // if(error) throw Error(error)
//       }catch(err){
//         if(err){
//           console.log(err.response.data.massage);
//           console.log(err.response.data.status);
//           console.log(err.response.data.headers);        
//         }else{
//           console.log(`Error :${err}`);
//         }
//       }
//   },[])

//   useEffect(() => {
//     const filterPost = posts.filter((post) => (post.title).toLowerCase().includes(searchPost) || (post.body).toLowerCase().includes(searchPost))
//     setSearchPostResult(filterPost.reverse())
//   },[posts , searchPost])

//   const navigate = useNavigate();
//   const [postTitle, setPostTitle] = useState('')
//   const [postBody, setPostBody] = useState('')
//   const [title, setTitle] = useState('')
//   const [editTitle, setEditTitle] = useState('')
//   const [editBody, setEditBody] = useState('')


//   const handleDelete= async (id) => {
//     try{
//       const response = await api.delete(`/posts/${id}`)
//       const newPosts = posts.filter((post) => post.id !== id) 
//       setPosts(newPosts)
//       navigate('/');
//     }catch(err){
//       if(err.response){
//         console.log(err.response.data.massage);
//         console.log(err.response.data.status);
//         console.log(err.response.data.headers);        
//       }else{
//         console.log(`Error :${err.massage}`);
//       }
//     }
//   }

//   const handelEdit = async (e,id) => {
//     e.preventDefault()
//     const dateTime = format(new Date() , 'MMMM dd, yyyy pp')
//     const newpost = {id:id , title:editTitle , datetime:dateTime,body:editBody}
//     console.log("hi there");
    
//     try{
//       const response = await api['put'](`/posts/${id}`, newpost)
//       const newposts = posts.map((post) => post.id === id ? {...newpost}:post)
//       setPosts(newposts)
//       setEditTitle('')
//       setEditBody('')
//       setTitle('')
//       navigate('/')
//     }catch(err){
//       if(err.response){
//         console.log(err.response.data.massage);
//         console.log(err.response.data.status);
//         console.log(err.response.data.headers);        
//       }else{
//         console.log(`Error :${err.massage}`);
//       }
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const id = posts.length ? (parseInt(posts[posts.length-1].id) + 1).toString():"1"
//     const dateTime = format(new Date() , 'MMMM dd, yyyy pp')
//     const newpost = {id:id , title:postTitle , datetime:dateTime,body:postBody}
//     try{
//       const response = await api.post(`/posts`,newpost)
//       setPosts([...posts , response.data])
//       setPostTitle('')
//       setPostBody('')
//       navigate('/')
//     }catch(err){
//       if(err.response){
//         console.log(err.response.data.massage);
//         console.log(err.response.data.status);
//         console.log(err.response.data.headers);        
//       }else{
//         console.log(`Error :${err.massage}`);
//       }
//     }
//   }
//   return (
//     <div className="App">
//       <Header 
//       windoSize = {windoSize}
//       />
//       <Nav 
//       searchPost={searchPost} 
//       setSearchPost={setSearchPost}
//       location={location}
//       />
//       <Routes>
//       <Route path="/" element={<Home posts={searchPostResult}/>} />
//         <Route path="/post/edit/:id" element={<EditPost
//           posts = {posts}
//           editTitle={editTitle}
//           editBody={editBody}
//           setEditTitle={setEditTitle} 
//           setEditBody={setEditBody}
//           title = {title}
//           setTitle = {setTitle}
//           handelEdit={handelEdit}
//         />} 
//         />
//         <Route 
//         path="/post" 
//         element={
//           <NewPost 
//           postTitle={postTitle}
//           postBody={postBody}
//           setPostTitle={setPostTitle} 
//           setPostBody={setPostBody}
//           handleSubmit={handleSubmit}
//           />} 
//         />
//         <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
//         <Route path="/about" element={<About />} />
//         <Route path="*" element={<Missing />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import './index.css'
import axios from 'axios';
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import PostPage from "./pages/PostPage";
import About from "./pages/About";
import Missing from "./pages/Missing";
import { Route, useNavigate, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import { useLocation } from 'react-router-dom';
import EditPost from './pages/EditPost';

import useWindoSize from './hooks/usewindoSize';

const api = axios.create({
  baseURL: 'http://localhost:3500'
});

function App() {
  const windoSize = useWindoSize()
  
  const [posts, setPosts] = useState([])
  const [searchPost, setSearchPost] = useState('')
  const [searchPostResult, setSearchPostResult] = useState([])

  const location = useLocation();
  const navigate = useNavigate();

  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [title, setTitle] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filterPost = posts.filter((post) => 
      post.title.toLowerCase().includes(searchPost.toLowerCase()) || 
      post.body.toLowerCase().includes(searchPost.toLowerCase())
    );
    setSearchPostResult(filterPost.reverse());
  }, [posts, searchPost]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const newPosts = posts.filter((post) => post.id !== id);
      setPosts(newPosts);
      navigate('/');
    } catch (err) {
      console.error('Error deleting post:', err);
    }
  };

  const handelEdit = async (e, id) => {
    e.preventDefault();
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime: dateTime, body: editBody };
    
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      const newPosts = posts.map((post) => post.id === id ? response.data : post);
      setPosts(newPosts);
      setEditTitle('');
      setEditBody('');
      setTitle('');
      navigate('/');
    } catch (err) {
      console.error('Error updating post:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? (parseInt(posts[posts.length - 1].id) + 1).toString() : "1";
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime: dateTime, body: postBody };

    try {
      const response = await api.post('/posts', newPost);
      setPosts([...posts, response.data]);
      setPostTitle('');
      setPostBody('');
      navigate('/');
    } catch (err) {
      console.error('Error creating post:', err);
    }
  };

  return (
    <div className="App">
      <Header windoSize={windoSize} />
      <Nav 
        searchPost={searchPost} 
        setSearchPost={setSearchPost}
        location={location}
      />
      <Routes>
        <Route path="/" element={<Home posts={searchPostResult} />} />
        <Route 
          path="/post/edit/:id" 
          element={
            <EditPost
              posts={posts}
              editTitle={editTitle}
              editBody={editBody}
              setEditTitle={setEditTitle} 
              setEditBody={setEditBody}
              title={title}
              setTitle={setTitle}
              handelEdit={handelEdit}
            />
          } 
        />
        <Route 
          path="/post" 
          element={
            <NewPost 
              postTitle={postTitle}
              postBody={postBody}
              setPostTitle={setPostTitle} 
              setPostBody={setPostBody}
              handleSubmit={handleSubmit}
            />
          } 
        />
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
