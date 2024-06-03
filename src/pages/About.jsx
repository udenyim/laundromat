import React from 'react'
import { machine_delivery, machine_dried, machine_filling, machine_seethrough, machine_sittingon, machine_womanwash } from '../assets/images'
import { MdCreditScore } from 'react-icons/md'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

export default function About() {
  return (
    <main className='bg-white'>
      <section className='py-20 px-4'>
        <div className="container mx-auto flex flex-col md:flex-row md:items-center gap-6">
          <aside className="flex-1 relative">
            <img src={machine_sittingon} alt="machine_sittingon" className="object-cover -scale-x-100 rounded-md: h-60 md:h-72 ml-auto w-9/12" />
            <img src={machine_dried} alt="machine_dried" className="object-cover object-top absolute left-0 top-1/3 rounded-md: h-40 sm:h-52 z-10 border-2 md:border-8 border-white ml-auto w-6/12" />
            <div className="ml-auto mr-4 mt-3 w-5/12 p-4 rounded-md:p6 bg-primary text-white">
              <div className="flex gap-4 items-center">
                <div className="rounded-full grid place-items-center h-8 w-8 text-xl md:text-2xl bg-white text-secondary flex-shrink-0"><MdCreditScore />
                </div>
                <h4 className="text-lg md:text-xl font-bold">Book Now!</h4>
              </div>
              <p className="text-sm pt-3 leading-loose text-justify">It takes as little as one minute to book and as early as tomorrow to deliver</p>
            </div>
          </aside>
          <aside className="flex-1 flex flex-col gap-4">
            <p className="py-2 px-6 rounded-md bg-secondary text-white uppercase font-bold text-sm md:text-base w-max">About Us</p>
            <h3 className="text-2xl md:text-4xl font-bold text-dark">Your Trusted Partner in Laundary Care</h3>
            <p className='text-sm md:text-base leading-loose text-justify text-dark/60'>The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.</p>
            {
              [
                { id: "7348370", heading: "Passionate Expertise", text: "The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element." },
                { id: "7348371", heading: "Cutting-edge Technology", text: "The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element." },
                { id: "7348372", heading: "Customer-Centric Approach", text: "The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element." },
              ].map(about => (
                <div key={about.id} className='flex gap-3'>
                  <span className="text-2xl md:text-3xl text-secondary flex-shrink-0 mt-1">
                    <IoCheckmarkCircleOutline />
                  </span>
                  <div className=''>
                    <h5 className="text-lg md:text-xl text-dark font-bold">{about.heading}</h5>
                    <p className="text-sm md:text-base text-dark/60">{about.text}</p>
                  </div>
                </div>
              ))
            }
          </aside>
        </div>
      </section>
      <section className="relative  px-4 bg-primary">
        <img src={machine_seethrough} alt="machine_seethrough" className="absolute w-full h-full left-0 top-0 object-cover opacity-40" />
        <div className="container mx-auto relative flex flex-col md:flex-row gap-6">
          <aside className='flex-1 flex py-20'>
            <div className='flex flex-col'>
              <p className="py-2 px-6 mt-3 rounded-md bg-secondary text-white font-bold text-sm md:text-base w-max">Online Booking</p>
              <h3 className='md:text-2xl mt-4 text-justify text-white font-bold'>Discover the Ease of Online Booking!</h3>
              <div>
                <p className='text-white mt-5 text-justify text-sm md:text-base leading-loose'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates beatae earum harum, quae non iste esse enim dicta suscipit praesentium ut numquam, ipsam ratione at deserunt fugit voluptatem tempore hic.</p>
              </div>
              <p className='py-3 px-4 w-max mt-9 text-white rounded-md border text-sm md:text-base bg-primary'>Book Now!</p>
            </div>
          </aside>
          <aside className='flex-1'>
            <img src={machine_filling} alt="machine_filling}" className='border' />
          </aside>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="container mx-auto flex flex-col md:flex-row gap-6 md:gap-8">
          <aside className="flex-1 relative">
            <img src={machine_womanwash} alt="machine_womanwash" className="h-full w-11/12 rounded-md object-cover ml-auto block" />
            <figure className="bg-primary p-4 md:p-6 rounded-md w-56 text-white absolute z-10 left-0 bottom-8">
              <div className="flex items-center gap-2">
                <h4 className="text-3xl md:text-5xl font-bold tracking-tighter">25+</h4>
                <p className="text-lg md:text-xl">Years of Experience</p>
              </div>
              <p className="text-sm md:text-base text-justify pt-4">A section, in this context, is a thematic grouping of content. Each section should be identified.</p>
            </figure>
          </aside>
          <aside className="flex-1 relative flex flex-col gap-4 py-5">
            <p className="py-2 px-6 rounded-md bg-secondary text-white uppercase font-bold text-sm md:text-base w-max">About Us</p>
            <h3 className="text-2xl md:text-4xl font-bold text-dark">Your Trusted Partner in Laundary Care</h3>
            <p className='text-sm md:text-base leading-loose text-justify text-dark/60'>The section element represents a generic section of a document or application. A section, in this context, is a thematic grouping of content. Each section should be identified, typically by including a heading ( h1- h6 element) as a child of the section element.</p>
            {
              [
                {id: "14560", title: "Eco-friendly Washing", percentage: 92},
                {id: "14561", title: "Meticulous Fabric Care", percentage: 76},
                {id: "14562", title: "Stain-free elimination", percentage: 85},
                {id: "14563", title: "Ultar-fast Delivery", percentage: 97},
              ].map(item => (
                <div key={item.id} className="flex flex-col gap-1 text-dark/80">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg md:text-xl font-bold">{item.title}</h4>
                    <h5 className="text-sm md:text-base font-semibold">{item.percentage}%</h5>
                  </div>
                  <div className="bg-dark/20 rounded-sm overflow-hidden">
                    <div style={{width:`${item.percentage}%`}} className="bg-yell p-1"></div>
                  </div>
                </div>
              ))
            }
          </aside>
        </div>
      </section>
    </main>
  )
}
