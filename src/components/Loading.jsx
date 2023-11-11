import loader from "../assets/contentloader.gif";
// component to show a loader until we dont have data
export default function Loading() {
  return (
    <div className="content-loader">
      <img src={loader} alt="" />
    </div>
  );
}
