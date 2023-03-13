import Navbar from "@/components/Navbar";
import styles from "../styles/Results.module.css";

function Results({result}) {
  console.log(result);
  return (
    <>
    <Navbar/>
    <div className={styles.result_container}>
      {result=="2" && 
        <div>
          <h1 className={styles.correct_answer}>Congratulations</h1>
        </div>
      }
      {result=="1" && 
        <div>
          <h1 className={styles.onecorrect_answer}>Oops! one answer is wrong</h1>
        </div>
      }
      {result=="0" && 
        <div>
          <h1 className={styles.wrong_answer}>Test failed</h1>
        </div>
      }
    </div>
    </>
    
  )
}
Results.getInitialProps = async ({ query }) => {
    const { result } = query;
    return { result };
}
export default Results;