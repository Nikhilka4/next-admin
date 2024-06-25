import React from 'react'
import styles from './transactions.module.css'
import Image from 'next/image'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h3>Latest Transactions</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
            <div className={styles.user}>
              <Image src="/noavatar.png" className={styles.userImage} alt="user" width={40} height={40} />
              John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending </span>
            </td>
            <td>14.02.2024</td>
            <td>₹320</td>
          </tr>
          <tr>
            <td>
            <div className={styles.user}>
              <Image src="/noavatar.png" className={styles.userImage} alt="user" width={40} height={40} />
              John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done </span>
            </td>
            <td>14.02.2024</td>
            <td>₹320</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
              <Image src="/noavatar.png" className={styles.userImage} alt="user" width={40} height={40} />
              John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>Cancelled </span>
            </td>
            <td>14.02.2024</td>
            <td>₹320</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions