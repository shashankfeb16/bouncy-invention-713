import React from 'react';
import  { Route,Routes } from "react-router-dom"
import NewsCard from '../components/newscard/NewsCard';
import Homepage from './Homepage';
import LoginPage from './LoginPage'
import NewsPage from './NewsPage';
import Schedule from './Schedule';
import Series from './Series';
import Players from "./Players"
import Singleplayer from '../components/singleplayer/Singleplayer';
import Videos from "./Videos"
import SingleNews from '../components/singlenews/SingleNews';


const MainRoute = () => {
  return (

   <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/schedule' element={<Schedule></Schedule>}></Route>
        <Route path='/series' element={<Series></Series>}></Route>
        <Route path='/news' element={<NewsPage></NewsPage>}></Route>
        <Route path='/news/:id' element={<SingleNews></SingleNews>}></Route>
        <Route path='/players' element={<Players></Players>}></Route>
        <Route path='/players/:id' element={<Singleplayer></Singleplayer>}></Route>
        <Route path='/videos' element={<Videos></Videos>}></Route>
   </Routes>
  )
}

export default MainRoute