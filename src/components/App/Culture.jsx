import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import slides from '../../data/App/culture.json';

import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';

SwiperCore.use([Pagination, Autoplay]);

const Culture = () => {
  const [lgGallery, setLgGallery] = useState(null);

  const showFancybox = (e, index) => {
    e.preventDefault();
    lgGallery.instance.el.children[index].click()
  }

  return (
    <section className="culture section-padding style-5">
      <div className="section-head text-center style-4 mb-60">
        <small className="title_small">Our Philosophy</small>
        <h2 className="mb-20">Discover our <span>Culture</span> </h2>
        <p>More 15,000 Companies & partners trusted & choice Iteck</p>
      </div>
      <div className="content">
        <div className="culture-slider position-relative pb-80 style-5">
          <Swiper
            className="swiper-container"
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            speed={1000}
            pagination={{
              el: ".swiper-pagination",
              clickable: "true"
            }}
            navigation={false}
            mousewheel={false}
            keyboard={true}
            autoplay={{
              delay: 4000
            }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              480: {
                slidesPerView: 1
              },
              787: {
                slidesPerView: 2
              },
              991: {
                slidesPerView: 3
              },
              1200: {
                slidesPerView: 4
              }
            }}
          >
            {
              slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <a href={slide} className="culture-card d-block" onClick={(e) => showFancybox(e, index)}>
                    <img src={slide} alt="" />
                    <span className="overlay"></span>
                  </a>
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
        <LightGallery speed={500} backdropDuration={500} onInit={(lg) => setLgGallery(lg)}>
          {
            slides.map((slide, index) => (
              <a href={slide} className="culture-card d-block" onClick={(e) => e.preventDefault()} key={index}>
                <img src={slide} alt="" />
                <span className="overlay"></span>
              </a>
            ))
          }
        </LightGallery>
      </div>
    </section>
  )
}

export default Culture