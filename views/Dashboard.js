import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, []);

  if (!user) {
    return <div>...loading</div>;
  }

  return (
    <div className="item">
      
      {user.map((item) => {
        return (
          <div className="bor">
            <Card 
              image=<img style={{ width: 230 }} src={item.image} />
              price={item.price}
              title={item.title}
             onClick={() => navigate('/Dashboard/' +item.id)}/>
          </div>

         
        );
      })}
    </div>
  );
}

export default Dashboard;
