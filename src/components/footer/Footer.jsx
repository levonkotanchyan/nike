import geo from "../../images/Geo.png";
import "./footer.scss";
import useGeoLocation from "react-ipgeolocation";
const Footer = () => {
  const location = useGeoLocation();
  console.log(location);
  return (
    <div className="footer">
      <div className="footerRow1">
        <div>
          <img src={geo} alt="geo icon" />
          {location.country}
        </div>
        <span>Guides</span>
        <span>Terms of Use</span>
        <span>Terms of Sale</span>
        <span>Company Details</span>
        <span>Modern Slavery Act</span>
        <span>Privacy & Cookie Policy</span>
        <span>Cookie Settings</span>
      </div>
      <div className="footerRow2">
      © 2023 Olrich Redesign  | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
