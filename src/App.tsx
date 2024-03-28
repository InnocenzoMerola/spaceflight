import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyHeader from "./components/MyHeader";

import MyFooter from "./components/MyFooter";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <BrowserRouter>
      <div>
        <MyNavbar />
        <Container>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Row className="justify-content-center mt-2">
                    <Col md={8}>
                      <MyHeader />
                      <Homepage />
                    </Col>
                  </Row>
                  <Row className="mt-5">
                    <ArticleList />
                  </Row>
                </>
              }
            />
          </Routes>
          <Routes>
            <Route path="/article" />
          </Routes>
          <MyFooter />
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
