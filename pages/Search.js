import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

import AllCards from "../components/AllCards";
import Filter from "../components/Filter";

export default function Search({ doctors }) {
  const [data, setData] = useState(doctors);
  return (
    <>
      <main className="container">
        <div className="home">
          <h1>RESULTS</h1>
        </div>
        <div className="container-card">
          <div>
            {data.Items &&
              data.Items.map((doctor) => (
                <AllCards key={doctor.Id} doctor={doctor} />
              ))}
          </div>
          <div>
            <Filter setData={setData} />
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const doctorData = await axios.get(
    "https://api-dev-2.cura.healthcare/BrowserData"
  );

  const doctors = doctorData.data;
  console.log(doctors.Results[4]);
  return {
    //to send products to home componet
    props: {
      doctors: doctors.Results[4],
    },
  };
}
