import landingPageVideo from "../../assets/video/teste.mp4"

function LandingPage() {
  return (
    <div>
      <h1>Landing</h1>
      <video src={landingPageVideo} muted autoPlay loop  ></video>
    </div>
  );
}
export default LandingPage;
