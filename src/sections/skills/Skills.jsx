// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




// import required modules
import { Pagination ,Autoplay} from 'swiper/modules';


import data from './data'
import Skill from "./skill";
import './skills.css';




import React from 'react'

const Skills = () => {
  return (
   <section id="skills" className='testimonials' >
    <h2> 
      Skills
    </h2>
    <p>Time to show some Technologies...</p>
    <div className="container">
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        {data.map(testimonial=>(
        <SwiperSlide key={testimonial.id}>
           <Skill testimonial={testimonial}/>
        </SwiperSlide>))}
       
      </Swiper>
    </div>
   </section>
  )
}

export default Skills