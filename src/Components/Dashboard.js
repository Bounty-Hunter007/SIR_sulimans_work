import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAds, auth } from "../config/firebasic";
import { onAuthStateChanged } from "firebase/auth";

function Dashboard() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getData()

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.email)
      } else {
      }
    });
  }, [])

  const getData = async () => {
    const adsData = await getAds()
    setLoading(false)
    setAds(adsData)
  }

  return (
    <div className="Tit-style">
          <p>Email:  {currentUser}</p>
      <h1 >Dashboard</h1>
      {loading ? <img src='https://i.gifer.com/ZKZg.gif' width='20' />
      :
      ads.map((item, index) => {
        return <div style={{ border: '1px solid black' }}>
          <img className="img-width" src={item.imageUrl}  />
          <div
                  className="title-style"
                  onClick={() => navigate("/dashboard/" + index)}
                >
                 Title:  {item.title} <br/> Price: {item.price} <br/> Description: {item.description} <br/>
                </div>
        </div>
      })}

       <img  onClick={() => navigate("/postAd")} className="sell-tyle" src="https://cdn.textstudio.com/output/sample/normal/2/1/5/6/sell-logo-261-6512.png" />

    </div>
  );
}

export default Dashboard;
