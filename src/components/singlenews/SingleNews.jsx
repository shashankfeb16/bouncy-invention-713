import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import news from "../../data/newsData";
import styles from "./SingleNews.module.css";

const SingleNews = () => {
	console.log(news)
	const { id } = useParams();
	const [singlenews, setSingleNews] = useState({});
	useEffect(() => {
		if (id) {
			const new_news = news.find((el) => el.id === Number(id));
			setSingleNews(new_news);
		}
	}, []);
	console.log(singlenews, "singlenews");
	return (
		<div className={styles.mainBox}>
			<img width="100%" height="550px" src={singlenews.img} alt="" />
			<div className={styles.subBox}>
				<div className={styles.info}>
					<div className={styles.dateBox}>
						<p>{singlenews.date}</p>
						<p>{singlenews.website}</p>
					</div>
					<h3>{singlenews.heading}</h3>
					<p>
						Cricket is set to make its first appearance in the Commonwealth
						Games after 24 years and India’s vice-captain Smriti Mandhana said
						the team is excited to go to Birmingham and win a medal for the
						country. "Really excited to be part of the Commonwealth Games. I
						think it is something very new for me and our team. We've never
						experienced going out and playing a tournament where other sports
						are also involved.
						<br />
						<br /> So I'm definitely looking forward to it,” she said. “We
						haven't had any experience of playing in Commonwealth Games, where
						we'll strive to get the gold medal because we've always imagined us
						lifting the trophy and trying to put us on a podium where we lift a
						trophy.” “But now that we have to imagine us going on the podium and
						getting a medal, I think it is something new and we all are really
						excited.
						<br />
						<br /> It'll be a good experience and a really new experience for
						all of us, and I am sure that we're all really going to enjoy and
						give our best.” Javelin thrower Neeraj Chopra's gold medal-winning
						feat at the Tokyo Olympics last year gave her goosebumps, and
						Mandhana and her teammates will look to take inspiration from that
						when they compete in their first multi-sport event. "All the girls
						are really excited and we all know the feeling. We all know the
						feeling because we've all watched the Commonwealth and Olympics,
						when the Indian flag goes higher and we hear the national anthem...
						everyone knows that feeling and definitely we are aiming for gold.
						<br />
						<br />I don't think we'll look for just a podium finish because when
						the flag goes higher and the national anthem plays, that's the best
						feeling. "I got goosebumps when Neeraj Chopra got it in the Olympics
						so definitely we have the opportunity to be there and try and do
						that. Of course not for the Olympics, but for the Commonwealth. We
						all are really excited and yeah we know the groups, the groups were
						decided long back so we have our plans for all three so hopefully
						things work the way we planned.” Eight teams will vie for the top
						honours across 16 matches at Edgbaston and India are grouped with
						Australia, Pakistan and Barbados. Group B will feature England, New
						Zealand, South Africa and Sri Lanka.
						<br />
						<br /> The two teams will make the semi-finals and all the medal
						rounds will be decided on August 7. India will start their campaign
						against heavyweights Australia on July 29 and Mandhana is in no mood
						to lose sleep over that and make their rivals "feel good about it".
						"We have played them (Australia) in the openers in quite a lot of
						tournaments.
					</p>
				</div>
				<div className={styles.articles}>
					<h3>Related Articles</h3>
					<hr />
				</div>
			</div>
		</div>
	);
};

export default SingleNews;
