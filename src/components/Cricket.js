import React, { useEffect, useState } from 'react'
import CricketItem from './CricketItem'

export const Cricket = () => {

  const [articles, setArticles] = useState([])
  // const [data, info] = articles;

  const fetchBtn = async (e) => {
    const url = "https://api.cricapi.com/v1/currentMatches?apikey=520bdd97-8c5b-4885-aa86-57093ac8a7c6&offset=0"
    let data = await fetch(url)
    let parsedData = await data.json();
    setArticles(parsedData)
    console.log(articles);
  }

  useEffect(() => {

    fetchBtn();
    // eslint - disable - next - line
  }, []);

  return (
    <div className='row'>
      <h1 className='my-4' style={{ textAlign: "center" }}>Live Match Score</h1>

      {Object.keys(articles).map((key, index) => {
        console.log(articles.data[index].name)
        // console.log(key + index)
        return (
          <div className="col-lg-12 my-3 mx-2">
            <CricketItem
              fetchBtn={fetchBtn}
              name={articles.data[index].name}
              date={articles.data[index].dateTimeGMT}
              venue={articles.data[index].venue}
              status={articles.data[index].status}
              score={articles.data[index].score}
              index={index}
              hitsLimit={articles.info.hitsLimit}
              hitsToday={articles.info.hitsToday}
            />
          </div>
        )
      })}
      {/* <button href="/" className="btn btn-primary" onClick={fetchBtn}>Get live score</button> */}

    </div>
  )
}

