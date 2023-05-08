import axios from 'axios';
import Image from 'next/image';
import React from 'react'

import AllCards from '../components/AllCards';

export default function allCards(doctors) {
  return (
    
      <>
  <main className="container">
   
  <div className="home">
        <h1>RESULTS</h1>
        
      </div>
      <div className='container-card'>
      <div >

{doctors.Items &&
doctors.Items.map((doctor) => (
 <AllCards key={doctor.Id} doctor={doctor} />

))}
</div>
      <div style={{ border: '1px solid black' }}>

        <h3>Filter</h3>
      </div>
     
   
      </div>
</main>
    </>
   
  )
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