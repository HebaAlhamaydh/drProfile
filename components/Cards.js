import React from "react";
import Rating from "react-rating-stars-component";
import Image from "next/image";
import styles from "../styles/Cards.module.css";
import Link from "next/link";

export default function Cards({ doctor }) {
  const {
      
    Title_En,
    Info_En,
    RatingStars,
    Subtitle_En,
    TotalReviewsCount,
    PrimaryImage,
    DocUserName
  } = doctor;

  //
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_img}>
        <Link href={`/doctors/${DocUserName}`}><Image
            src={PrimaryImage}
            alt="Pancake"
            width="100"
            height="100"
          />
       </Link>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: 'start',
          }}
        >
            <Link href={`/doctors/${DocUserName}`} style={{textDecoration:'none',color:'black'}}><h3 className={styles.title}>{Title_En}...</h3></Link>

          {Subtitle_En === "SPECIALIST" ? (
            <div className={`${styles.badge} ${styles.badge1}`}>
              {Subtitle_En}
            </div>
          ) : Subtitle_En === "CONSULTANT" ? (
            <div className={`${styles.badge} ${styles.badge2}`}>
              {Subtitle_En}
            </div>
          ) : Subtitle_En === "RESIDENT" ? (
            <div className={`${styles.badge} ${styles.badge3}`}>
              {Subtitle_En}
            </div>
          ) : Subtitle_En === "GENERAL PRACTITIONER" ? (
            <div className={`${styles.badge} ${styles.badge4}`}>
              {Subtitle_En.slice(0, 10)}...
            </div>
          ) : null}
        </div>

        <p>{Info_En}</p>
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
        <p style={{paddingTop:'20px', fontWeight: "400",fontSize:'1rem',color:'#595959'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.
        </p>
      </div>
    </>
  );
}
