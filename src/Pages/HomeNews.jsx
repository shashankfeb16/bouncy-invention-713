import React from "react";
import hnews from "../data/HomeNewsData";
import NewsCard from "../components/newscard/NewsCard";
import { useState } from "react";
import v from "../assets/v.svg";

import { Link } from "react-router-dom";

const HomeNews = () => {
  const [newsList, setNewsList] = useState(hnews);
  console.log(hnews);

  return (
    <div style={{ width: "880px",margin: "auto" }} className="App">
      <div
        style={{
          display: "flex",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          justifyContent: "space-between",
        }}
      >
        <h2
          style={{
            fontFamily: "Montserrat",
            fontSize: "0.75 rem",
            fontWeight: 600,
          }}
        >
          NEWS AND ARTICLES
        </h2>
<Link to={`/news`}><img alt="text" src={v} /></Link>
      </div>
      <hr />

      {newsList.map((item) => (
        <Link style={{ textDecoration: "none", color: "#141b2f" }} to={`/news`}>
          <div key={item.id}>
            <NewsCard data={item} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeNews;
