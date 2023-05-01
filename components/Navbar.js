import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import img from "/public/images/R.jpg";
import Image from "next/image";

import { GrLanguage } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {
  return (
    <nav className={styles.nav} >
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Image src={img} width="40" height="40" />
        </div>
        <ul>
          <li><button className={styles.button}>LOGIN</button></li>
          <li> <button className={styles.button}>SIGN UP</button></li>
          <li ><div><GrLanguage/><span> English</span></div></li>
      <li><div><GiHamburgerMenu/></div></li>
        </ul>
        
   
      </div>
    </nav>
  );
}
