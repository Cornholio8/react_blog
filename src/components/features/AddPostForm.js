import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';

const AddPostForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = post => {
        dispatch(addPost(post));
        navigate('/');
    };

    const actionText = "Add post";

    return (
        <>
            <h1>Add Post Form</h1>
            <PostForm action={handleSubmit} actionText={actionText} />
        </>
    );
};

export default AddPostForm