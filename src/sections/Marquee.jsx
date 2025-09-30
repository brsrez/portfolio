import React from 'react'
import star from '../assets/images/star.svg'

const Marquee = () => (
  <>
    <div className=' bg-white text-black pb-28 lg:pb-44 overflow-hidden'>
      {/* row1 */}
      <div className=' whitespace-nowrap animate-marquee text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight'>
        <span className=' flex gap-4 lg:gap-8 mx-8 uppercase'>
          Create <img src={star} alt='' className=' marquee-star1 w-[7vw]' />
          Design <img src={star} alt='' className=' marquee-star1 w-[7vw]' />
          Inspire <img src={star} alt='' className=' marquee-star1 w-[7vw]' />
          Create <img src={star} alt='' className=' marquee-star1 w-[7vw]' />
          Design <img src={star} alt='' className=' marquee-star1 w-[7vw]' />
          Inspire <img src={star} alt='' className=' marquee-star1 w-[7vw]' />
        </span>
      </div>
      {/* row2 */}
      <div className=' whitespace-nowrap animate-marquee-reverse text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight'>
        <span className=' flex gap-4 lg:gap-8 mx-8 uppercase'>
          Create <img src={star} alt='' className=' marquee-star2 w-[7vw]' />
          Design <img src={star} alt='' className=' marquee-star2 w-[7vw]' />
          Inspire <img src={star} alt='' className=' marquee-star2 w-[7vw]' />
          Create <img src={star} alt='' className=' marquee-star2 w-[7vw]' />
          Design <img src={star} alt='' className=' marquee-star2 w-[7vw]' />
          Inspire <img src={star} alt='' className=' marquee-star2 w-[7vw]' />
        </span>
      </div>
    </div>
  </>
)

export default Marquee