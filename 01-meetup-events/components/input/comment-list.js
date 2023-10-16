import classes from './comment-list.module.css';

function CommentList(props) {
    const { comments } = props.comments;

    return (
        <ul className={classes.comments}>
            {comments.map((comment, i) => {
                return (
                    <li key={i}>
                        <p>{comment.text}</p>
                        <div>
                            By <address>{comment.name}</address>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default CommentList;
