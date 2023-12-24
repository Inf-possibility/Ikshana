import { useEffect, useState } from "react";
import "../components/css/productlist.css";
import { BoxCard } from "./BoxCard";

export const NewsList = () => {
  // const directurl = 'https://ikshanaapi.azurewebsites.net/get_trending_events?region=India&dayrange=Today'
  const fileurl = "http://localhost:8000/news";
  const [news, SetNews] = useState([]);

  const [url, setUrl] = useState(fileurl);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => SetNews(data));
  }, [url]);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <section>
      <BoxCard>
        <div className="filter">
          <button className="all" onClick={() => setCounter(counter + 1)}>
            {counter}
          </button>
          <button onClick={() => setUrl(fileurl)}>INDIA All</button>
          <button onClick={() => setUrl(fileurl)}>INDIA TODAY</button>
        </div>
      </BoxCard>
      {news.map((news) => (
        <div className="card" key={news.SourceUrl}>
          <p className="id">{"Mentioned :" + news.MentionCount}</p>
          <p>
            <a
              href={news.SourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="name"
            >
              {news.SourceUrl.replace("https://", "")
                .replace("www.", "")
                .replace("news.", "")
                .substring(0, 20)}
            </a>
          </p>
          <p className="info">
            <span>Date:{news.StartEventDate}</span>
            <span
              className={news.MentionCount > 10 ? "instock" : "unavailable"}
            >
              {news.MentionCount > 10 ? "Trending" : "slow"}
            </span>
          </p>
        </div>
      ))}
    </section>
  );
};
