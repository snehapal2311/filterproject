import './Post.css'

const Post = ({ postId }) => {
  return (
    <div className='post'>
      <p>Post no. {postId}</p>
    </div>
  )
}

export default Post
