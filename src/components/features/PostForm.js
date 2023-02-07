import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const PostForm =({ action, actionText, ...props }) => {

    let navigate = useNavigate();
    const id = props.id;
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [ contentError, setContentError ] = useState(false);
    const [ dateError, setDateError ] = useState(false);

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const handleSubmit = () => {
        setContentError(!content)
        setDateError(!publishedDate)
        if(content && publishedDate) {
          action({ title, author, publishedDate, shortDescription, content, id });
        navigate('/');
        }
      };

    return (
        <>
            <Row className='justify-content-md-center'>
                <Col md={6}>
                    <Form onSubmit={validate(handleSubmit)}>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control {...register("title", { required: true, minLength: 3 })}
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                type="text" placeholder="Enter title"
                                />
                                {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="author">
                                <Form.Label>Author</Form.Label>
                                <Form.Control {...register("author", { required: true, minLength: 4})}
                                value={author}
                                onChange={e => setAuthor(e.target.value)}
                                type="text" placeholder="Enter author"
                                />
                                {errors.author && <small className="d-block form-text text-danger mt-2">Author name is too short (min is 4)</small>}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="published">
                                <Form.Label>Published</Form.Label>
                                <ReactDatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
                                {dateError && <small className="d-block form-text text-danger mt-2">Required</small>}
                            </Form.Group>
                        </Col>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Short description</Form.Label>
                            <Form.Control {...register("shortDescription", { required: true, minLength: 20})}
                                value={shortDescription}
                                onChange={e => setShortDescription(e.target.value)}
                                type="text" as="textarea" rows={3} placeholder="Leave a comment here"
                                />
                                {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Required (min is 20)</small>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="content">
                            <Form.Label>Main content</Form.Label>
                            <ReactQuill theme="snow" value={content} onChange={setContent} placeholder="Leave a comment here" />
                            {contentError && <small className="d-block form-text text-danger mt-2">Required</small>}
                        </Form.Group>
                        <Button variant="primary" type="submit">{actionText}</Button>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default PostForm