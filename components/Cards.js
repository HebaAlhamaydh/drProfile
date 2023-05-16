import React, { useState } from "react";
import Rating from "react-rating-stars-component";
import Image from "next/image";
import styles from "../styles/Cards.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Cards({ doctor }) {
  const {
    Title_En,
    Title_Ar,
    Info_En,
    Info_Ar,
    RatingStars,
    Subtitle_En,
    Subtitle_Ar,
    TotalReviewsCount,
    PrimaryImage,
    DocUserName,
  } = doctor;
  const { locale } = useRouter();
  const title = locale === "en" ? `${Title_En}` : `${Title_Ar}`;
  const info = locale === "en" ? `${Info_En}` : `${Info_Ar}`;
  const subtitle = locale === "en" ? `${Subtitle_En}` : `${Subtitle_Ar}`;

  
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const truncatedTitle = title.length > 15 ? `${title.slice(0, 15)}...` : title;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_img}>
          <Link href={`/doctors/${DocUserName}`}>
            <Image src={PrimaryImage} alt="Pancake" width="100" height="100" />
          </Link>
        </div>
        <div
        className={styles.titleContent}
        >
          <Link
          className={styles.linkTitle}
            href={`/doctors/${DocUserName}`}
          >
           
            <h3
      className={styles.title}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        {isHovered ? title : truncatedTitle}
    </h3>
          </Link>

          {subtitle === "SPECIALIST" || subtitle === "طبيب أخصائي" ? (
            <div className={`${styles.badge} ${styles.badge1}`}><a href="#"className={styles.linkSubTitle}> {subtitle}</a></div>
          ) : subtitle === "CONSULTANT" || subtitle === "طبيب استشاري" ? (
            <div className={`${styles.badge} ${styles.badge2}`}><a href="#"className={styles.linkSubTitle}>{subtitle}</a></div>
          ) : subtitle === "RESIDENT" || subtitle === "طبيب مقيم" ? (
            <div className={`${styles.badge} ${styles.badge3}`}><a href="#"className={styles.linkSubTitle}>{subtitle}</a></div>
          ) : subtitle === "NON MEDICAL - SPECIALIST" || subtitle === "أخصائي غير طبيب" ? (
            <div className={`${styles.badge} ${styles.badge4}`}  onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
               <a  href="#" className={styles.linkSubTitle}>{isHovered ? subtitle : `${subtitle.slice(0, 15)}...`}</a> 
            </div>
          ) : subtitle === "GENERAL PRACTITIONER" || subtitle === " طبيب عام" ? (
            <div className={`${styles.badge} ${styles.badge4}`}  onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <a  href="#" className={styles.linkSubTitle}>{isHovered ? subtitle : `${subtitle.slice(0, 15)}...`}</a> 
            </div>
          ) : null}
        </div>

        <p>{info}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Rating
            count={5}
            size={24}
            activeColor="#ffd700"
            value={5}
            edit={false}
          />
          <p style={{ marginLeft: "8px" }}> {TotalReviewsCount} reviews</p>
        </div>
        <p
          style={{
            paddingTop: "20px",
            fontWeight: "400",
            fontSize: "1rem",
            color: "#595959",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </p>
      </div>
    </>
  );
}
