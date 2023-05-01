import Head from "next/head";

import Link from "next/link";
import Cards from "../components/Cards";
import axios from "axios";
import myIcon from "../public/images/cura.png";

export default function Home(doctors) {
  // console.log(doctors);
  return (
    <main className="container">
   
        <Head>
          <title>كيورا|</title>

          <link rel="icon" type="image/png" href={myIcon} />
        </Head>
      

      <div className="home">
        <h1>FEATURED DOCTORS</h1>
        <h3 style={{ color: "#ccc", fontWeight: "300" }}>
          <Link href="/allCards">SHOW ALL</Link>
        </h3>
      </div>

      <div className="main">
        {doctors.Items &&
          doctors.Items.slice(0, 6).map((doctor) => (
            <Cards key={doctor.Id} doctor={doctor} />
          ))}
      </div>
    </main>
  );
}
export async function getStaticProps() {
  const doctorData = await axios.get(
    "https://api-dev-2.cura.healthcare/BrowserData"
  );

  const doctors = doctorData.data;
  // console.log(doctors.Results[4]);
  return {
    //to send products to home componet
    props: doctors.Results[4],
  };
}
