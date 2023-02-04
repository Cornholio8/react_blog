import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostForm =({ action, actionText, ...props }) => {

    let navigate = useNavigate();
    const id = props.id;
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content, id });
        navigate('/');
    };

    return (
        <>
            <Row className='justify-content-md-center'>
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control value={title} type="text" placeholder="Enter title" onChange={e => setTitle(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="author">
                                <Form.Label>Author</Form.Label>
                                <Form.Control value={author} type="text" placeholder="Enter author" onChange={e => setAuthor(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="published">
                                <Form.Label>Published</Form.Label>
                                <Form.Control value={publishedDate} type="date" placeholder="dd-mm-yyyy" onChange={e => setPublishedDate(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Short description</Form.Label>
                            <Form.Control value={shortDescription} type="text" as="textarea" rows={3} placeholder="Leave a comment here" onChange={e => setShortDescription(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="content">
                            <Form.Label>Main content</Form.Label>
                            <Form.Control value={content} type="text" as="textarea" rows={7} placeholder="Leave a comment here" onChange={e => setContent(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">{actionText}</Button>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default PostForm