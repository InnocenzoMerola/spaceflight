import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticleInterface, Result } from "../interfaces/Article";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ArticleDetail = function () {
  const [articleObj, setArticleObj] = useState<Result | null>(null);

  const params = useParams();

  const articleFetch = function () {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${params.articleId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata api");
        }
      })
      .then((detailArray: Result) => {
        setArticleObj(detailArray);
      })
      .catch((error) => console.log("ERRROE", error));
  };

  useEffect(() => {
    if (params.articleId) {
      articleFetch();
    }
  }, []);

  return (
    <Row className="justify-content-center mt-4">
      <Col sm={10} className="text-center mb-3">
        <div>
          <img src={articleObj?.image_url} alt="foto" />
        </div>
      </Col>

      <Col md={10} lg={8}>
        <Card>
          <Card.Body>
            <h4>{articleObj?.title}</h4>
            <hr />
            <h5>Descrizione</h5>
            <p>{articleObj?.summary}</p>
            <h6>Pubblicato da: {articleObj?.news_site}</h6>
            <h6>Data di pubblicazione: {articleObj?.published_at}</h6>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ArticleDetail;
