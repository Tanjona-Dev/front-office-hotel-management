import videoLandingPage from "../../assets/teste.mp4"

function LandingPage() {
  return (
    <div>
      <h1>Landing</h1>
      <video src={videoLandingPage}  autoPlay loop  ></video>
    </div>
  );
}
export default LandingPage;
