import React, {useState} from 'react';
import styles from "./Series.module.css";

const Series = () => {
  const [upcoming,setUpComing]= useState(true);
  const [ongoing,setOngoing] = useState(false);
  const [completed,setCompleted] = useState(false);
  const handleUpcoming=()=>{
    setUpComing(true); setOngoing(false); setCompleted(false)
  };
  const handleOngoing=()=>{
    setUpComing(false); setOngoing(true); setCompleted(false)
  }
  const handleCompleted=()=>{
    setUpComing(false); setOngoing(false); setCompleted(true)
  }
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
                <div onClick={handleCompleted} className={completed?styles.options_click:styles.options_notclick}  >COMPLETED</div>
               </div>
               <div>

               </div>
           </div>
           <div className={styles.series_box} >
             <div>
     
             </div>
           </div>
      </div>
    </div>
  )
}

export default Series