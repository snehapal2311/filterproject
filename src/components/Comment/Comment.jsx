import './Comment.css'

const Comment = ({ name, body }) => {
  return (
    <div className='body'>
      <p>Name---- {name}</p>
      <div className="comment">
        <br />
        {body}
      </div>
    </div>
  )
}

export default Comment
