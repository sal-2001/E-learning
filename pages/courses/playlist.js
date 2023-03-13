import Navbar from "@/components/Navbar";
import { useState } from "react";
import { courseList } from "../../courseList";
import styles from "../../styles/Playlist.module.css";
import { useRouter } from "next/router";
function Playlist({ index }) {
    const router = useRouter();
    console.log("index : ", index)
    //console.log(courseList);
    const videoUrl = courseList[index-1].videos[0].link;
    const qn = courseList[index-1].videos[0].questions;
    const ans = courseList[index-1].videos[0].answers;
    const crr = courseList[index-1].videos[0].correct;
    //console.log(videoUrl);
    const [end, setEnd] = useState(false);
    const askQuestion = ()=>{
        setEnd(true);
    }
    const [error, setError] = useState("");
    const [select1, setSelect1] = useState("");
    const [select2, setSelect2] = useState("");
    const handleClick = (e)=>{
        e.preventDefault();
        //console.log(select);
        if(select1 === "" || select2 === "")
        {
            setError("Choose answers for both questions*");
        }else
        {
            setError("");
            router.push({pathname: '../results', query: {result: (select1===crr[0]?1:0) + (select2===crr[1]?1:0)}});
        }
        
    }
    return (
        <>
        <Navbar/>
        <div className={styles.video_container}>
            <h1>{courseList[index-1].title} Lectures</h1>
            <video autoPlay className={styles.video_player} controls onEnded={askQuestion}>
                <source src={videoUrl} type="video/mp4" />
            </video>
            { end && 
            <div>
            <div className={styles.question_container}>
              <h3>1 - {qn[0]}</h3>
              <div className={styles.choices}>
                <div className={styles.choice}>
                  <input type="radio" name="question1" id="A" value={ans[0][0]} onClick={(e)=>setSelect1(e.target.value)}/>
                  <label for="A">{ans[0][0]}</label><br/>
                </div>    
                <div className={styles.choice}>
                  <input type="radio" name="question1" id="B" value={ans[0][1]} onClick={(e)=>setSelect1(e.target.value)}/>
                  <label for="B">{ans[0][1]}</label><br/>
                </div>
                <div className={styles.choice}>
                   <input type="radio" name="question1" id="C" value={ans[0][2]} onClick={(e)=>setSelect1(e.target.value)}/>
                   <label for="C">{ans[0][2]}</label><br/>  
                </div>
                <h3>2 - {qn[1]}</h3>
                <div className={styles.choices}>
                  <div className={styles.choice}>
                    <input type="radio" name="question2" id="A" value={ans[1][0]} onClick={(e)=>setSelect2(e.target.value)}/>
                    <label for="A">{ans[1][0]}</label><br/>
                  </div>    
                  <div className={styles.choice}>
                    <input type="radio" name="question2" id="B" value={ans[1][1]} onClick={(e)=>setSelect2(e.target.value)}/>
                    <label for="B">{ans[1][1]}</label><br/>
                  </div>
                  <div className={styles.choice}>
                    <input type="radio" name="question2" id="C" value={ans[1][2]} onClick={(e)=>setSelect2(e.target.value)}/>
                    <label for="C">{ans[1][2]}</label><br/>  
                  </div>   
               </div>
               <p>{error}</p>
               <button  className={styles.answer_submit}onClick={handleClick}>Submit</button>
               </div>
            </div>
            </div>
            }
        </div>
        </>
    )
}
Playlist.getInitialProps = async ({ query }) => {
    const { index } = query;
    return { index };
}
export default Playlist;