import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { dateToStr } from '../../utils/dateToStr';


const Posts = ({title, author, publishedDate, category, shortDescription, id}) => {

  return (
          <Card>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle className="mb-1">Author: {author}</Card.Subtitle>
              <Card.Subtitle>Published: {dateToStr(publishedDate)}</Card.Subtitle>
              <Card.Subtitle>Category: {category}</Card.Subtitle>
              <Card.Text className="mt-2">{shortDescription}</Card.Text>
              <Link to={"/post/" + id}>
                <Button variant="primary">Read more</Button>
              </Link>
            </Card.Body>
          </Card>
  );
};

export default Posts;