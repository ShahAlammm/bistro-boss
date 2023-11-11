const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item || {};
  return (
  <div className="flex gap-5">
    <img style={{borderRadius : "0px 200px 200px 200px"}} className="w-[100px]" src={image} />
   <div>
   <h2 className="uppercase font-serif font-bold">{name}-----------------</h2>
    <p>{recipe} .</p>
   </div>
    <h3 className="text-[#D99904]">${price}</h3>
  </div>
  );
};

export default MenuItem;
