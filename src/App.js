import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Post from "./components/Post/Post";
import Comment from "./components/Comment/Comment";

function App() {

  const [postId, setPostId] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setComments(res.data);
      }).catch((err) =>
        console.log(err));
  }, []);

  const handleFilter = (e) => {
    setPostId(e.target.value);
  }

  return (
    <div className="App">
      <div className='left-side'>
        <input
          type="text"
          placeholder="Filter by postId"
          value={postId}
          onChange={handleFilter}
        />
        <p>Posts</p>
        <ul>
          {
            (postId > 100) ? (<p>Value is greater than the given API value</p>) : (
              comments.filter((comment) => comment.postId.toString() === postId)
              .map((comment) => (
                <Post key={comment.id} postId={comment.postId} />
              ))
            )
          }
        </ul>
      </div>
      <div className="right-side">
        <p>Comments</p>
        {
          comments.filter((comment) => comment.postId.toString() === postId)
          .map((comment) => (
            <Comment key={comment.id} name={comment.name} body={comment.body} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
