import React, { useState } from "react";
import styles from "../styles/DetailDoctor.module.css";
import Rating from "react-rating-stars-component";
import Image from "next/image";
import profile from "../public/images/profile.png";
import leftRow from "../public/images/leftIcon.png";
import { useRouter } from "next/router";

export default function DetailDoctor({ doctor }) {
  const {
    FirstName_ar,
    LastName_ar,
    FirstName,
    LastName,
    ProfilePicThumbnail,
    SpecialtyTitle_ar,
    SpecialtyTitle_en,
    Sections,
    CountryName_ar,
    CountryName_en,
    CityCityName_ar,
    CityCityName_en,
  } = doctor;

  //////////////////////////////////////////LOAD MORE COMMENTS//////////////////
  const [numToShow, setNumToShow] = useState(6); // initial number of recommendations to show

  const handleLoadMore = () => {
    setNumToShow(numToShow + 6); // increment the number of recommendations to show
  };
  ///////////////////change the languages of the page//// //////////
  const { locale } = useRouter();

  const name =
    locale === "en"
      ? `Dr. ${FirstName} ${LastName}`
      : `د. ${FirstName_ar} ${LastName_ar}`;
  const country =
    locale === "en"
      ? ` ${CountryName_en},${CityCityName_en}`
      : `${CountryName_ar} ${CityCityName_ar}`;
  const SpecialtyTitle =
    locale === "en" ? `${SpecialtyTitle_en}` : `${SpecialtyTitle_ar}`;
  const information = locale === "en" ? `Information` : `المعلومات`;
  const Reviews = locale === "en" ? `Reviews` : `التقييم`;

  return (
    <div className={styles.container}>
      <div className={styles.rightContainer}>
        {/************** PROFILE DETAILS ************/}
        <Image className={styles.drImg}
          src={`https://s3.dualstack.eu-west-1.amazonaws.com/curaapps/${ProfilePicThumbnail}`}
          width="165"
          height="165"
          alt="profile"
          style={{ borderRadius: "50%", maginTop: "50px" }}
        />
        <div className={styles.drInfo}>
          <h1>{name}</h1>
          <h3>{SpecialtyTitle}</h3>
          <div className={styles.rate}>
            <div className={styles.review}>
              <Rating
                count={5}
                size={24}
                activeColor="#ffd700"
                value={5}
                edit={false}
              />
            </div>

            <div className={styles.rev}>{doctor.Rating} Reviews</div>
          </div>
          {/* <hr className={styles.line} /> */}
        </div>
       
           {/****drDetails */}
        {/************** JOBS ************/}
        <div className={styles.drDetails}>
          <div className={`${styles.doctorProfile} ${styles.jobs}`}>
            {Sections.filter(
              (section) => section.ViewTitle === "Jobs I had"
            ).map((section, index) =>
              section.Items.length ? (
                <div key={index} className={styles.doctorProfile}>
                  <h2>{section.EditTitle}</h2>
                  <ul className={styles.doctorProfile}>
                    {section.Items.map((item, index) => (
                      <li key={index}>{item.Title}</li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
          </div>
          {/************** COUNTRY ************/}
          <div className={`${styles.doctorProfile}${styles.contry}`}>
            <h2>country</h2>
            <ul className={styles.doctorProfile}>
              <li>{country}</li>
            </ul>
          </div>
          {/************** LANGUAGES ************/}
          <div className={`${styles.doctorProfile} ${styles.lang}`}>
            {Sections.filter((section) => section.ViewTitle === "I speak").map(
              (section, index) =>
                section.Items.length ? (
                  <div key={index} className={styles.doctorProfile}>
                    <h2>{section.EditTitle}</h2>
                    <ul className={styles.alpha}>
                      {section.Items.map((item, index) => (
                        <li key={index}>{item.Title}</li>
                      ))}
                    </ul>
                  </div>
                ) : null
            )}
          </div>
          <button className={`${styles.btn} ${styles.btn2}`}>
            <a href="#">CONSULT</a>
          </button>
        </div>
      </div>
      {/************************************section Two (leftContainer)************************************* */}
      {/* *****************المعلومات**************/}
      {/***************videoes ************/}
      {/* <video controls src={`https://s3.dualstack.eu-west-1.amazonaws.com/curaapps/${videoSec.Items[0].MediaItemS3Key}`}></video> */}
      <div className={styles.leftContainer}>
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "37px",
          }}
        >
          {information}
        </h2>

        {Sections.filter(
          (section) =>
            section.ViewTitle !== "My Services" &&
            section.ViewTitle !== "Nice Words From Others"
        ).map((section, index) =>
          section.Items.length ? (
            <div key={index} className={styles.card}>
              {section.ViewTitle === "Video Intro." ? (
                <h2 className={styles.headerInfo}></h2>
              ) : (
                <h2 className={styles.headerInfo}>{section.ViewTitle}</h2>
              )}
              <ul className={styles.contentCard}>
                {section.ViewTitle === "Video Intro." ? (
                  <li key={index} style={{ display: "flex" }}>
                    <video
                      controls
                      src={`https://s3.dualstack.eu-west-1.amazonaws.com/curaapps/${section.Items[0].MediaItemS3Key}`}
                      width={780}
                      height={370}
                    ></video>
                  </li>
                ) : (
                  section.Items.map((item, index) => (
                    <li key={index}>{item.Title}</li>
                  ))
                )}
              </ul>
            </div>
          ) : null
        )}
        {/* ****************التقييم***********/}

        <h2
          style={{
            fontWeight: "bold",
            fontSize: "37px",
            padding: " 30px 30px 0 0",
          }}
        >
          {Reviews}
        </h2>

        {Sections.filter(
          (section) => section.ViewTitle === "Nice Words From Others"
        ).map((section, index) =>
          section.Items.length ? (
            <div key={index} className={styles.reviews}>
              {section.Items.slice(0, numToShow).map((item, index) => {
                const date = new Date(item.RecommendationDate);
                const year = date.getFullYear();
                const month = date.getMonth() + 1; // add 1 because getMonth() returns 0-indexed values
                const day = date.getDate();
                const formattedDate = `${year}-${month
                  .toString()
                  .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

                return (
                  <div
                    key={index}
                    className={styles.card}
                    style={{ display: "flex" }}
                  >
                    <div>
                      <Image
                        src={profile}
                        alt="Pancake"
                        width="100"
                        height="100"
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <div style={{ margin: "25px" }}>
                      <h3>{item.RecommendationText}</h3>
                      <h5>{item.RecommenderName}</h5>
                      <h6>{formattedDate}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null
        )}

        <button className={`${styles.btn} `} onClick={handleLoadMore}>
          <a href="#">LOAD MORE</a>
        </button>
      </div>
    </div>
  );
}
