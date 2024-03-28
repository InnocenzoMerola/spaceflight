import { useState, useEffect } from "react";
import MyArticle from "./MyArticle";
import { ArticleInterface, Result } from "../interfaces/Article";

const ArticleList = function () {
  const [arts, setArts] = useState<Result[]>([]);

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
        const removeSeven = articleObj.results.filter((_, index) => index !== 7);
        setArts(removeSeven);
      })
      .catch((error) => console.log("ERRORE", error));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <h2>Le ultime</h2>
      {arts.map((a) => (
        <MyArticle articleDet={a} key={a.id} />
      ))}
    </>
  );
};

export default ArticleList;
