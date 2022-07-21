import React from 'react'
import NewsCard from '../components/NewsCard'

const NewsPage = () => {
    let news= [
    {
      id: 1,
      img: "https://images-cricketcom.imgix.net/liveblog_featured-1658288386597?auto=compress&dpr=2&w=1&h=200",
      heading: "Pakistan close in on win as Jayasuriya dismisses Agha",
      description: "Live Blog: Sri Lanka vs Pakistan, 1st Test, Day 5",
      website: "cricket.com staff",
      date:"20 Jul 2022"
    },
    {
      id: 2,
      img: "https://images-cricketcom.imgix.net/news-1658285237015?auto=compress&dpr=2&w=1&h=200",
      heading: "We're probably moving through a bit of a transition phase: Buttler",
      description: "England lost the T20I and ODI series against India and were now outplayed by the Proteas on Tuesday",
      website: "cricket.com staff",
      date:"20 Jul 2022"
    },{
      id: 3,
      img: "https://images-cricketcom.imgix.net/news-1658283271912?auto=compress&dpr=2&w=1&h=200",
      heading: "Van der Dussen stars as South Africa deny Stokes a farewell ODI win",
      description: "The right-hander smashed a stunning century to help Proteas win the first ODI by 62 runs",
      website: "cricket.com staff",
      date:"20 Jul 2022"
    },
    {
      id: 4,
      img: "https://images-cricketcom.imgix.net/news-1658239504200?auto=compress&dpr=2&w=1&h=200",
      heading: "I want to play 140, 150 Tests for England: Stokes",
      description: "The all rounder also returned the compliment to Kohli, saying he has always admired the energy and commitment he brings to the field",
      website: "cricket.com staff",
      date:"20 Jul 2022"
    },
    {
      id: 5,
      img: "https://images-cricketcom.imgix.net/news-1658233092454?auto=compress&dpr=2&w=1&h=200",
      heading: "Ton-up Shafique drives Pakistan's record chase at Galle",
      description: "Pakistan ended day 4 on 222/3, still needing 120 runs to take the lead in the two match series",
      website: "cricket.com staff",
      date:"20 Jul 2022"
    }
 ]
  

  return (
      <div>
          <div style={{"width":"700px","height":"150px","border":"1px solid red","margin":"auto"}}>
        <h3>News and Articles</h3>
        {/* <br /> */}
        <button>LATEST</button>
        <button>NEWS</button>
        <button>ON THIS DAY</button>
        <button>MATCH RELATED </button>
        <button>FEATURES</button>

      </div>
      {news.map((item) => (  
        <div key={item.id}>
          <NewsCard data={item} />
        </div>
      ))}
    </div>
  )
}

export default NewsPage