import "./slider.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import topImage from '../../images/top.png';
import wallPaper from '../../images/blue-wallpaper.jpg';
import wallPaper3 from '../../images/thirdWll.png';
import wallPaper4 from '../../images/fourWll.jpg';

const Slider = () => {


  return (
    <div className="sliderDiv">
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={topImage} alt="topImage" />
        </SwiperSlide>  
        <SwiperSlide>
          <img src={wallPaper} alt="wallPaper"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={wallPaper3} alt="wallPaper3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wallPaper4} alt="wallPaper4" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider