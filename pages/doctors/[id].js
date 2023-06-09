import axios from "axios";
import DetailDoctor from "../../components/DetailDoctor";

export default function DetailDoctors({ doctor }) {
  return (
    <main className="container">
      <DetailDoctor doctor={doctor} />
    </main>
  );
}
//fetch data to create dynamic
//to determine for next how many pages i have to pass it
export async function getStaticPaths() {
  return {
    paths: [],
    // new paths not returned by getStaticPaths will wait for the HTML to be generated,
    fallback: "blocking",
  };
}
//fetch data and pass it as props to the component
export async function getStaticProps(context) {
  const username = context.params.id;
  const doctorData = await axios.get(
    "https://api-dev-2.cura.healthcare/DoctorProfileAnonymous",
    { params: { username: username, ForceRenderIfNotVerified: false } }
  );

  const doctor = doctorData.data.Result;
  console.log(doctor);
  return {
    //to send doctor to DetailDoctors
    props: { doctor },
  };
}
