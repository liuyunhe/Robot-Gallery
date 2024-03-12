import styles from './App.module.css'
import Robot from './components/Robot'
import RobotDiscout from './components/RobotDiscout'
import logo from './assets/images/logo.svg'
import ShoppingCart from './components/ShoppingCart'
import React, { useEffect } from 'react'
import { useState } from 'react'

// * 生命周期第一阶段：初始化

// 初始化组件state

// state getDerivedStateFromProps(nextProps, prevState)  对比nextProps, prevState
// ↓
// render() {}
// ↓
// componentDidMount() {}

// * 生命周期第二个阶段：更新

// 在组件接收到一个新的prop（更新后）时被调用

// componentWillReceiveProps(弃用)

// static getDerivedStateFromProps(nextProps, prevState) {
//   const {type} = nextProps;
//   // 当传入的type发生变化的时候，更新state
//   if (type !== prevState.type) {
//       return {
//           type,
//       };
//   }
//   // 否则，对于state不进行任何操作
//   return null;
// }

// Called to determine whether the change in props and state should trigger a re - render.
// shouldComponentUpdate(nextProps, nextState) {}

// Called immediately after updating occurs. Not called for the initial render.
// componentDidUpdate() {}

// * 生命周期第三阶段：销毁
// 组件销毁后调用
// 可以当做解构函数destructor来使用

// componentWillUnmount() {}  可避免内存泄漏

const App: React.FC = (props) => {
  // setState
  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    document.title = `点击${count}次`
  }, [count])

  // 第二个参数传入[]等同于componentDidMount() {},仅执行一次
  // 如果不传第二个参数则每次渲染ui时都会执行,等同于componentDidUpdate() {}
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setRobotGallery(data)
      } catch (e) {
        setError(e.message)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="" />
        <h1>罗伯特机器人画廊</h1>
      </div>
      <button
        onClick={() => {
          // setState()是异步的还是同步的？异步更新,同步执行
          // setState()本身并非异步，但对state的处理机制给人一种异步的假象，state处理一般发生在生命周期变化的时候
          setCount(count + 1)
        }}
      >
        Click
      </button>
      <span>count:{count}</span>
      <ShoppingCart />
      {error && <div>网站出错：{error}</div>}
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map((r, i) =>
            i % 2 === 0 ? (
              <RobotDiscout
                id={r.id}
                key={r.website}
                email={r.email}
                name={r.name}
              />
            ) : (
              <Robot id={r.id} key={r.website} email={r.email} name={r.name} />
            )
          )}
        </div>
      ) : (
        <h2>loading 加载中</h2>
      )}
    </div>
  )
}

export default App
