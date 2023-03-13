//carousels/Bootstrap.js
import { useState } from "react";
import { quotes } from "../public/quotes.json";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Bootstrap.module.css";
export default function BootstrapCarousel() {
  const { bootstrap } = quotes;
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={styles.carousel_items}>
        <Carousel activeIndex={index} className={styles.carousel_container} onSelect={handleSelect}>
        {bootstrap.map((item) => (
            <Carousel.Item key={item.id} className={styles.itemP} interval={3000}>
            <img className={styles.carousel_image} src={item.imageUrl} alt="" />
            </Carousel.Item>
        ))}
        </Carousel>
    </div>
    
  );
}