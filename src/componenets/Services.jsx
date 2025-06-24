import React from 'react';
import Card from '../componenets/Card';
import seo from '../assets/seo.png';
import sms from '../assets/sms.png';
import add from '../assets/advertisements.png';
import adword from '../assets/adwords.png';
import bullhorn from '../assets/bullhorn.png';
import coding from '../assets/coding.png';
import store from '../assets/online-store.png';
import pro from '../assets/production.png';
import email from '../assets/email.png';

const Services = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-4 md:space-y-6 mt-12 md:mt-[70px]">
        <h2 className="text-xs sm:text-sm tracking-widest text-white uppercase">
          What We Do
        </h2>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          OUR SUITE OF{' '}
          <span className="relative inline-block">
            <span className="text-black drop-shadow-[0_1px_2px_white] font-extrabold">
              DIGITAL
            </span>
          </span>{' '}
          SOLUTIONS
        </h1>

        <p className="text-white text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          The Creative Dudes offers expert digital marketing services including SEO, social media ads,
          Google Ads, email marketing, eCommerce strategy, and more to grow your business and boost
          online presence.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-16 md:mt-[130px] max-w-7xl mx-auto px-4 sm:px-6'>
        <Card
          title="SEARCH ENGINE OPTIMIZATION"
          description="Boost your online visibility with The Creative Dudes's expert SEO strategies for better rankings and growth"
          image={seo}
        />
        <Card
          title="WEBSITE DEVELOPMENT"
          description="Create a stunning, user-friendly website with The Creative Dudes's expert development services for growth."
          image={coding}
        />
        <Card
          title="ECOMMERCE STRATEGY"
          description="Grow your online store with The Creative Dudes's tailored eCommerce strategies for increased sales."
          image={store}
        />
        <Card
          title="SOCIAL MEDIA ADVERTISING"
          description="Drive engagement and conversions with The Creative Dudes's targeted social media advertising campaigns."
          image={bullhorn}
        />
        <Card
          title="GOOGLE ADVERTISING"
          description="Maximize visibility and drive targeted traffic with The Creative Dudes's expert Google Advertising services."
          image={adword}
        />
        <Card
          title="EMAIL MARKETING​"
          description="Engage customers and boost conversions with The Creative Dudes's tailored email marketing campaigns."
          image={email}
        />
        <Card
          title="SMS MARKETING"
          description="Boost engagement and drive instant action with The Creative Dudes's targeted SMS marketing campaigns."
          image={sms}
        />
        <Card
          title="FACEBOOK ADS"
          description="Reach your ideal audience and drive results with The Creative Dudes's optimized Facebook Ads campaigns."
          image={add}
        />
        <Card
          title="BRANDING PHOTOGRAPHY"
          description="Enhance your brand's image with The Creative Dudes's professional branding photography that tells your story."
          image={pro}
        />
      </div>
    </div>
  );
};

export default Services;