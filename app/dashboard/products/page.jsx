import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/ui/dashboard/products/products.module.css'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/pagination'

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New product</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  className={styles.productImage}
                  alt="user"
                  width={40}
                  height={40}
                />
                IPhone
              </div>
            </td>
            <td>desc</td>
            <td>₹1.5 lakh</td>
            <td>14.02.2024</td>
            <td>27</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/1">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default Products