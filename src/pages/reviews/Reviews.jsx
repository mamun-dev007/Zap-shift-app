import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import reviewImg from "../../assets/customer-top.png";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  return (
    <>
      <div className="text-center">
        <img src={reviewImg} alt="" className="mx-auto flex my-10 " />
        <h2 className="text-5xl font-bold">What our customers are sayings</h2>
        <p className="max-w-3xl mx-auto py-5">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <Swiper
        loop={true}
        spaceBetween={4}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "40%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
         autoplay={{
        delay: 2000,
      disableOnInteraction: false,

    }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Reviews;
