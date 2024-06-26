import React from "react";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
            <label>Title</label>
            <input type="text" placeholder="John Doe" name="title" />
            <label>Price</label>
            <input type="number" placeholder="John@gmail.com" name="price" />
            <label>Stock</label>
            <input type="number" placeholder="27" name="stock" />
            <label>Color</label>
            <input type="text" placeholder="red" name="color" />
            <label>Size</label>
            <input type="text" placeholder="New York" name="size" />
            <label>Category</label>
            <select name="isAdmin" id="isAdmin">
                <option value="kitchen">Kitchen</option>
                <option value="computers">Computers</option>
            </select>
            <label>Description</label>
            <textarea name="desc" id="desc" rows="10" placeholder="description"></textarea>
            <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
