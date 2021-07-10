import styles from './App.module.css'
import Robot from './components/Robot'
import robots from './mockdata/robots.json'
import logo from './assets/images/logo.svg'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="" />
        <h1>罗伯特机器人画廊</h1>
      </div>
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
  )
}

export default App
