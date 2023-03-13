import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import {courseList} from "../courseList";
import SubjectItem from "@/components/subjectItem";
import styles from "../styles/Courses.module.css";
function Courses() {
  const [courselist, setCourselist] = useState([]);
  //console.log(courses);
  useEffect(()=>setCourselist(courseList),[]);
  return ( 
    <>
      <Navbar/>
      <div className={styles.courses_container}>
        <h2>Choose your subjects</h2>
        <div>
          {courseList.map(each => {
            return <SubjectItem key={each.id} each={each}/>
          })}
        </div>
      </div>
    </>
  )
}

export default Courses;