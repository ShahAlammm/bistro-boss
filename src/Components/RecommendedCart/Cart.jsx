

const Cart = ({item}) => {
const {image, name, recipe} = item || {};
  return (
    <div className="mb-24">
      <div className="cart w-96 bg-[#F3F3F3] shadow-xl">
        <figure>
          <img
            src={image}
            className="w-full "
          />
        </figure>
        <div className="cart-body items-center text-center">
          <h2 className="cart-title">{name}</h2>
          <p>{recipe}</p>
          <div className="cart-actions pb-10">
            <button className="btn btn-outline border-0 border-b-4  mt-12">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
