import { Button, Row, Col } from "react-bootstrap";
import { useParams, Navigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostById } from "../../../redux/store";
import { useState } from "react";
import DeleteModal from "../../features/DeleteModal";
import { deletePost } from "../../../redux/postsRedux";
  
  
const Post = () => {
  
  const { id } = useParams();
  const listData = useSelector(state => getPostById(state, id));
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleClose = () => setShowDeleteModal(false);

  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(deletePost(id))
    setShowDeleteModal(false)
  };

  if (showDeleteModal) return <DeleteModal show={showDeleteModal} handleClose={handleClose} handleRemove={handleRemove} />

  const handleShowDeleteModal = () => setShowDeleteModal(true);
  
  if(!listData) return <Navigate to="/" />
  return (
    <>
      <Row className='justify-content-center'>
        <Col md={8} className='d-flex justify-content-between'>
          <h1>{listData.title}</h1>
          <div>
            <Link to={'/post/edit' + id}><Button variant='outline-info' className='m-2'>Edit</Button></Link>
            <Button variant='outline-danger' onClick={handleShowDeleteModal}>Delete</Button>
          </div>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col md={8}>
          <p><b>Author: </b>{listData.author}{' '}</p>
          <p><b>Published: </b> {listData.publishedDate}</p>
          <p>{ listData.content }</p>
        </Col>
      </Row>
    </>
  );
}

export default Post;