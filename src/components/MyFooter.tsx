import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

const MyFooter = function () {
  return (
    <Container fluid className="px-4 my-footer">
      <Row className="justify-content-center mt-5 g-0">
        <Col sm={12} md={10} lg={6}>
          <Row>
            <Col className="mb-2">
              <i className="bi bi-facebook footer-icon me-2"></i>
              <i className="bi bi-instagram footer-icon me-2"></i>
              <i className="bi bi-twitter-x footer-icon me-2"></i>
              <i className="bi bi-youtube footer-icon"></i>
            </Col>
          </Row>

          <Row xs={2} md={4} lg={4}>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#i">Audio and Subtitles</a>
                  </p>
                  <p>
                    <a href="#i">Media Center</a>
                  </p>
                  <p>
                    <a href="#i">Privacy</a>
                  </p>
                  <p>
                    <a href="#i">Contact us</a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#i">Audio Description</a>
                  </p>
                  <p>
                    <a href="#i">Investor Relations</a>
                  </p>
                  <p>
                    <a href="#i">Legal Notices</a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#i">Help Center</a>
                  </p>
                  <p>
                    <a href="#i">Jobs</a>
                  </p>
                  <p>
                    <a href="#i">Cookie Preferences</a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#i">Gift Cards</a>
                  </p>
                  <p>
                    <a href="#i">Terms of Use</a>
                  </p>
                  <p>
                    <a href="#i">Corporate Information</a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2">
              <Button type="button" className="btn btn-sm footer-button rounded-0 mt-3 bg-dark border-0">
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
