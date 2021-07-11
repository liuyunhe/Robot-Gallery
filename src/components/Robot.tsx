import React from 'react'
import styles from './Robot.module.css'
import { appContext, appSetStateContext } from '../AppState'
import { useContext } from 'react'

interface RobotProps {
  id: number
  name: string
  email: string
}

// type React.FC<P = {}> = React.FunctionComponent<P>
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext)
  const setState = useContext(appSetStateContext)

  const addToCart = () => {
    if (setState) {
      setState((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }]
          }
        }
      })
    }
  }

  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.userName}</p>
      <button onClick={addToCart}>加入购物车</button>
    </div>
  )
}

export default Robot
