import "./footermenu.scss";
import facebook from "../../images/bxl-facebook.png";
import instagram from "../../images/instagram.png";
import youtube from "../../images/youtube.png";
import twitter from "../../images/twitter.png";

const Footermenu = () => {
  return (
    <div className="footermenu">
      <div>
        <h2>FIND A STORE</h2>
        <h2>NIKE JOURNAL</h2>
        <h2>BECOME A MEMBER</h2>
        <h2>FEEDBACK</h2>
        <h2>PROMO CODES</h2>
      </div>
      <div className="footerMenuSection">
        <h2>GET HELP</h2>
        <span>Order Status</span>
        <span>Shipping and Delivery</span>
        <span>Returns</span>
        <span>Payment Options</span>
        <span>Contact Us</span>
      </div>
      <div className="footerMenuSection">
        <h2>GET HELP</h2>
        <span>Order Status</span>
        <span>Shipping and Delivery</span>
        <span>Returns</span>
        <span>Payment Options</span>
        <span>Contact Us</span>
      </div>
      <div className="footerMenuSection">
        <h2>ABOUT NIKE</h2>
        <span>News</span>
        <span>Careers</span>
        <span>Investors</span>
        <span>Sustainability</span>
      </div>
      <div className="footerMenuSection">
        <h2>JOIN US</h2>
        <span>Nike App</span>
        <span>Nike Run Club</span>
        <span>Nike Training Club</span>
      </div>
      <div className="footerMenuSection">
        <h2>SOCIAL</h2>
        <div className="social">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={youtube} alt="youtube" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
    </div>
  );
};

export default Footermenu;
