import styles from './App.module.css'
import Robot from './components/Robot'
import robots from './mockdata/robots.json'
import logo from './assets/images/logo.svg'
import ShoppingCart from './components/ShoppingCart'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="" />
        <h1>罗伯特机器人画廊</h1>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robots.map((r, i) => (
          <Robot id={r.id} key={i} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
  )
}

export default App
