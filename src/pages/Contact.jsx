import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.238247459574!2d77.38303347511341!3d28.53255777571954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce792a4844837%3A0x385dde1c9dbaf4e!2sThink%20Academies!5e0!3m2!1sen!2sin!4v1748025300549!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='md:w-100 lg:w-120 w-80'></iframe>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-xl text-gray-600'>Our Store</p>
          <p className=' text-gray-500'>Noida Sector 142 <br /> Near Co-working space </p>
          <p className=' text-gray-500'>Tel: (415) 555-0132 <br /> Email: theUrbanWave@gmail.com</p>
          <p className=' font-semibold text-xl text-gray-600'>Careers at The Urban Wave</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default Contact
