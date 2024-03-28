import Card from "react-bootstrap/Card";

import Col from "react-bootstrap/Col";
import { Result } from "../interfaces/Article";

interface ArticleProps {
  articleDet: Result;
}

const MyArticle = function (props: ArticleProps) {
  return (
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src={props.articleDet.image_url} />
        <Card.Body>
          <Card.Title>{props.articleDet.title}</Card.Title>
          <Card.Text>{props.articleDet.summary}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default MyArticle;
