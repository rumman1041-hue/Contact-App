import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.Navigation} container`}>
       <img src="/images/do.png"></img>
       <div className={styles.home}>
      <button href="#">Home</button>
      <button href="#">services</button>
      <button href="#">contact</button>
       </div>
    </nav>
  )
}

export default Navigation;
