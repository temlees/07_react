import { useState, useEffect } from "react";

const News = () => {
    const API_KEY = "b2f485cd2f274a5ba62325da31653420";
    
    const [newsData, setNewsData] = useState([]); // 뉴스 데이터를 배열로 초기화

    async function fetchNews() {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
        const data = await response.json();
        setNewsData(data.articles); // articles 배열을 상태에 저장
    }

    useEffect(() => {
        fetchNews(); // 마운트 시 API 호출
    }, []); // 빈 배열을 넣어 한 번만 호출되도록 설정

    return (
        <div>
            <h1> News</h1>
            {newsData.length > 0 ? (
                <ul>
                    {newsData.map((article, index) => (
                        <li key={index}>
                            <img  style={{width:'100%'}} src={article.urlToImage} />
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default News;