import React, { useEffect, useState } from "react";
import styles from "../styles/Filter.module.css";
import Select from "react-select";
import { useRouter } from "next/router";
import axios from "axios";
import countryIds from "../data/countryIds";
import classificationId from "../data/classificationId";
export default function Filter({ setData }) {
  const router = useRouter();
  const { query } = router;

  const filterSearch = ({
    search,
    orderby,
    availability,
    country,
    nationality,
    gender,
    classification,
    speciality,
    subSpecialities,
  }) => {
    if (search) query.search = search;
    if (orderby) query.orderby = orderby;
    if (availability) query.availability = availability;
    if (country) query.country = country;
    if (nationality) query.nationality = nationality;
    if (gender) query.gender = gender;
    if (classification) query.classification = classification;
    if (speciality) query.speciality = speciality;
    if (subSpecialities) query.subSpecialities = subSpecialities;

    router.push({
      pathname: router.pathname,
      query: query,
    });
  };
  ///////////array country///////
  const countries = [
    { value: "1", label: "Saudi Arabia" },
    { value: "2", label: "Bahrain" },
  ];
  ///////////
  const handleGenderChange = (e) => {
    filterSearch({ gender: e.target.value });
  };

  const handleNationalityChange = (selectedOption) => {
    filterSearch({ nationality: selectedOption.value });
  };

  const handleCountryChange = (selectedOption) => {
    filterSearch({ country: selectedOption.value });
  };
  const handleAvailabilityChange = (e) => {
    filterSearch({ availability: e.target.value });
  };

  const handleSortByChange = (e) => {
    filterSearch({ orderby: e.target.value });
  };

  const handleClassificationChange = (selectedOption) => {
    filterSearch({ classification: selectedOption.value });
  };
  const handleSpecialityChange = (e) => {
    filterSearch({ speciality: e.target.value });
  };
  const handleSubSpecialityChange = (e) => {
    filterSearch({ subSpecialities: e.target.value });
  };

  useEffect(() => {
    const advanceData = {
      Gender: query.gender,
      Availability: query.availability,
    };
    const drData = JSON.stringify(advanceData)
      .replaceAll('"', "")
      .replaceAll(" ", "");
    const data = {
      params: {
        SearchText: "sara",
        RequestedCountryId: query.country,
        DoctorAdvancedSearch: drData,
      },
    };
    // const apiURL = "https://api-dev-2.cura.healthcare/BrowserSearchData/Doctors/AdvancedSearch/?search=sara&RequestedCountryId=&DoctorAdvancedSearch={Gender:1,Availability:3}";
    const apiURL = `https://api-dev-2.cura.healthcare/BrowserSearchData/Doctors/AdvancedSearch/`;
    axios.get(apiURL, data).then((res) => {
      setData(res.data.Results[0]);
      console.log(res.data.Results[0]);
    });
  }, [query]);
  const orderby = 2;
  const availability = 1;
  return (
    <div className={styles.filterContainer}>
      <div className={styles.headerFilter}>
        <h3>FILTERS</h3>
        <h3 className={styles.headerSection}>Clear All</h3>
      </div>
      <p className={styles.headerSection}>SORT BY</p>
      <div className={styles.sortBy}>
        <div className={`${styles.availabilityItem} ${styles.itemSelection}`}>
          <input
            type="radio"
            id="Availability"
            name="orderby"
            value="1"
            className={`${styles.radioButton} `}
            checked={orderby === "1"}
            onChange={handleSortByChange}
          />
          <label className={styles.radioLabel} htmlFor="Availability">
            Availability
          </label>
        </div>

        <div className={`${styles.spcialityItem} ${styles.itemSelection}`}>
          <input
            type="radio"
            id="Specialty"
            name="orderby"
            value="2"
            className={`${styles.radioButton}`}
            checked={orderby === "2"}
            onChange={handleSortByChange}
          />
           
          <label className={styles.radioLabel} htmlFor="Specialty">
            Specialty
          </label>
        </div>

        <div className={`${styles.reviewsItem} ${styles.itemSelection}`}>
          <input
            type="radio"
            id="Reviews"
            name="orderby"
            value="3"
            className={`${styles.radioButton} `}
            checked={orderby === "3"}
            onChange={handleSortByChange}
          />
           {" "}
          <label className={styles.radioLabel} htmlFor="Reviews">
            Reviews
          </label>
        </div>
      </div>

      <p className={styles.headerSection}>AVAILABILITY</p>
      <div className={styles.availaility}>
        <div className={`${styles.onlineItem} ${styles.itemSelection}`}>
          <input
            type="radio"
            id="Online"
            name="availability"
            value="1"
            className={`${styles.radioButton} `}
            checked={availability === "1"}
            onChange={handleAvailabilityChange}
          />
           {" "}
          <label className={styles.radioLabel} htmlFor="Online">
            Online
          </label>
        </div>

        <div className={`${styles.awayItem} ${styles.itemSelection}`}>
          <input
            type="radio"
            id="Away"
            name="availability"
            value="2"
            className={`${styles.radioButton}`}
            checked={availability === "2"}
            onChange={handleAvailabilityChange}
          />
           
          <label className={styles.radioLabel} htmlFor="Away">
            Away
          </label>
        </div>

        <div className={`${styles.offlineItem} ${styles.itemSelection}`}>
          <input
            type="radio"
            id="Offline"
            name="availability"
            value="3"
            className={`${styles.radioButton} `}
            checked={availability === "3"}
            onChange={handleAvailabilityChange}
          />
           {" "}
          <label className={styles.radioLabel} htmlFor="Offline">
            Offline
          </label>
        </div>
      </div>
      <p className={styles.headerSection}>COUNTRY</p>
      <div className={styles.Country}>
        <div className={styles.flagCountry}></div>
        <div className={styles.selectWrapper}>
          <Select
            options={countries}
            className={styles.select}
            onChange={handleCountryChange}
          />
        </div>
      </div>
      <p className={styles.headerSection}>NATIONALITY</p>
      <div className={styles.nationality}>
        <div className={styles.flagCountry}></div>
        <div className={styles.selectWrapper}>
          <Select
            options={countryIds}
            className={styles.select}
            onChange={handleNationalityChange}
          />
        </div>
      </div>

      <p className={styles.headerSection}>GENDER</p>
      <div className={styles.gender}>
        <div className={`${styles.maleItem} ${styles.itemSelection}`}>
          <input
            type="radio"
            id="Male"
            name="gender"
            value="Male"
            className={`${styles.radioButton} `}
            checked={query.gender === "1"}
            onChange={handleGenderChange}
          />
          <label className={styles.radioLabel} htmlFor="Male">
            Male
          </label>
        </div>

        <div className={`${styles.femaleItem} ${styles.itemSelection}`}>
          <input
            type="radio"
            id="Female"
            name="gender"
            value="Female"
            className={`${styles.radioButton} `}
            checked={query.gender === "2"}
            onChange={handleGenderChange}
          />
          <label className={styles.radioLabel} htmlFor="Female">
            Female
          </label>
        </div>
      </div>
      <p className={styles.headerSection}>CLASSIFICATION</p>
      <div>
        <Select
          options={classificationId}
          className={styles.select}
          onChange={handleClassificationChange}
        />
      </div>
      <p className={styles.headerSection}>SPECIALITY</p>
      <div>
        <Select
          // options={options}
          onChange={handleSpecialityChange}
          // value={selectedSpeciality}
        />
      </div>
      <p className={styles.headerSection}>SUB SPECIALITY</p>
      <div>
        <Select
          // options={options}
          onChange={handleSubSpecialityChange}
          // value={selectedSubSpeciality}
        />
      </div>
    </div>
  );
}
