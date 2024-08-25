import './index.css'
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, useNavigate, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import { useLocation } from 'react-router-dom';
function App() {
  const [posts , setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])
  const [searchPost, setSearchPost] = useState('')
  const [searchPostResult, setSearchPostResult] = useState([])

  const location = useLocation();
  console.log(location.pathname)

  useEffect(() => {
    console.log(searchPost); 
    const filterPost = posts.filter((post) => (post.title).toLowerCase().includes(searchPost) || (post.body).toLowerCase().includes(searchPost))
    console.log(filterPost);
    setSearchPostResult(filterPost.reverse())
  },[posts , searchPost])

  const navigate = useNavigate();
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')


  const handleDelete= (id) => {
    const newPosts = posts.filter((post) => post.id !== id) 
    setPosts(newPosts)
    navigate('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length-1].id + 1:1
    const dateTime = format(new Date() , 'MMMM dd, yyyy pp')
    const newpost = {id:id , title:postTitle , datetime:dateTime,body:postBody}
    setPosts([...posts , newpost])
    setPostTitle('')
    setPostBody('')
    navigate('/')
  }
  return (
    <div className="App">
      <Header />
      <Nav 
      searchPost={searchPost} 
      setSearchPost={setSearchPost}
      />
      <Routes>
        <Route path="/" element={<Home posts={searchPostResult}/>} />
        <Route 
        path="/post" 
        element={
          <NewPost 
          postTitle={postTitle}
          postBody={postBody}
          setPostTitle={setPostTitle} 
          setPostBody={setPostBody}
          handleSubmit={handleSubmit}
          />} 
        />
        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
