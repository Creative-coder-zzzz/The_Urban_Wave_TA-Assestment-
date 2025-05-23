import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import hero_img from '../assets/hero_img.jpg';
import hero_img2 from '../assets/hero_img1.jpg';
import hero_img3 from '../assets/hero_img3.jpg';

const heroData = [
  {
    title: 'Latest Arrivals',
    subtitle: 'OUR BESTSELLERS',
    cta: 'SHOP NOW',
    image: hero_img,
  },
  {
    title: 'New Summer Collection',
    subtitle: 'HOT PICKS',
    cta: 'EXPLORE',
    image: hero_img2,
  },
  {
    title: 'Timeless Classics',
    subtitle: 'TOP RATED',
    cta: 'DISCOVER',
    image: hero_img3,
  },
];

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 5000 }}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {heroData.map((item, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="flex flex-col sm:flex-row w-full h-full ">
              {/* Left Section */}
              <div className="w-full sm:w-1/2 flex items-center justify-center px-6 z-10  bg-opacity-90">
                <div className="text-[#414141] max-w-md">
                  <div className="flex items-center gap-2">
                    <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                    <p className="font-medium text-sm md:text-base">{item.subtitle}</p>
                  </div>

                  <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
                    {item.title}
                  </h1>

                  <div className="flex items-center gap-2 mt-2">
                    <p className="font-semibold text-sm md:text-base">{item.cta}</p>
                    <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full sm:w-1/2 h-full">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
