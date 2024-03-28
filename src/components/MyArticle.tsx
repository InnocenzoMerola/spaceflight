import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import { Result } from "../interfaces/Article";
import { Link } from "react-router-dom";

interface ArticleProps {
  articleDet: Result;
}

const MyArticle = function (props: ArticleProps) {
  return (
    <Col md={4}>
      <Card className="mb-3">
        <Link to={"/details/" + props.articleDet.id} className="text-decoration-none text-black">
          <Card.Img variant="top" src={props.articleDet.image_url} className="imag" />
          <Card.Body>
            <Card.Title>{props.articleDet.title}</Card.Title>
            <Card.Text className="cap-text">{props.articleDet.summary}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};
export default MyArticle;
