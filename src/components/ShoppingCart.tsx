import React from 'react'
import styles from './ShoppingCart.module.css'
import { FiShoppingCart } from 'react-icons/fi'
import { appContext } from '../AppState'

interface Props {}

interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // e.target描述的是事件发生的元素
    console.log('e.target', e.target)
    // e.currentTarget描述的是事件处理绑定的元素
    console.log('e.currentTarget')
    if ((e.target as HTMLElement).nodeName === 'SPAN') {
      this.setState({ isOpen: !this.state.isOpen })
    }
  }

  render() {
    return (
      <appContext.Consumer>
        {(value) => (
          <div className={styles.cartContainer}>
            <button className={styles.button} onClick={this.handleClick}>
              <FiShoppingCart />
              <span>购物车 {value.shoppingCart.items.length}（件）</span>
            </button>
            <div
              className={styles.cartDropDown}
              style={{ display: this.state.isOpen ? 'block' : 'none' }}
            >
              <ul>
                {value.shoppingCart.items.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </appContext.Consumer>
    )
  }
}

export default ShoppingCart
