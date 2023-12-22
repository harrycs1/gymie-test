export default function Post({ post }) {
    const { post_id, likes, session_name, description, session_id, user_id } = post
    return (
        <div>
            <h3>User: {user_id}</h3>
            <h4>{session_name}</h4>
            <p>{description}</p>
            <p>{likes} likes</p>
            <p></p>
        </div>
    )
}