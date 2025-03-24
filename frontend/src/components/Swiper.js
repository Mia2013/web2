import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function AutoplaySlideshow({ images }) {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const swiperHeight = windowHeight > 600 ? windowHeight : 600;

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    function delayedResize() {
      setTimeout(handleResize, 2500);
    }

    window.addEventListener("resize", delayedResize);

    return () => {
      window.removeEventListener("resize", delayedResize);
    };
  }, []);

  return (
    <Swiper
      style={{
        height: swiperHeight,
        maxWidth: "100%",
        overflow: "hidden",
        p: 0,
        m: 0,
      }}
      navigation
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      centeredSlides
    >
      {images.map((img) => (
        <SwiperSlide key={img.src}>
          <img
            src={img.src}
            alt=""
            style={{
              height: `calc(${swiperHeight}px - 80px)`,
              width: "100%",
              objectFit: "cover",
              objectPosition: img.position,
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
