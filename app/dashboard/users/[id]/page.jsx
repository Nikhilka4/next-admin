import React from "react";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
            <label>Username</label>
            <input type="text" placeholder="John Doe" name="username" />
            <label>Email</label>
            <input type="email" placeholder="John@gmail.com" name="email" />
            <label>Password</label>
            <input type="password" name="password" />
            <label>Phone</label>
            <input type="phone" placeholder="+123456789" name="phone" />
            <label>Address</label>
            <textarea type="text" placeholder="address" name="address" />
            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <label>Is Active?</label>
            <select name="isActive" id="isActive">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
