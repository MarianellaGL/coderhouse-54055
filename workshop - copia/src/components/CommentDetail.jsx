const CommentDetail = (props) => {
  return (<div>
    <div>
      <a href="/">{props.author}</a>
    </div>
    <div>
      <span>{props.date}</span>
    </div>
    <div>{props.message}</div>
    <div>{props.name}</div>
  </div>);
}

export default CommentDetail;