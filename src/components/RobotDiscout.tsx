import React from 'react'
import styles from './Robot.module.css'
import { appContext } from '../AppState'
import { useContext } from 'react'
import { useAddToCart } from './AddToCart'

export interface RobotProps {
  id: number
  name: string
  email: string
}

// type React.FC<P = {}> = React.FunctionComponent<P>
const RobotDiscount: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext)
  const addToCart = useAddToCart()
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>打折商品：{name}</h2>
      <p>{email}</p>
      <p>作者：{value.userName}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  )
}

export default RobotDiscount
