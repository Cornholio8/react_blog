import PostForm from "./PostForm";
import { useNavigate, Navigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { editPost } from "../../redux/postsRedux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../redux/store";
import { useSelector } from "react-redux";

const EditPostForm = () => {

    const { postId } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const postData = useSelector(state => getPostById(state, postId));

    const handleSubmit = post => {
        dispatch(editPost({ ...post, postId }));
        navigate('/')
    };

    const actionText = 'Edit post'
    if(!postData) return <Navigate to="/" />
    return (
        <>
            <h1>Edit Post Form</h1>
            <PostForm
                action={handleSubmit}
                actionText={actionText}
                title={postData.title}
                author={postData.author}
                publishedDate={postData.publishedDate}
                shortDescription={postData.shortDescription}
                content={postData.content}
                id={postId}
            />
        </>
    );
};

export default EditPostForm;