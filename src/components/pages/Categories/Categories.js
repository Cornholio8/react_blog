import { getAllCategories } from '../../../redux/catRedux';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Categories = () => {
  const categories = useSelector(getAllCategories);

  return (
    <section>
      <h1 className="mb-5">All categories</h1>
      <Row xs={1} md={5} className="g-3 justify-content-md-left" >
        <Col>
          {categories.map(category => (
            <Card key={category}><Link to={"/category/" + category}>{category}</Link></Card>
          ))}
        </Col>
      </Row>
    </section>
  )
}

export default Categories;