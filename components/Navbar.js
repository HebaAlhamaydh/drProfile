import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import React, { useState } from "react";
import search from "../public/images/search.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import CuraLogo from "./CuraLogo";
import { useRouter } from "next/router";
import Image from "next/image";


export default function Navbar() {
  //aspath=>because we need string as the user see
  ///path=>its is dynamic path with id server side
  const { locale, asPath, push } = useRouter();

  const [isLanguageActive, setIsLanguageActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  // const [languageDirection, setLanguageDirection] = useState('ltr');

  //The changeLanguage() function is defined to toggle the language between English ("en") and Arabic ("ar").
  // It does this by checking the current locale and setting newLocale to the opposite value
  // const changeLanguage = (e) => {
  //   const newLocale = locale === "en" ? "ar" : "en";
  //   push(asPath, asPath, { locale: newLocale });
  // };

  // setIsLanguageActive takes the current state st and returns the opposite of its boolean value (!st)
  const handleClick = () => setIsLanguageActive((st) => !st);

  const handleChangeIcon = () => {
    isLanguageActive == true ?  setIsLanguageActive((st) => !st) : setIsMenuActive((st) => !st);
  };
  function handleLinkClick(locale) {
    setIsLanguageActive(false);
    // locale === "en" ? styles.rtlDirection : styles.ltrDirection;
  
  }


  const languages = locale === "en" ? `Eng` : `عربي`;
  return (
    <>
      <nav className={styles.navMenu}>
        <div className={styles.navInfo}>
          <ul class={styles.navList}>
            <li className={styles.image}>
              <CuraLogo />
            </li>
            <li   class={styles.search}>
              <input
                type="text"
              
                placeholder="Search ..."
              />
              <Image
                src={search}
                width="20"
                height="20"
                className={styles.searchIcon}
              />
            </li>
            <div className={styles.btn}>
              <li className={`${styles.link} ${styles.login}`}>
                <a href="#" className={styles.link}>
                  LOGIN
                </a>
              </li>
              <li className={`${styles.link} ${styles.signup}`}>
                <a href="#" className={styles.link}>
                  SIGNUP
                </a>
              </li>
            </div>

            {/******menu language ********/}
            <div className={styles.language}>
              <li className={styles.dropDown}>
                <button className={styles.langBtn} onClick={handleClick}>
                  <svg
                    width="28"
                    height="30"
                    viewBox="0 0 19 19"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.svg}
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M-3-3h25v25H-3z"></path>
                      <g fill="#000" fill-rule="nonzero">
                        <path d="M9.5 18.402A8.902 8.902 0 1 1 9.5.598a8.902 8.902 0 0 1 0 17.804zm0-1.137a7.765 7.765 0 1 0 0-15.53 7.765 7.765 0 0 0 0 15.53z"></path>
                        <path d="M9.5 18.402c-2.137 0-3.585-4-3.585-8.902C5.915 4.598 7.363.598 9.5.598s3.585 4 3.585 8.902c0 4.902-1.448 8.902-3.585 8.902zm0-1.137c1.195 0 2.448-3.463 2.448-7.765S10.695 1.735 9.5 1.735 7.052 5.198 7.052 9.5s1.253 7.765 2.448 7.765z"></path>
                        <path d="M1.7 7.402a.568.568 0 0 1 0-1.137h15.567a.568.568 0 0 1 0 1.137H1.7zM1.7 12.735a.568.568 0 1 1 0-1.137h15.567a.568.568 0 0 1 0 1.137H1.7z"></path>
                      </g>
                    </g>
                  </svg>
                  <li>
                    <span className={styles.lang}>{languages}</span>
                  </li>
                </button>
                <div
                  className={`${styles.dropdownMenu} ${
                    isLanguageActive ? styles.active : ""
                  }`}
                >
                  <h2> Select Language</h2>
                  <ul className={styles.menuList}>
                    <li>
                      <Link href={asPath} locale="en" onClick={handleLinkClick} >
                        English
                      </Link>
                    </li>
                    <li>
                      <Link href={asPath} locale="ar" onClick={handleLinkClick} >
                        {/**   the same of this statement push(asPath, asPath, { locale: newLocale }); */}
                        العربية
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </div>
            {/* <button onClick={changeLanguage}>langu</button> */}

            {/************************HamburgerMenu*******************/}
            <li>
              <button className={`${styles.langBtn} ${styles.langbtn2}`} onClick={handleChangeIcon}>
                {isLanguageActive || isMenuActive ? <CgClose style={{ fontSize: "30px" }} /> : <GiHamburgerMenu style={{ fontSize: "30px" }} />}
              </button>
              <div
                className={`${styles.dropDownmenuHumberger} ${
                  isMenuActive ? styles.active : ""
                }`}
              >
                <div className={styles.childOne}>
                  <h2> Company</h2>
                  <ul>
                    <li className={styles.menuItem}>
                      <a
                        href="https://company.cura.healthcare/en/"
                        target="_blank"
                      >
                        About Us
                      </a>
                    </li>
                    <li className={styles.menuItem}>
                      <a
                        href="https://company.cura.healthcare/en/for-doctors/"
                        target="_blank"
                      >
                        For Doctors
                      </a>
                    </li>
                    <li className={styles.menuItem}>
                      <a
                        href="https://get.cura.healthcare/cura-for-corporates/?utm_source=website"
                        target="_blank"
                      >
                        For Corporates
                      </a>
                    </li>

                    <li className={styles.menuItem}>
                      <a
                        href="https://company.cura.healthcare/en/blog/"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://articles.cura.healthcare/"
                        target="_blank"
                      >
                        Medical Articles
                      </a>
                    </li>
                  </ul>
                </div>

                <div className={styles.childTwo}>
                  <h2>More</h2>
                  <ul>
                    <li>
                      <a href="/en/bundles/" target="_blank">
                        Medical Programs
                      </a>
                    </li>
                    <li>
                      <a href="/en/categories/" target="_blank">
                        Categories
                      </a>
                    </li>
                    <li>
                      <a href="/en/categories/" target="_blank">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://company.cura.healthcare/en/support/"
                        target="_blank"
                      >
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.medicalLicense}>
        <a href="https://company.cura.healthcare/ar/telemedicine-license/">
          Curative Care Company (CURA) is a licensed company by the Saudi
          Ministry of Health and holds license number 1400005491
        </a>
      </div>
    </>
  );
}
