import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

const MyFooter = function () {
  return (
    <Container fluid className="px-4 my-footer">
      <Row className="justify-content-center mt-5 g-0">
        <Col sm={12} md={10} lg={8}>
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
                    <a href="#i" className="text-black text-decoration-none">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href="#i" className="text-black text-decoration-none">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href="#i" className="text-black text-decoration-none">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href="#i" className="text-black text-decoration-none">
                      Contact us
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#i" className="text-black text-decoration-none">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href="#i" className="text-black text-decoration-none">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href="#i" className="text-black text-decoration-none">
                      Legal Notices
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#i" className="text-black text-decoration-none">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a href="#i" className="text-black text-decoration-none">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href="#i" className="text-black text-decoration-none">
                      Cookie Preferences
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#i" className="text-black text-decoration-none">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href="#i" className="text-black text-decoration-none">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href="#i" className="text-black text-decoration-none">
                      Corporate Information
                    </a>
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
