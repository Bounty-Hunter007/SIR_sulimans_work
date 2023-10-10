import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Products() {
  const params = useParams();
  const [dataItem, setDataItem] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((res) => setDataItem(res));
  }, []);

  if (!dataItem) {
    <div>....loading</div>;
  }

  return (
    <div>
      <p>{params.id}</p>
      <img src={data[params.id].url} />
    </div>
  );
}
