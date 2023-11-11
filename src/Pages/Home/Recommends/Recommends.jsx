import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Cart from "../../../Components/RecommendedCart/Cart";

const Recommends = () => {

    const [items, setItems]=useState([])

    useEffect(()=>{
        fetch('Menu.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
  return (
    <div>
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"Should Try"}
      ></SectionTitle>
<div className="grid grid-cols-3 gap-4">
    {
      items?.slice(0,3).map(item=><Cart key={item._id} item={item}></Cart>)
    }
</div>
    </div>
  );
};

export default Recommends;
