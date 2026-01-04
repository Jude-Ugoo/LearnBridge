import Image from 'next/image';

export default function TopBanner() {
  return (
    <div className="bg-primary-blue rounded-lg mx-4 sm:mx-6 lg:mx-[30px] mt-4 sm:mt-5 px-4 sm:px-6 py-3 sm:py-[14px] flex items-center justify-center gap-3 sm:gap-[23px]">
      <p className="text-white text-sm sm:text-base lg:text-[18px] font-normal text-center">
        Free Courses 🌟 Sale Ends Soon, Get It Now
      </p>
      <Image 
        src="/images/arrow-right.svg" 
        alt="Arrow" 
        width={17} 
        height={14}
        className="brightness-0 invert hidden sm:inline"
      />
    </div>
  );
}