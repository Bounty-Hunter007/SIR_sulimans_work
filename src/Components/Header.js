import { useNavigate } from "react-router-dom";
import { HiChatBubbleOvalLeft, HiBellAlert, HiBuildingOffice2,HiMiniTruck } from "react-icons/hi2";
function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="Header-style">
        <h1 className="icon-style">
        <h5 className="pro-style">PROPERTY  < HiBuildingOffice2/></h5>
        <h5 className="mo-style">MOTORS  < HiMiniTruck/></h5>
        <img className="img-sty" src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Logo.png" />
          <HiChatBubbleOvalLeft />{" "}
        </h1>
        <h1 className="icon-style1">
          <HiBellAlert />{" "}
        </h1>
        <img className="img-st" src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/342969801_210621505022384_2271094673481998477_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFs0yvLg2EUKERM77G66mTUn3195Sq3NCOffX3lKrc0I0OdvbDl9O3pywSv6rrByRZuoPxNBiaurUIZ1xgW2U-P&_nc_ohc=MivGZdRbFZQAX9U3GW_&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfBpO_ka2gJKYjSfPC4EgVcS8pz12xWtVi7ow68VhN5ygg&oe=65309F51" />
        <img
          className="img-style" onClick={() => navigate("/albums")}
          src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"
        />
        <input className="inp" placeholder="Pakistan" />
        <input
          className="inp1"
          placeholder="Find Cars, Mobile Phones and more+"
        />
      </div>
      <div>
     <h3 className="dash-style" onClick={() => navigate("/dashboard")}>Dashboard</h3>
      <img  onClick={() => navigate("/postAd")} className="sell-tyle" src="https://cdn.textstudio.com/output/sample/normal/2/1/5/6/sell-logo-261-6512.png" />

      </div>
      
    </div>
    
  );
}

export default Header;
