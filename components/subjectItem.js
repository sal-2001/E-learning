import styles from "../styles/SubjectItem.module.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Link from "next/link";
import { useRouter } from "next/router";
function SubjectItem({each}) {
  const {id, title, imgUrl, lectures, duration} = each;
  const router = useRouter();
  const handleClick = (e)=>{
    e.preventDefault();
    router.push({pathname: './courses/playlist', query: {index: id}});
  }
  return (
    <div className={styles.subject_item}>
       <div className={styles.image_container}>
         <img src={imgUrl} alt="" className={styles.subject_image} />
       </div>
       <div className={styles.subject_details}>
         <h3>{title}</h3>
         <p>
           Total lectures : {lectures}
         </p>
         <span>Total duration: {duration} hrs</span>
        </div>
        <div className={styles.watch_videos} onClick={handleClick}>
            <span>Watch Videos</span>
            <PlayCircleOutlineIcon className={styles.play_icon}/>
        </div> 
    </div>
  )
}

export default SubjectItem;