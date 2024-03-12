import React from 'react'
import styles from './Robot.module.css'
import { appContext } from '../AppState'
import { useContext } from 'react'
import { withAddToCart } from './AddToCart'

export interface RobotProps {
  id: number
  name: string
  email: string
  addToCart: (id, name) => void
}

// type React.FC<P = {}> = React.FunctionComponent<P>
const Robot: React.FC<RobotProps> = ({ id, name, email, addToCart }) => {
  const value = useContext(appContext)
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.userName}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  )
}

export default withAddToCart(Robot)
