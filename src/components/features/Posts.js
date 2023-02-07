import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import { dateToStr } from '../../utils/dateToStr';


const Posts = () => {

  const posts = useSelector(getAllPosts);

  return (
    <section>
      <Row xs={1} md={3} className="g-3 justify-content-md-center">
      {posts.map(post => (
        <Col key={post.id}>
          <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle className="mb-1">Author: {post.author}</Card.Subtitle>
              <Card.Subtitle>Published: {dateToStr(post.publishedDate)}</Card.Subtitle>
              <Card.Text className="mt-2">{post.shortDescription}</Card.Text>
              <Link to={"/post/" + post.id}>
                <Button variant="primary">Read more</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
      </Row>
    </section>   
  );
};

export default Posts;