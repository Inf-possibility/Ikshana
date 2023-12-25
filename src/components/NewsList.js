import { useEffect, useState } from "react";
import "../components/css/newslist.css";
import { BoxCard } from "./BoxCard";
import {formatDate_yyyymmdd} from '../functions/usefullfunction.js'

export const NewsList = () => {
  // const directurl = 'https://ikshanaapi.azurewebsites.net/get_trending_events?region=India&dayrange=Today'
  const fileurl = "http://localhost:8000/news";
  const [news, SetNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(fileurl);
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

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
        <div className="filter">
          <button className="all" onClick={() => setCounter(counter + 1)}>
            {counter}
          </button>
          <button className="trigger" onClick={() => setShow(!show)}>
          ToggleNews
        </button>
          <button onClick={() => setUrl(fileurl)}>INDIA All</button>
          <button onClick={() => setUrl(fileurl)}>INDIA TODAY</button>
        </div>
      <section>
      <span> <h1>Click Toggle news to Hide and show </h1> </span>{ show && news.map((news) => (
         <div className="newscard" key={news.SourceUrl}> 
       <div className="card">
  
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
            <span>Date: {formatDate_yyyymmdd(news.StartEventDate)}</span>
            <span
              className={news.MentionCount > 10 ? "instock" : "unavailable"}
            >
              {news.MentionCount > 10 ? "Trending" : "slow"}
            </span>
          </p>
        </div>
        </div>
      ))}
         </section>
    </section>
  );
};
