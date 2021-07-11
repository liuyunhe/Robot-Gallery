import styles from './App.module.css'
import Robot from './components/Robot'
import logo from './assets/images/logo.svg'
import ShoppingCart from './components/ShoppingCart'
import React from 'react'

interface Props {}

interface State {
  robotGallery: any[]
  count: number
}
class App extends React.Component<Props, State> {
  // * 生命周期第一阶段：初始化

  // 初始化组件state

  // state getDerivedStateFromProps(nextProps, prevState)  对比nextProps, prevState
  // ↓
  // render() {}
  // ↓
  // componentDidMount() {}

  constructor(props) {
    super(props)
    this.state = {
      robotGallery: [],
      count: 0
    }
  }

  // 在组件创建好dom元素以后，挂载进页面的时候调用

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => this.setState({ robotGallery: data }))
  }

  // * 生命周期第二个阶段：更新
  // 在组件接收到一个新的prop（更新后）时被调用

  // componentWillReceiveProps(弃用)

  // state getDerivedStateFromProps(nextProps, prevState)  对比nextProps, prevState
  // ↓
  // render() {}
  // ↓
  // componentDidMount() {}

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

  render() {
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
            this.setState(
              (prevState, preProps) => {
                return { count: prevState.count + 1 }
              },
              () => {
                console.log(this.state.count)
              }
            )
            this.setState(
              (prevState, preProps) => {
                return { count: prevState.count + 1 }
              },
              () => {
                console.log(this.state.count)
              }
            )
          }}
        >
          Click
        </button>
        <span>count:{this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r, i) => (
            <Robot id={r.id} key={i} email={r.email} name={r.name} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
