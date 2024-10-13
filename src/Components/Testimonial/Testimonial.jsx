import "./Testimonial.css";
import profilepic1 from "../../assets/img/client1.jpg";
import profilepic2 from "../../assets/img/profile2.jpg";
import profilepic3 from "../../assets/img/profile3.jpg";
import profilepic4 from "../../assets/img/profile4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Import Pagination module

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Testimonial = () => {
  const clients = [
    {
      img: profilepic1,
      review:
        " I had the pleasure of working with Faysal, and his professionalism and expertise have been nothing short of exceptional. His experience in optimizing YouTube channels drastically increased my channel views, far exceeding my expectations. If you're looking for someone who truly knows how to elevate your YouTube channel, Faysal is the go-to expert. I'm thrilled with the improvements and look forward to working with him again on future projects ",
      name: " SEO Client: Lee Forrester",
    },
    {
      img: profilepic2,
      review:
        " It was great working with Faysal! He went above and beyond my expectations. He made this whole experience very easy and straightforward. I would definitely recommend working with Faysal. He is very professional and polite. ",
      name: "Digital Marketing Client: Pat Gatz",
    },
    {
      img: profilepic3,
      review:
        " I recently worked with a talented young freelancer Faysal who designed incredible thumbnails for my YouTube channel. These eye-catching thumbnails transformed the look of my videos, making them significantly more appealing. If you’re searching for top-notch thumbnail designs to elevate your channel, I highly recommend this freelancer. He’s truly one of the best in the business! ",
      name: "Thumbnails Client : DR. Fred Jones",
    },
    {
      img: profilepic4,
      review:
        "Faysal expertise in SEO optimization and YouTube channel growth management has been invaluable. His deep understanding of SEO strategies and tailored approach significantly boosted my video rankings, leading to more organic traffic and subscribers. He’s knowledgeable and proactive in providing actionable insights to ensure sustained growth. I highly recommend Faysal to anyone looking to optimize their channel and see real results ",
      name: "Youtube SEO Client",
    },
  ];
  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span className="span1">Clients always get </span>
        <span className="span2">Exceptional Work</span>
        <span className="span3"> from me ...</span>

        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* slider */}

      <div className="testi-right">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 9500,
            disableOnInteraction: false,
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt={`Client ${index + 1} profile`} />
                <span>{client.review}</span>
                <span>{client.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
