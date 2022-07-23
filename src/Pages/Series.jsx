import React, {useState} from 'react';
import { useEffect } from 'react';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getSeriesCompleted, getSeriesOngoing, getSeriesUpcoming} from '../redux/seriesPageReducer/action';
import styles from "./Series.module.css";

const Series = () => {
  const [upcoming,setUpComing]= useState(true);
  const [ongoing,setOngoing] = useState(false);
  const [completed,setCompleted] = useState(false);
  const [all,setAll] = useState(true);
  const [inter,setInter] = useState(false);
  const [domestic,setDomestic] = useState(false);
  const [women,setWomen] = useState(false);
  const dispatch = useDispatch();
  const seriesUpcomingSelector = useSelector((state)=>state.series.matches)
  const handleUpcoming=()=>{
    setUpComing(true); setOngoing(false); setCompleted(false);
    // dispatch(getSeriesUpcoming());
  };
  
  const handleOngoing=()=>{
    setUpComing(false); setOngoing(true); setCompleted(false)
  }
  const handleCompleted=()=>{
    setUpComing(false); setOngoing(false); setCompleted(true);
    
  }
  const handleAllSeries = (cate)=>{
    if(cate==="all"){
      setAll(true)
      setInter(false);
      setDomestic(false);
      setWomen(false)
    }
    else if(cate==="international") {
      setAll(false)
      setInter(true);
      setDomestic(false);
      setWomen(false)
    }
    else if(cate==="domestic"){
      setAll(false)
      setInter(false);
      setDomestic(true);
      setWomen(false);
    }
    else if(cate==="women"){
      setAll(false)
      setInter(false);
      setDomestic(false);
      setWomen(true);
    }
  }
  useEffect(()=>{
     
      if(upcoming){
        dispatch(getSeriesUpcoming())
      }
      else if(ongoing){
      dispatch(getSeriesOngoing())
      }
      else if(completed){
        dispatch(getSeriesCompleted())
      }
  },[upcoming,ongoing,completed])
  
  return (
    <div className={styles.series_container} >
      <div style={{width:"80px",marginLeft:"17.60%"}} >
      <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"x-large"}} >Series</p>
      </div>
      <div className={styles.series_container2} >
           <div className={styles.series_nav} >
               <div className={styles.series_nav_options} >
                <div onClick={handleUpcoming}  className={upcoming?styles.options_click:styles.options_notclick} >UPCOMING</div>
                <div onClick={handleOngoing}  className={ongoing?styles.options_click:styles.options_notclick} >ONGOING</div>
                <div onClick={handleCompleted} className={completed?styles.options_click:styles.options_notclick}>COMPLETED</div>
               </div>
               <div className={styles.filters_series} >
                  <div onClick={()=>handleAllSeries("all")}  className={all?styles.allSeriesClick:styles.allSeries} >ALL</div>
                  <div onClick={()=>handleAllSeries("international")} className={inter?styles.allSeriesClick:styles.internationalSeries} >INTERNATIONAL</div>
                  <div onClick={()=>handleAllSeries("domestic")}  className={domestic?styles.allSeriesClick:styles.domesticSeries} >DOMESTIC</div>
                  <div onClick={()=>handleAllSeries("women")} className={women?styles.allSeriesClick:styles.womenSeries} >WOMEN</div>
                  <div className={styles.category_series} >T20s</div>
                  <div className={styles.category_series}  >ODIs</div>
                  <div className={styles.category_series} >TEST</div>
               </div>
           </div>
           <div className={styles.series_box} >
             {seriesUpcomingSelector.length>0&&upcoming?
             <div className={styles.series_contentBox} >
                 {seriesUpcomingSelector.filter((item)=>{
                  return (
                    
                      inter?item.category==='International':domestic?item.category==="Domestic":women?item.category==="Women":item
                    
                  )
                 }).map((d)=>{
                  return (
                    <div className={styles.series_matches} >
                        <div className={d.category==="International"?styles.series_tour:d.category==="Domestic"?styles.series_tour1:d.category==="Women"?styles.series_tour2:null} >
                              <div style={{padding:"10px 10px"}} >
                                <p style={{fontSize:"16px",fontWeight:"600"}} >{d.tour},2022</p>
                              </div>
                              <div style={{display:"flex",padding:"0 0 0 10px"}} >
                                 <p style={{color:"gray"}} >{d.T20s>0?d.T20s:0}-T20s  {d.ODIs>0?d.ODIs:0}-ODIs  {d.Test>0?d.Test:0}-Test</p>
                              </div>
                        </div>
                        <div className={d.category==="International"?styles.series_date:d.category==="Domestic"?styles.series_date1:d.category==="Women"?styles.series_date2:null} >
                              {d.startDate} To {d.endDate}
                        </div>
                    </div>
                  )
                 })}
                  </div>: ongoing?
                  <div className={styles.series_contentBox}>
                  {seriesUpcomingSelector.filter((item)=>{
                  return (
                    
                      inter?item.category==='International':domestic?item.category==="Domestic":women?item.category==="Women":item
                    
                  )
                 }).map((d)=>{
                  return (
                    <div className={styles.series_matches} >
                        <div className={d.category==="International"?styles.series_tour:d.category==="Domestic"?styles.series_tour1:d.category==="Women"?styles.series_tour2:null} >
                              <div style={{padding:"10px 10px"}} >
                                <p style={{fontSize:"16px",fontWeight:"600"}} >{d.tour},2022</p>
                              </div>
                              <div style={{display:"flex",padding:"0 0 0 10px"}} >
                                 <p style={{color:"gray"}} >{d.T20s>0?d.T20s:0}-T20s  {d.ODIs>0?d.ODIs:0}-ODIs  {d.Test>0?d.Test:0}-Test</p>
                              </div>
                        </div>
                        <div className={d.category==="International"?styles.series_date:d.category==="Domestic"?styles.series_date1:d.category==="Women"?styles.series_date2:null} >
                              {d.startDate} To {d.endDate}
                        </div>
                    </div>
                  )
                 })}
              </div>:completed?
               <div className={styles.series_contentBox}>
               {seriesUpcomingSelector.filter((item)=>{
               return (
                 
                   inter?item.category==='International':domestic?item.category==="Domestic":women?item.category==="Women":item
                 
               )
              }).map((d)=>{
               return (
                 <div className={styles.series_matches} >
                     <div className={d.category==="International"?styles.series_tour:d.category==="Domestic"?styles.series_tour1:d.category==="Women"?styles.series_tour2:null} >
                           <div style={{padding:"10px 10px"}} >
                             <p style={{fontSize:"16px",fontWeight:"600"}} >{d.tour},2022</p>
                           </div>
                           <div style={{display:"flex",padding:"0 0 0 10px"}} >
                              <p style={{color:"gray"}} >{d.T20s>0?d.T20s:0}-T20s  {d.ODIs>0?d.ODIs:0}-ODIs  {d.Test>0?d.Test:0}-Test</p>
                           </div>
                     </div>
                     <div className={d.category==="International"?styles.series_date:d.category==="Domestic"?styles.series_date1:d.category==="Women"?styles.series_date2:null} >
                           {d.startDate} To {d.endDate}
                     </div>
                 </div>
               )
              })}
           </div>:
            <div style={{textAlign:"center"}}>
               <p style={{fontSize:"30px",fontWeight:"bold",color:'red'}} >404 page not found !!!</p>
            </div>
            }
              
           </div>
      </div>
    </div>
  )
}

export default Series