import BootstrapCarousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
function Index() {
  const [text, setText] = useState("loading")
  useEffect(()=>{
    fetch('http://localhost:3000/api/test')
    .then(res=>res.json())
    .then(data => {
       setText(data.message)
    })
  })
  return (
    <>
      <Navbar/>
      <BootstrapCarousel/>
      <div className={styles.title_container}>
         <h1 className={styles.invite}>Start learning from the best</h1>
      </div>
    </>
  )
}
export default Index;