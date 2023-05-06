
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./Slider.scss";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { MdArrowBackIosNew,MdArrowForwardIos } from 'react-icons/md';
import { useRef } from 'react';

const data = [
  "/src/assets/images/bannerimg1.webp",
  "/src/assets/images/bannerimg2.webp",
  "/src/assets/images/bannerimg3.webp",
];

const PrevButton = () => <MdArrowBackIosNew  color='lightgray' size={20}/>;
const NextButton = () => <MdArrowForwardIos color='lightgray' size={20}/>;
const Slider = () => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <Swiper
       navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
       }}
       onBeforeInit={(swiper)=>{
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
   }}
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
       loop={true}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay, Navigation]}
        className='slider'
      >
        {data.map((slide,index)=>(
             <SwiperSlide key={index}>
                <img src={slide} className='slider__img' alt="" />
             </SwiperSlide>
        ))}
            <div ref={prevRef} className='slider__prevbutton'>
            <PrevButton/>
          </div>
          <div ref={nextRef} className="slider__nextbutton">
            <NextButton />
          </div>
      </Swiper>
    )

};

export default Slider;