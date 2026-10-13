import React, { Component } from 'react'
import styles from '../mystyle.module.css'
 class Car extends Component {
  

  render() {
    return (
      <div>
        <h1 className ={styles.car}>Hello Car</h1>
      </div>
    )
  }
}
export default Car;
