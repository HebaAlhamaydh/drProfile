// import React from "react";
// import axios from "axios";
// import Filter from "../components/Filter";

// export default function filter(filter) {
//   console.log(filter);
//   return (
//     <div>
//       <Filter filter={filter} />
//     </div>
//   );
// }

// export async function getServerSideProps(context) {
//   const filterData = await axios.get(
//     "https://api-dev-2.cura.healthcare/BrowserSearchData/Doctors/AdvancedSearch"
//   );

//   const filter = filterData.data.Results;
//   console.log(filter);
//   return {
//     //to send products to home componet
//     props: filter,
//   };
// }
