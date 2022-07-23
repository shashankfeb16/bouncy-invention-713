import React from 'react';
import '../App.css'
import news from '../data/newsData';
import NewsCard from '../components/newscard/NewsCard';
import styled from "styled-components";
import { useState } from "react";
import { Container, Heading } from "@chakra-ui/react"

import { Link } from "react-router-dom";

const NewsPage = () => {
	const [newsList, setNewsList] = useState(news);

	const handleFilter = (type) => {
		let updatedNews = news.filter((el) => {
			return el.type == type;
		});
		setNewsList(updatedNews);
		console.log(news);
	};

	return (
		<>
			<br />
			<br />
			<br />
			<br />
			<div style={{ width: "800px", margin: "auto" }} className="App">
				<div style={{ width: "580px", height: "100px" }}>
					<Container>
						<Heading>News and Articles</Heading>
					</Container>
					<ButtonWrapper>
						<button
							onClick={() => {
								handleFilter("Latest");
							}}
							className="btn"
						>
							LATEST
						</button>
						<button
							onClick={() => {
								handleFilter("News");
							}}
							className="btn"
						>
							NEWS
						</button>
						<button
							onClick={() => {
								handleFilter("OnThisDay");
							}}
							className="btn"
						>
							ON THIS DAY
						</button>
						<button
							onClick={() => {
								handleFilter("Match");
							}}
							className="btn"
						>
							MATCH RELATED
						</button>
						<button
							onClick={() => {
								handleFilter("Features");
							}}
							className="btn"
						>
							FEATURES
						</button>
					</ButtonWrapper>
				</div>
				{newsList.map((item) => (
					<Link style={{ "textDecoration": "none", "color": "#141b2f" }} to={`/news/${item.id}`}>
						<div key={item.id}>
							<NewsCard data={item} />
						</div>
					</Link>
				))}
			</div>

		</>
	);
}

export default NewsPage;
const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;