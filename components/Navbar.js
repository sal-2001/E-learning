import Link from "next/link";
import styles from '../styles/Navbar.module.css'

function Navbar() {
     
    return (
      <header className={styles.navbar}>
        <div className={styles.header}>
          {/* logo*/}
          <div className={styles.logo}>
            {/*<img src={logoIcon} alt="" className="headerLogoImg" />*/}
            <h2>E-learning</h2>
          </div>
          {/* buttons */}
          <div className={styles.headerList}>
            <div>
              <Link href="/" className={styles.headerListItem}>
                <span>Home</span>
              </Link>
            </div>
            <div>
              <Link href="/courses" className={styles.headerListItem}>
                <span>Courses</span>
              </Link>
            </div>
            <div>
              <Link href="/about" className={styles.headerListItem}>
                <span>About Us</span>
              </Link>
            </div>
          </div>
          {/* login or sign up*/}
          <div className={styles.headerLogin}>
            <Link href="/login">
                <button className={styles.loginBtn}>Login</button>
            </Link>
            <Link href="/signup">
                <button className={styles.signupBtn}>Sign up</button>
            </Link>
          </div> 
        </div>
      </header>
    )
}

export default Navbar;