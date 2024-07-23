import "./content.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import data from "../data";
import Collection from "../collection/Collection";
import Newcollection from "../newcollection/Newcollection";
import Football from '../../images/sports.collection/footbal.png';
import Basketball from '../../images/sports.collection/basketball.png';
import Tennis from '../../images/sports.collection/tennis.png';
import JoinClub from "../../joinClub/JoinClub";
import TextContent from "../textContent/TextContent";
import Clouthes from "../clouthes/Clouthes";

const Content = () => {

  const newList = [
    {
      img: Football,
      name: "Football",
      category: "Sports Equipment",
    },
    {
      img: Basketball,
      name: "Basketball",
      category: "Sports Equipment",
    },
    {
      img: Tennis,
      name: "Tennis",
      category: "Sports Equipment",
    },
  ]

  return (
    <div className="content">
      <div className="newArrivals">
        <h1>NEW ARRIVALS</h1>
        <span>See all items</span>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data
          .filter((item) => {
            return item.category === "Jordan";
          })
          .map((item, i) => {
            return (
              <SwiperSlide key={i * Math.random()}>
                <div className="swiperDiv">
                  <img src={item.img} alt={item.name} />
                  <span>{item.name}</span>
                  <span>{item.category}</span>
                  <span>{item.price}$</span>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="newArrivals">
        <h1>NEW ARRIVALS</h1>
        <span>See all items</span>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data
          .filter((item) => {
            return item.category === "Men shoe's";
          })
          .map((item, i) => {
            return (
              <SwiperSlide key={i * Math.random()}>
                <div className="swiperDiv">
                  <img src={item.img} alt={item.name} />
                  <span>{item.name}</span>
                  <span>{item.category}</span>
                  <span>{item.price}$</span>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="newArrivals">
        <h1>NEW ARRIVALS</h1>
        <span>See all items</span>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data
          .filter((item) => {
            return item.category === "Nike";
          })
          .map((item, i) => {
            return (
              <SwiperSlide key={i * Math.random()}>
                <div className="swiperDiv">
                  <img src={item.img} alt={item.name} />
                  <span>{item.name}</span>
                  <span>{item.category}</span>
                  <span>{item.price}$</span>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Collection />
      <Newcollection />
      <div className="shopSport">
        <div className="newArrivals">
          <h1>NEW ARRIVALS</h1>
          <span>See all items</span>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {newList
            .filter((item) => {
              return item.category === "Sports Equipment";
            })
            .map((item, i) => {
              return (
                <SwiperSlide key={i * Math.random()}>
                  <div className="swiperDiv">
                    <img src={item.img} alt={item.name} />
                    <span>{item.name}</span>
                    <span>{item.category}</span>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <TextContent />
      <JoinClub />
      <Clouthes />
    </div>
  );
};
export default Content;