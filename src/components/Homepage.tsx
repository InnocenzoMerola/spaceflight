import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";

import { ArticleInterface, Result } from "../interfaces/Article";
const Homepage = function () {
  const [artic, setArtic] = useState<Result[]>([]);

  const fetchArticles = function () {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata API");
        }
      })
      .then((articleObj: ArticleInterface) => {
        setArtic(articleObj.results);
      })
      .catch((error) => console.log("ERRORE", error));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Carousel>
      {artic
        .map((a) => (
          <Carousel.Item key={a.id}>
            <img src={a.image_url} alt="meteo" className="w-100" />
            <Carousel.Caption className="my-carousel">
              <h3>{a.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))
        .slice(1, 4)}
    </Carousel>
  );
};

export default Homepage;
