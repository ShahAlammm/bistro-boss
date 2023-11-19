import Cart from "../../../Components/RecommendedCart/Cart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {items?.slice(0, 6).map((item) => (
              <Cart key={item._id} item={item}></Cart>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {items.length > 6 ? (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {items?.slice(6, 12).map((item) => (
                <Cart key={item._id} item={item}></Cart>
              ))}
            </div>
          ) : (
            <div className="mt-72">
              <h1 className="text-2xl">Item Is Finished</h1>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {items.length > 12 ? (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {items?.slice(12, 18).map((item) => (
                <Cart key={item._id} item={item}></Cart>
              ))}
            </div>
          ) : (
            <div className="mt-72">
              <h1 className="text-2xl">Item Is Finished</h1>
            </div>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;
