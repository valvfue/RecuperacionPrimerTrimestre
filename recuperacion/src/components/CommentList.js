export default function CommentList({ comments }) {
    return (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong> - {comment.body}
          </li>
        ))}
      </ul>
    );
  }